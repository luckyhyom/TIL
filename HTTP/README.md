### 캐시 검증 헤더

서버

```
cache-control: max-age=60, Last-Modified: 2020년 11월 10일 10:00:00
```

캐시 시간이 만료 후에 Last-Modified가 있다면?
클라이언트

```
if-modified-since: 2020년 11월 10일 10:00:00
```

서버에서는 변화가 없다면 304 Not Modified와 헤더내용만 보내며 Body는 제외후 보낸다.</br>
클라이언트는 메타 정보 갱신하여 캐시 재활용
헤더에 대한 정보만 다운로드 함으로써 매우적은 네트워크 비용

### Cache-Control

- max-age 초단위
- no-cache 데이터는 캐시해도 되지만, 항상 원 서버에 검증하고 사용.
- no-store 데이터에 민감한 정보가 있으므로 저장하면 안됨 (메모리에서 사용 후 최대한 빨리 삭제)

### 확실한 캐시 무효화

웹브라우저에서 자동으로 캐시하는 경우가 있다.
Cache-Control: no-cache, no-store, must-revalidate
Pragma: no-cache

- must-revalidate: 서버 에러 발생시 기존 캐시 재사용하지 말것
- Pragma: no-cache: HTTP 1.0 하위호환
