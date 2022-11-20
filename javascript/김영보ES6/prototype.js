function Point() {
    this.point = 100;
    // 메소드 작성이 불가능하며 상속또한 불가능함. 따라서 prototype을 사용한다.
}

Point.prototype.getPoint = function () { console.log(this.point) };
new Point().getPoint();
Point.prototype.getPoint = () => { console.log(this.point) };
new Point().getPoint();


var title = '글로벌';

class TitleClass {
    title = '클래스';
    constructor() { }
    getT() {
        console.log(this.title);
    }
    getGlobalTitle = () => {
        console.log(this.title);
    }
}