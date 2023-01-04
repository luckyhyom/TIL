Non-Blocking I/O
Javascript 코드는 막힘없이 계속 실행된다.
비동기 코드를 만나면 일단 이벤트루프를 거쳐 콜백큐에 넘기고
다음 요청과 코드를 계속 읽는다.

```
async getPoint(userId: string) {
    sync...
    await pointRepository.getPoint()
    sync...
    return result;
}

async postPoint() {
    sync...
    await pointRepository.postPoint()
    sync...
    return result;
}

```

컨트롤러에 두가지 메소드가 있다.
getPoint 요청을 처리하는 도중에 postPoint을 받으면 어떻게 될까?

getPoint라는 api 요청을 받음과 동시에 콜백큐에 들어가고, 다음 요청을 대기한다.
postPoint라는 api 요청이 들어오면 또 
