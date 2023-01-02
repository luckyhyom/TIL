```
const delay = 1000;
const delayForFail = 3000;
let i = 0;

function scheduler() {
    try {
        console.log(i++);
        if (i % 4 === 0) throw new Error("Error!");
        setTimeout(scheduler, delay);
    } catch (error) {
        console.error(error);
        setTimeout(scheduler, delayForFail);
    }
}

setTimeout(scheduler, delay);

```

1. 스케줄러는 재귀적 구조다.
2. setInterval과 setTimeout으로 구현했을때의 차이
    - setInterval은 실제 테스크의 종료 시점과 상관 없이 정해진 시간마다 반복 실행한다.
    - 테스크가 완전히 완료 후 반복하고 싶다면 setTimeout을 재귀하여 구현한다.

### etc

```
const TIMEOUT_MAX = 2 ** 31 - 1;
```

2,147,483,647은 소수 가운데에도 특별한 '메르센 소수'의 하나다.
유닉스 시간에 32비트 정수형을 쓰는 모든 컴퓨터의 시계가 UTC 기준으로
서기 2038년 1월 19일 3시 14분 07초가 지나는 순간 사인 비트가 1로 바뀌면서 음수가 되어 1901년 12월 13일 20시 45분 52초나, 자동으로 오류를 감지하고 초깃값인 0, 즉 1970년 1월 1일 자정으로 돌아가게 되는 버그를 칭한다. 영어로는 Year 2038 problem, Unix Millennium bug 등으로 표기한다.

2038년 1월 19일 3시 14분 07초 = 서기 1970년 1월 1일 자정으로부터 (2 31 −1) 초 후,즉 2147483647초 후 시점이다.
