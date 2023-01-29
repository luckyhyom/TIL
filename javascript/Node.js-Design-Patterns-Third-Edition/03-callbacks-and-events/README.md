### 콜백

비동기식 프로그래밍에서는 파일 읽기 또는 네트워크 요청 수행과 같은 일부 작업을 백그라운드 작업으로 실행 할 수 있습니다. 비동기 작업이 호출되면 이전 작업이 아직 완료되지 않은 경우에도 다음 작업이 즉시 실행됩니다. 이 상황에서는 비동기 작업이 끝났을 때 이를 통지받아 해당 작업의 결과를 사용하여 다음의 작업을 이어나가야 합니다. Node.js에서 비동기 작업의 완료를 통지받는 가장 기본적인 매커니즘은 콜백입니다. 콜백은 비동기 작업의 결과를 가지고 런타임에 의해 호출되는 함수일 뿐입니다.

콜백은 다른 모든 비동기 매커니즘을 기초로 하는 것들의 가장 기본적인 구성요소입니다. 이것이 콜백이 어떻게 장동하는지 알아야 하는 이유입니다.

또한 콜백 패턴과 연관이 있는 관찰자 패턴에 대해 배워볼 것입니다.

### 콜백 패턴

- 콜백은 작업의 결과를 전달하기 위해서 호출되는 함수다.
- JS는 콜백에 이상적인 언어다.
  - 함수가 일급 클래스 객체이면서
    - 변수에 할당하거나
    - 인자로 전달되거나
    - 다른 함수 호출에서 반환되거나
    - 자료구조에 저장될 수 있기 때문
- 콜백을 구현하는 또 다른 이상적인 구조는 클로저
  - 클로저를 사용하면 실제로 생성된 함수의 환경을 참조할 수 있습니다.
  - 콜백이 언제 어디서 호출되는지에 관계 없이 비동기 작업이 요청된 컨택스트를 항상 유지할수 있기 때문입니다.

### 연속 전달 방식

- 콜백은 다른 함수에 인자로 전달되는 함수이며 작업이 완료되면 작업 결과를 가지고 호출됩니다.
- 단순히 결과를 호출자에게 직접 반환하는 대신 결과를 다른 함수로 전달하는 것을 말합니다.

```
function addCps (a, b, callback) {
  callback(a + b) // 결과가 나오면 인자로 받은 함수를 실행시킨다.
}

console.log('before')
addCps(1, 2, result => console.log(`Result: ${result}`)) // 결과가 나오면 나를 다시 불러줘
console.log('after')
```

### EventEmitter Class

- <b>전통적인 CPS와 다른점은 주체가 실질적으로 여러 관찰자에게 통지를 할 수 있다는 점</b>

- 콜백에서처럼 에러가 발생했을때 예외를 단지 throw할 수 없습니다. error라는 특수한 이벤트를 발생시키고, Error라는 객체를 인자로 전달하는 규약을 따릅니다.