DataBase Server > Schema(Database) > Tables
Schema : Group of related tables
row : data
column : data type
데이터가 가질 수 있는 고유한 값이 필요하다. primary key (pk).

ORDER BY id DESC LIMIT 2;

What is related Database?
key로 용량이 큰 중복된 데이터를 대체하며, 데이터에 대한 식별자로 사용 가능.
테이블을 효율적으로 분리하여 관리 할 수 있음. topic -> (author / topic) \*중복 문제를 해결한다.

테이블을 분리하여 관리하면, 작성자 테이블에서 이름을 변경했을때
key로 등록되어 있던 데이터들이 한번에 변경되는 효과를 얻을 수 있음.
1억개의 데이터를 일일히 변경하지 않아도 되고 읽기도 편함.
(author / topic) 나눔으로써 각각 key가 생기기 때문에 명확한 식별 가능.

저장은 분산, 보여줄땐 합쳐서 보여줄 수 있다. (join)

DB Server는 DB Client를 이용해서 접근 할 수 있다.
콘솔에서 사용 하는 DB client는 mysql Monitor.

./mysql -u root -h(host..) ip(DB Server가 설치되어 있는 컴퓨터의 IP)
