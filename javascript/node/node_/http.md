stateless protocal
클라이언트가 보내는 리퀘스트는 모두 독립적이다. 즉 인과관계가 없다.

그렇다면 로그인은 어떻게 판단하느냐?
클라이언트가 로그인 정보를 같이 보내야한다.
이때 로그인 정보는, 헤더에 session과 cookie를 이용할 수 있다.

Header에 들어가는 정보에는
standard / custom
custom을 만들때는 과거(~2012)에는 X-를 붙였었다.
domain-key, domain.key
auth는 standard 키워드를 사용.
로그인 정보: Authorization: Basic AR33DFAFW41


사용 가능한 header
https://developer.mozilla.org/ko/docs/Web/HTTP/Headers (한국어 버전)

Cache-Control: max-age=<seconds> 
Cache-Control: no-cache

