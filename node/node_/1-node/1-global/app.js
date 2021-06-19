// 브라우저용인지 노드용인지 모르므로
const fs = require('fs');

// node가 가진 global객체. 브라우저는 window를 global객체로 가진다.
console.log(global);

// 함수 선언
global.hello = () =>{
    console.log('hello');
};

global.hello();

//global은 생략 가능
hello();