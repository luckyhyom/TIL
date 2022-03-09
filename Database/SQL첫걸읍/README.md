# Database

### Client Server Model

요청을 전달하는 클라이언트와, 요청을 받아 처리하는 서버, 복수의 컴퓨터로 나누어 하나의 시스템을 이룬다.

서버를 이용하기 위해서는 접속이 된 상태여야한다.

### Obejct

테이블, 인덱스, 뷰 등은 스키마 안에 정의된 객체이다.

### Char, Varchar

고정 길이 문자열, 가변 길이 문자열

> ToDo.. 내부 동작

### 문자형과 수치형의 대소관계 계산 방법

> 문자형 [ 1 -> 10 -> 11 -> 2 ]
>
> 수치형 [ 1 -> 2 -> 10 -> 11 ]

### 집계함수

> Null은 무시한다. <br>

> 중복제거 - SELECT COUNT(DISTINCT name) FROM sample; <br>

> AVG 함수도 Null은 무시한다. <br>

```
SELECT AVG(CASE WHEN qyantity IS NULL THEN 0 ELSE quantity END) AS avg FROM sample;
```

### GROUP BY

- 지정된 열의 값이 같은 행이 하나의 그룹으로 묶인다.
- 집계함수와 같이 사용하지 않으면 의미가 없을 수 있다. ex) 점포별, 상품별, 월별, 일별, 등의 집계

### 내부처리 순서

WHERE -> GROUP BY -> HAVING -> SELECT -> ORDER BY
