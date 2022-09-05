SELECT
		w.user_id,
		wh.createdAt,
		wh.`type` ,
		wh.variable_amount,
		wh.balance,
		SUM(CASE
				WHEN wh.`type` IN ('deposit','trade_sell','copyright_fee','event')
				THEN wh.variable_amount - wh.fee 
				ELSE (wh.variable_amount + wh.fee) * -1
			END)
		OVER(PARTITION BY wh.wallet_id ORDER BY wh.createdAt) AS actual
FROM wallet_history wh
JOIN wallets w ON w.wallet_id = wh.wallet_id 
WHERE wh.deletedAt IS NULL;
