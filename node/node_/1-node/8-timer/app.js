let num = 1;

// 셋팅 함과 동시에 실행됨.
const interval = setInterval(()=>{
    console.log(num++);
},1000);

setTimeout(()=>{
    console.log('Time Out!');
    clearInterval(interval);
},5000);

