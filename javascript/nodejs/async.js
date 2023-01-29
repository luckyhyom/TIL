setTimeout(() => {
    console.log(1);
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
}, 2); // 제어권을 async.js에 넘겨주지만 setTimeout은 실행중이다. 아래 코드를 읽기 전에 2ms가 지났으므로 이것의 핸들러가 먼저 큐에 들어간다.

setTimeout(() => {
    console.log("2 나는?"); // 이벤트 루프의 Timers Queue에 첫번째로 들어간 타이머의 콜백이 완전히 종료 된 후 실행된다.
}, 0);

setTimeout(() => {
    console.log(3, "마지막에 실행된다.");
}, 0);

/**
 * 하지만 I/O작업은 각 비동기 함수에서 각기 동시에 이루어진다.
 * I/O가 완료된 이후 실행되는 이벤트핸들러(콜백)가 이벤트 큐에 들어가서 순차적으로 실행되는 것일 뿐
 *
 *
 */
