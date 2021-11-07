const fetch = require('node-fetch');
// html에서는 왜 fetch를 그냥 쓸 수 있었을까? 브라우저에 fetch가 깔려있어서인가.
// node코드와 js코드의 차이점 : node를 쓰는 js는 서버이고, js코드는 브라우저에서도 쓰일 수 있다.

fetch('https://127.0.0.1:8080/test',{ method: "POST",
headers: {
  "Content-Type": "application/json",
},
body: JSON.stringify({
  title: "Test",
  body: "I am testing!",
  userId: 1,
}),})