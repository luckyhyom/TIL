var connectionName = '0.0.0.0:3306'; // 접속할 MySQL 서버의 IP와 Port(Default:3306)
var user = 'root'; // MySQL 유저 ID
var userPwd = 'pass'; // MySQL 유저 PW
var db = 'test'; // 접속할 MySQL DB명
var instanceUrl = 'jdbc:mysql://' + connectionName;
var dbUrl = instanceUrl + '/' + db;
var sheet = SpreadsheetApp.getActiveSheet(); // SpreadSheet 객체 생성

var StartDate = `'2022-04-10'`;
var EndDate = `'2022-12-31'`;

function exportDatabase() {
var conn = Jdbc.getConnection(dbUrl, user, userPwd); // DB 연결
var stmt = conn.createStatement();
stmt.setMaxRows(1000);

function createData(query) {
const 쿼리 = stmt.executeQuery(query); //쿼리
let 누적 = 0;
var 데이터 = {};
while(쿼리.next()) {
// getRange(Integer row, Integer Column)
var 날짜 = 쿼리.getString('date')
// 데이터[날짜] = 쿼리.getString('total');
누적 += Number(쿼리.getString('total'));
데이터[날짜] = 누적;
}
쿼리.close();
return 데이터;
}

const 충전금액 = createData(`SELECT DATE_FORMAT(createdAt,'%Y-%m-%d') date, SUM(variable_amount) AS total FROM wallet_history WHERE type = 'charging' AND deletedAt IS NULL GROUP BY date;`);
const 출금금액 = createData(`SELECT DATE_FORMAT(createdAt,'%Y-%m-%d') date, SUM(variable_amount) AS total FROM wallet_history WHERE type = 'withdrawal' AND deletedAt IS NULL GROUP BY date;`);
const 본인인증회원 = createData(`SELECT DATE_FORMAT(createdAt,'%Y-%m-%d') date, COUNT(*) AS total FROM users WHERE roles = 'user' AND name NOT LIKE 'test%' AND deletedAt IS NULL GROUP BY date;`);
const 게스트 = createData(`SELECT DATE_FORMAT(createdAt,'%Y-%m-%d') date, COUNT(*) AS total FROM users WHERE roles = 'guest' AND name NOT LIKE 'test%' AND deletedAt IS NULL GROUP BY date;`);
const 입찰자수 = createData(`SELECT DATE_FORMAT(createdAt,'%Y-%m-%d') date, COUNT(user_id) AS total FROM auctions WHERE auction_status != 'cancel' AND deletedAt IS NULL GROUP BY date;`);
const 총입찰금액 = createData(`SELECT DATE_FORMAT(createdAt,'%Y-%m-%d') date, SUM(bid_cash * bid_count) AS total FROM auctions WHERE auction_status != 'cancel' AND deletedAt IS NULL GROUP BY date;`);
const 낙찰금액 = createData(`SELECT DATE_FORMAT(createdAt,'%Y-%m-%d') date, SUM(bid_cash * bid_count) AS total FROM auctions WHERE auction_status != 'cancel' AND auction_status != 'fail_bid' AND deletedAt IS NULL GROUP BY date;`);
const 패찰금액 = createData(`SELECT DATE_FORMAT(createdAt,'%Y-%m-%d') date, SUM(bid_cash * bid_count) AS total FROM auctions WHERE auction_status = 'fail_bid' AND deletedAt IS NULL GROUP BY date;`);

var 날짜데이터 = stmt.executeQuery(` SELECT a.date_ymd FROM ( SELECT CURDATE() - INTERVAL (a.a + (10 * b.a) + (100 * c.a)) DAY as date_ymd FROM ( SELECT 0 AS a UNION ALL SELECT 1 UNION ALL SELECT 2 UNION ALL SELECT 3 UNION ALL SELECT 4 UNION ALL SELECT 5 UNION ALL SELECT 6 UNION ALL SELECT 7 UNION ALL SELECT 8 UNION ALL SELECT 9 ) AS a CROSS JOIN ( SELECT 0 AS a UNION ALL SELECT 1 UNION ALL SELECT 2 UNION ALL SELECT 3 UNION ALL SELECT 4 UNION ALL SELECT 5 UNION ALL SELECT 6 UNION ALL SELECT 7 UNION ALL SELECT 8 UNION ALL SELECT 9 ) AS b CROSS JOIN ( SELECT 0 as a UNION ALL SELECT 1 UNION ALL SELECT 2 UNION ALL SELECT 3 UNION ALL SELECT 4 UNION ALL SELECT 5 UNION ALL SELECT 6 UNION ALL SELECT 7 UNION ALL SELECT 8 UNION ALL SELECT 9 ) AS c ) AS a WHERE 1 = 1 AND a.date_ymd BETWEEN ${StartDate} AND ${EndDate} GROUP BY date_ymd ORDER BY a.date_ymd ASC;`); // 쿼리

var i=2; // 2번째 row부터 채움
var 충전금액컬럼이전데이터 = 0;
var 출금금액컬럼이전데이터 = 0;
var 본인인증회원컬럼이전데이터 = 0;
var 게스트컬럼이전데이터 = 0;
var 입찰자수컬럼이전데이터 = 0;
var 총입찰금액컬럼이전데이터 = 0;
var 낙찰금액컬럼이전데이터 = 0;
var 패찰금액컬럼이전데이터 = 0;

while(날짜데이터.next()) {
// getRange(Integer row, Integer Column)
const 날짜컬럼 = sheet.getRange(i, 1); // A2
const 본인인증회원컬럼 = sheet.getRange(i, 2); // B2
const 게스트컬럼 = sheet.getRange(i, 3); //
const 입찰자수컬럼 = sheet.getRange(i, 4); //
const 날짜컬럼둘 = sheet.getRange(i, 5); //
const 충전금액컬럼 = sheet.getRange(i, 6); //
const 출금금액컬럼 = sheet.getRange(i, 7); //
const 총입찰금액컬럼 = sheet.getRange(i, 8); //
const 낙찰금액컬럼 = sheet.getRange(i, 9); //
const 패찰금액컬럼 = sheet.getRange(i, 10); //

      const 날짜 = 날짜데이터.getString("date_ymd");
      if(날짜 === '2022-04-27') {
        날짜컬럼.setValue('날짜'); // 현재 row의 title 컬럼 값
        본인인증회원컬럼.setValue('현재본인인증회원'); // 현재 row의 title 컬럼 값
        게스트컬럼.setValue('현재게스트'); // 현재 row의 title 컬럼 값
        입찰자수컬럼.setValue('현재입찰자수'); // 현재 row의 title 컬럼 값
        날짜컬럼둘.setValue('날짜');
        충전금액컬럼.setValue('현재충전금액'); // 현재 row의 title 컬럼 값
        출금금액컬럼.setValue('현재출금금액'); // 현재 row의 title 컬럼 값
        총입찰금액컬럼.setValue('현재총입찰금액'); // 현재 row의 title 컬럼 값
        낙찰금액컬럼.setValue('현재낙찰금액'); // 현재 row의 title 컬럼 값
        패찰금액컬럼.setValue('현재패찰금액'); // 현재 row의 title 컬럼 값
      } else {
      const 현재충전금액 = 충전금액[날짜] || 충전금액컬럼이전데이터;
      const 현재출금금액 = 출금금액[날짜] || 출금금액컬럼이전데이터;
      const 현재본인인증회원 = 본인인증회원[날짜] || 본인인증회원컬럼이전데이터;
      const 현재게스트 = 게스트[날짜] || 게스트컬럼이전데이터;
      const 현재입찰자수 = 입찰자수[날짜] || 입찰자수컬럼이전데이터;
      const 현재총입찰금액 = 총입찰금액[날짜] || 총입찰금액컬럼이전데이터;
      const 현재낙찰금액 = 낙찰금액[날짜] || 낙찰금액컬럼이전데이터;
      const 현재패찰금액 = 패찰금액[날짜] || 패찰금액컬럼이전데이터;

      날짜컬럼.setValue(날짜); // 현재 row의 title 컬럼 값
      본인인증회원컬럼.setValue(현재본인인증회원); // 현재 row의 title 컬럼 값
      게스트컬럼.setValue(현재게스트); // 현재 row의 title 컬럼 값
      입찰자수컬럼.setValue(현재입찰자수); // 현재 row의 title 컬럼 값
      날짜컬럼둘.setValue(날짜);
      충전금액컬럼.setValue(현재충전금액); // 현재 row의 title 컬럼 값
      출금금액컬럼.setValue(현재출금금액); // 현재 row의 title 컬럼 값
      총입찰금액컬럼.setValue(현재총입찰금액); // 현재 row의 title 컬럼 값
      낙찰금액컬럼.setValue(현재낙찰금액); // 현재 row의 title 컬럼 값
      패찰금액컬럼.setValue(현재패찰금액); // 현재 row의 title 컬럼 값

      충전금액컬럼이전데이터 = 현재충전금액;
      출금금액컬럼이전데이터 = 현재출금금액;
      본인인증회원컬럼이전데이터 = 현재본인인증회원;
      게스트컬럼이전데이터 = 현재게스트;
      입찰자수컬럼이전데이터 = 현재입찰자수;
      총입찰금액컬럼이전데이터 = 현재총입찰금액;
      낙찰금액컬럼이전데이터 = 현재낙찰금액;
      패찰금액컬럼이전데이터 = 현재패찰금액;

      console.log(날짜,현재충전금액,

현재출금금액,
현재본인인증회원,
현재게스트,
현재입찰자수,
현재총입찰금액,
현재낙찰금액,
현재패찰금액);
}

      i++;

}

/_ 연결 해제 _/
날짜데이터.close();
stmt.close();
conn.close();
}
