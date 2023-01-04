--
SELECT *
FROM(
	SELECT RANK() OVER(ORDER BY h.quantity DESC) AS "rank",
            u.name,
            h.quantity
	FROM holders h
	LEFT JOIN users u ON h.user_id  = u.user_id 
	WHERE h.channel_id = ''
) ranked
WHERE ranked.rank IN (1,2,3,4,5);
--