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

### 서브쿼리

다중 명령을 하나로 묶는 것

> 테이블에서 a열의 값이 가장 작은 행을 삭제한다. <br>
>
> 1. 가장 작은 값을 찾기 <br>
> 2. 삭제하기

```
DELETE FROM sample WHERE a = (SELECT MIN(a) FROM sample);
```

### 스칼라

하나의 값만 반환하는 명령문

### 상관 서브쿼리

부모 명령과 자식인 서브쿼리가 특정 관계를 맺는 것

> IN에 서브쿼리를 이용하기 <br>
> SELCT \* FROM sample551 WHERE no IN (SELECT no2 FROM sample552);

### 인덱스

인덱스도 독립된 데이터베이스 객체이다.

### 이진트리

- 이진 탐색은 미리 정렬되어 있어야한다.
- 중복 값 입력 불가

### VIEW

FROM구에 기술된 서브쿼리에 이름을 붙여 쓰기 편하게 한 것, <br>
SELECT문에 이름을 붙인 것 <br>
ETC) 머티리얼라이즈드 뷰?

## 집합연산

### UNION

여러가지 테이블 또는 SELECT 문을 함께 묶어 결과를 반환한다. 중복은 제거한다.

### 교차 결합

FROM구에 두개 이상의 테이블을 지정한다, 곱집합이 된다. ABC x 123

> 내부결합: 곱집합에서 원하는 조합을 검색한다. <br> > `SELECT * FROM 삼품, 재고수 WHERE 상품.상품코드 = 재고수.상품코드;`
