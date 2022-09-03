SELECT  amount.user_id,
		u2.name,
		amount.현재가용금,
		(amount.should_be - (CASE WHEN staging.실제대기금 THEN staging.실제대기금 ELSE 0 END)) AS 실제보유금,
		amount.현재가용금 - (amount.should_be - (CASE WHEN staging.실제대기금 THEN staging.실제대기금 ELSE 0 END)) AS `보유금차이`,
		amount.현재대기금,
		CASE WHEN staging.실제대기금
			 THEN staging.실제대기금
			 ELSE 0 END AS `실제대기금`,
		CASE WHEN amount.현재대기금 - staging.실제대기금 = 0
			 THEN 0
			 WHEN amount.현재대기금 - staging.실제대기금 > 0
			 THEN amount.현재대기금 - staging.실제대기금
			 WHEN staging.실제대기금 IS NULL
			 THEN amount.현재대기금
			 ELSE amount.현재대기금 - 0 END AS `대기금차이`,
		amount.현재전체금액,
		amount.should_be AS `실제전체금액`,
		amount.lack_of AS `전체금액차이`
FROM (
		SELECT * 
		FROM (
				SELECT 	w.wallet_id, 
						w.user_id,
						w.available_amount AS 현재가용금,
						w.staging_amount AS 현재대기금,
						w.available_amount + w.staging_amount AS '현재전체금액',
						wh.deposit - wh.withdrawal AS should_be,
						(wh.deposit - wh.withdrawal) - (available_amount + staging_amount) AS lack_of
				FROM wallets w
				LEFT JOIN (
							SELECT CASE WHEN deposit.total_deposit
										THEN deposit.total_deposit
										ELSE 0 END AS deposit,
								   CASE WHEN withdrawal.total_withdrawal
								   		THEN withdrawal.total_withdrawal
								   		ELSE 0 END AS withdrawal,
								   deposit.wallet_id AS wallet_id
							FROM (
									SELECT  SUM(variable_amount) - SUM(fee) AS total_deposit,
											wallet_id
									FROM wallet_history wh
									WHERE `type` IN ('deposit','trade_sell','copyright_fee','event')
									AND wh.deletedAt IS NULL
									GROUP BY wallet_id
								) deposit
							LEFT JOIN (
									SELECT  SUM(variable_amount) + SUM(fee) AS total_withdrawal,
											wallet_id 
									FROM wallet_history wh
									WHERE `type` NOT IN ('deposit','trade_sell','copyright_fee','event')
									AND wh.deletedAt IS NULL
									GROUP BY wallet_id
								) withdrawal
							ON deposit.wallet_id = withdrawal.wallet_id
						) wh 
				ON w.wallet_id = wh.wallet_id
				WHERE w.deletedAt IS NULL
			) result
		WHERE result.should_be IS NOT NULL
		AND result.lack_of != 0
		ORDER BY lack_of DESC, should_be DESC
	) amount
LEFT JOIN (
			SELECT  result.user_id,
					result.name,
					result.exchange + result.auction + result.trade AS 실제대기금
			FROM (
					SELECT  u.user_id,
							u.name,
							CASE WHEN exchange.stagingExchange THEN exchange.stagingExchange
							ELSE 0 END AS exchange,
							CASE WHEN auction.stagingAuction THEN auction.stagingAuction
							ELSE 0 END AS auction,
							CASE WHEN trade.stagingBuy THEN trade.stagingBuy
							ELSE 0 END AS trade
					FROM users u 
					LEFT JOIN (
								SELECT CASE WHEN wse.staging_amount + wse.fee THEN wse.staging_amount + wse.fee
									   ELSE 0 END AS stagingExchange,
									   wse.wallet_id, w.user_id
								FROM wallet_staging_exchange wse
								JOIN wallets w 
								ON wse.wallet_id = w.wallet_id 
								WHERE wse.deletedAt IS NULL
								AND wse.`type` = 'withdrawal'
							) exchange
					ON u.user_id  = exchange.user_id
					LEFT JOIN (
								SELECT CASE WHEN SUM(bid_cash * bid_count) THEN SUM(bid_cash * bid_count)
									   ELSE 0 END AS stagingAuction,
									   a.user_id 
								FROM auctions a
								WHERE a.deletedAt IS NULL
								AND auction_status = 'in_progress'
								GROUP BY user_id
							) auction
					ON u.user_id = auction.user_id		
					LEFT JOIN (
								SELECT CASE WHEN SUM((bo.order_quantity - bo.traded_quantity) * order_price) THEN SUM((bo.order_quantity - bo.traded_quantity) * order_price)
									   ELSE 0 END AS stagingBuy, bo.user_id 
								FROM buy_orders bo 
								WHERE bo.deletedAt IS NULL
								AND order_status = 'ongoing'
								GROUP BY user_id 
							) trade
					ON u.user_id = trade.user_id
					WHERE exchange.stagingExchange IS NOT NULL
					OR auction.stagingAuction IS NOT NULL
					OR trade.stagingBuy IS NOT NULL
				) result
		) staging
ON amount.user_id = staging.user_id
LEFT JOIN users u2 ON amount.user_id = u2.user_id;
