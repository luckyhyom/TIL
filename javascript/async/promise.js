// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

const myFirstPromise = new Promise((resolve, reject) => {
    // We call resolve(...) when what we were doing asynchronously was successful, and reject(...) when it failed.
    // In this example, we use setTimeout(...) to simulate async code.
    // In reality, you will probably be using something like XHR or an HTML API.
    setTimeout(() => {
        resolve("Success!"); // Yay! Everything went well!
    }, 250);
});

function asyncFunc() {
    return new Promise((resolve, reject) => {
        console.log(123);
        function inner() {
            return new Promise((res, rej) => {
                setTimeout(() => {
                    res("Success!");
                }, 250);
            })
        }
        inner().then(a => { console.log(a, '!!!',); console.log(456); })
        console.log(123123);
    });
}
//myFirstPromise.then((successMessage) => {
//    // successMessage is whatever we passed in the resolve(...) function above.
//    // It doesn't have to be a string, but if it is only a succeed message, it probably will be.
//    console.log(`Yay! ${successMessage}`);
//});
{
    const ab = asyncFunc().then(a => { console.log(a) });
    console.log(ab, '??'); // then도 그냥 지나친다. 무조건 non-blocking... 다만 asyncFunc 내부에서 동기화가 될 뿐
    // 논블로킹 동작은 어느정도 이해가 되었다.

    /**
     * 여기서 그럼 동기화란 무엇인가?
     * 동기화는.. 각 처리에 필요한 결과값을 정상적으로 받을때까지 기다리는 것을 뜻한다고 생각함.
     */

    /**
     * 영상 본 후
     * 논블로킹은 제어권을 결과값 전달 이전에 넘겨줄수 있느냐 없느냐에 대한 것이고
     * 동기 비동기는 제어권 반환과 결과값 전달의 시점을 맞추느냐 마느냐에 대한 시점에 대한 관점이다.
     */
}

/**
 *
 * ---
 * 멀티스레딩을 사용한다면?
 *
 *
 * ---
 * redis를 사용한다면?
 *
 *
 * ---
 * 일단 api 콜 받으면 다 콜백큐에 때려박음..
 * 결국 싱글스레드인것은 마찬가지. 하나의 콜이 긴 시간을 필요로 하는 작업이라면 치명적일 수 있다.
 *
 * 멀티스레드와 비교했을때 장단점?
 * 스레드의 개수만큼 요청을 받을 수 있다.
 *
 * nodejs는 무조건 받아서 넘겨버린다.
 */