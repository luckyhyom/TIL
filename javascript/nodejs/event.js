/**
 * buffer: 메모리에 들어있는 데이터 자체
 * stream: 데이터를 잘라서 전달하는 것
 * pipe: 데이터 흐름을 연결한다.
 * event: 이벤트를 만들어서 구독하게하고 이벤트를 발생시킬 수 있다.
 */
const EventEmitter = require("events");

class BankBroker extends EventEmitter {
    banks = {};
    publishMoney(bank, data) {
        this.emit(bank, data);
    }

    subscribe(bank) {
        if (this.banks[bank]) return;
        this.banks[bank] = bank;
        this.on(bank, (data) => console.log(data + "$"));
    }
}

const broker = new BankBroker();
broker.subscribe("kb");
broker.publishMoney("kb", 1);
broker.subscribe("hana");
broker.publishMoney("hana", 5);
broker.subscribe("nh");
broker.publishMoney("nh", 3);
broker.subscribe("kb");
broker.publishMoney("kb", 5);
