Join And Update

```
UPDATE support_table A INNER JOIN member_table B ON
A.sp_uid=B.user_id
SET B.level=7
WHERE B.level=9 AND A.support_money > 10000
```
