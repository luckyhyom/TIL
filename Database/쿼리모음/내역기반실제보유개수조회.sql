-- 체결됐는데 주식은 안들어오고 (소멸), 구매주문은 계속 남아있어서 구매가 계속 일어난다, 그러니 이미 체결된 주문 있는지 확인할것
-- 구매 신청 (여러개) 후 판매 신청:구매자는 마지막 주문의 개수만 체결되면서 주식이 증발한다, 돈도마지막것만 빠짐.. 즉 돈에는 문제가  없지만주식에 문제가 있음.
-- 병렬적으로 실행해서 생긴 문제, 하나의 커넥션을 사용하면서도 병렬적으로 실행됐기 때문


/**
 * Section 1. 구매, 판매에서 오류로 인해 내역에서 중복되는 것이 있는지 확인
 * Section 2. 내역을 기반으로 실제 보유 개수를 파악한다.
 */



/**
 * Section 1
 * 오류로 인한 내역상 중복이 없는지 확인한다.
 * 
 * Part 1. 구매주문과 구매주문에 해당하는 거래내역을 조회한다.
 * Part 2. 구매주문의 주문개수와 거래내역에서 거래된 총 개수와 일치하하지 않는 데이터를 조회한다.
 * Part 3. 판매주문에 대해 1,2번 과정 반복
 * Part 4. 구매주문과 판매주문 총 체결 개수가 일치하는지 비교
 * 
 * 주의사항: deletedAt 컬럼에 값이 없어야한다. (잘못된 데이터라서 과거에 삭제한것)
 */

/**
 * Part 1 ~ 2
 * 주문개수와 내역기반체결개수가 다른 경우는 현재 살아있는 주문만 있어야한다.
 * (완료되거나 취소된 주문은 내역기반 체결개수가 주문개수와 동일하다. (취소수량도 체결개수로 계산된다.(상태로 구분 가능)))
 * 만약 closed상태의 주문이 주문개수와 체결개수가 다른것이 있다면 잘못된 것.
 */
SELECT *
FROM (
		SELECT  COUNT(th.trade_history_id) AS 거래횟수,
				bo.createdAt AS bo_createdAt,
				bo.buy_order_id,
				bo.order_status AS 상태,
				bo.order_quantity AS 주문개수,
				bo.traded_quantity AS 체결개수,
				CASE WHEN SUM(th.traded_quantity) THEN SUM(th.traded_quantity) ELSE 0 END AS 내역기반체결개수,
				CASE WHEN th.unit_price THEN th.unit_price ELSE 0 END AS 체결단가,
				bo.user_id ,
				bo.channel_id
		FROM buy_orders bo
		LEFT JOIN trade_history th ON bo.buy_order_id = th.order_id
		WHERE th.deletedAt IS NULL
		AND bo.deletedAt IS NULL
		GROUP BY buy_order_id
		ORDER BY bo.createdAt DESC, buy_order_id DESC
	) result
WHERE result.주문개수 != result.내역기반체결개수
ORDER BY 거래횟수 DESC;

-- Part 3 (판매주문에 대한 Part 1 ~ 2)
SELECT *
FROM (
		SELECT  COUNT(th.trade_history_id) AS 거래횟수,
				so.createdAt AS bo_createdAt,
				so.sell_order_id ,
				so.order_status AS 상태,
				so.order_quantity AS 주문개수,
				so.traded_quantity AS 체결개수,
				CASE WHEN SUM(th.traded_quantity) THEN SUM(th.traded_quantity) ELSE 0 END AS 내역기반체결개수,
				CASE WHEN th.unit_price THEN th.unit_price ELSE 0 END AS 체결단가,
				so.user_id ,
				so.channel_id
		FROM sell_orders so
		LEFT JOIN trade_history th ON so.sell_order_id = th.order_id
		WHERE th.deletedAt IS NULL -- 지운 내역이므로 제외한다. (잘못된 데이터)
		AND so.deletedAt IS NULL
		GROUP BY so.sell_order_id
		ORDER BY so.createdAt DESC, so.sell_order_id  DESC
	) result
WHERE result.주문개수 != result.내역기반체결개수
ORDER BY 거래횟수 DESC;

-- Part 4 내역에서 판매,구매의 총 체결 개수가 일치함 (2565개)
SELECT SUM(traded_quantity) FROM buy_orders bo WHERE deletedAt IS NULL;
SELECT SUM(traded_quantity) FROM sell_orders so WHERE deletedAt IS NULL;
SELECT SUM(traded_quantity) FROM trade_history th WHERE deletedAt IS NULL AND trade_type = 'sell';
SELECT SUM(traded_quantity) FROM trade_history th WHERE deletedAt IS NULL AND trade_type = 'buy';


-- 현재 유통량
SELECT SUM(available_quantity)  FROM trade_users tu group by channel_id;

/**
 * Section 2
 * 실제 개수와 현재개수가 다른 유저 조회하기.
 * 각 유저의 채널별 보유 개수 = 낙찰개수 + 구매개수 - 판매개수
 */
SELECT *
FROM (
		SELECT  result.user_id,
				result.channel_id 채널,
				result.auction 낙찰,
				result.buy 구매,
				result.sell 판매,
				result.auction + result.buy - result.sell AS 실제개수,
				available_quantity AS 현재개수,
				available_quantity - (result.auction + result.buy - result.sell) AS 차이
		FROM (
				SELECT  tu.user_id,
						tu.available_quantity,
						tu.channel_id,
						CASE WHEN auction.totalAuction IS NULL THEN 0 ELSE auction.totalAuction END AS auction,
						CASE WHEN buy.totalBuy IS NULL THEN 0 ELSE buy.totalBuy END AS buy,
						CASE WHEN sell.totalSell IS NULL THEN 0 ELSE sell.totalSell END AS sell
				FROM trade_users tu
				LEFT JOIN (
						SELECT  w.user_id,
								CASE
								WHEN description LIKE '지식%' THEN 'UCMKrPB54Da-61S2Obt-S3tw'
								WHEN description LIKE '플레임%' THEN 'UCDLDbittWhk2KXvaCT0YpZQ'
								WHEN description LIKE '혜인%' THEN 'UC-ohedcemUvr4Qai26n560w'
								ELSE NULL END channel_id,
								traded_quantity totalAuction
						FROM wallet_history wh
						LEFT JOIN wallets w ON wh.wallet_id = w.wallet_id
						WHERE w.deletedAt IS NULL
						AND wh.deletedAt IS NULL
						AND `type` = 'auction'
						ORDER BY w.user_id
					) auction
				ON tu.user_id = auction.user_id AND tu.channel_id = auction.channel_id
				LEFT JOIN (
							SELECT  user_id,
									channel_id,
									SUM(traded_quantity) totalBuy
							FROM trade_history th
							WHERE deletedAt IS NULL
							AND trade_type = 'buy'
							GROUP BY user_id, channel_id
						) buy
				ON tu.user_id = buy.user_id AND tu.channel_id = buy.channel_id
				LEFT JOIN (
							SELECT  user_id,
									channel_id,
									SUM(traded_quantity) totalSell
							FROM trade_history th
							WHERE deletedAt IS NULL
							AND trade_type = 'sell'
							GROUP BY user_id, channel_id
						) sell
				ON tu.user_id = sell.user_id AND tu.channel_id = sell.channel_id
			) result
	) result
WHERE result.실제개수 != result.현재개수
ORDER BY result.user_id;

-- 구매와 판매가 이어져있지 않다. join 불가능, 