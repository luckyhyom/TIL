### 모든 키 조회

https://stackoverflow.com/questions/5213339/how-to-see-indexes-for-a-database-or-table-in-mysql

```
SELECT DISTINCT
TABLE_NAME,
INDEX_NAME
FROM INFORMATION_SCHEMA.STATISTICS
WHERE TABLE_SCHEMA = 'your_schema';
```
