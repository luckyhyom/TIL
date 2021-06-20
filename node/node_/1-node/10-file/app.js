// file system
const fs = require('fs');

// api는 3가지 방식으로 제공된다.
// rename(..., callback(error, data))
// try { renameSync(...) } catch(e) { }
// promise.rename().then().catch(0)


// 프로세스가 죽었다는 말은 그 다음 코드를 실행하지 못한다는 듯.
try{
    fs.renameSync('./file.txt','./file2.txt');
} catch (error) {
    console.log(error);
}

console.log('hi');

// 비동기 (비동기이기 때문에 콜백함수를 전달해줘야한다.)
// 콜백함수는 어떤 인자를 전달받는지 확인한다.
// rename함수를 실행시키고 그 결과등을 콜백함수로 전달받고. 그것을 이용해 직접 처리할수있다.
fs.rename('./file2.txt','./text.txt',()=>{});


fs.promises.rename('./text.txt','./text2.txt')
.then(()=>{console.log('done');})
// .catch(error => console.error(error));
.catch(console.error);