const fs = require('fs').promises;

// reading a file
fs.readFile('./text.txt','utf8') // <Buffer 48 65 6c 6c 6f 21>
.then(data => console.log(data))
.catch(console.error);

// writing a file

fs.writeFile('./file.txt', 'Hello, Dream Coers! :>') // 프리티어가 자동 포맷하지 않도록 주석 추가
.catch(console.error);

fs.appendFile('./file.txt', 'appended String!') //
.then(()=>{
    //copy
    fs.copyFile('./file.txt','./file2.txt')
    .catch(console.error);
})
.catch(console.error);

// copy.. 비동기이므로, 데이터를 쓰기도 전에 복사했을 수 있음
// fs.copyFile('./file.txt','./file2.txt')
//     .catch(console.error);

// 비동기는 순서대로 실행될수도 있고, 아닐 수도 있다. 순서가 보장되지 않음.
// 순서가 중요하다면 then을 사용해야함.

fs.mkdir('sub-folder')
.catch(console.error);

fs.readdir('./')//
.then(console.log)
.catch(console.error);

// point
// api에 전달할 인자가 있는지, 리턴되는 값은 무엇인지, promise라면 catch를 이용해 에러를 잡아야함. 