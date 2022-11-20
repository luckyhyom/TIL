/**
 * 함수라는 단 하나만의 목적을 위해 만들어졌다.
 * 
 * 1. 프로토타입과 생성자를 가지고 있지 않다. (즉 상속받은게 없고 상속도 할 수 없다.)
 * 2. arguments를 가지고 있지 않다. (대신 rest가 있따.)
 * 3. regular function은 호출하는 객체에게 this가 바인딩 되는 반면, arrow function은 선언된 곳에 this가 바인딩된다.
 *      https://dmitripavlutin.com/differences-between-arrow-and-regular-functions/
 */

var point = 200;
const obj = {
    point: 100,
    getPoint: () => {
        console.log(this.point); // 100
    }
}


var title = 'global';

const arrow = { title: 'arrow', getTitle: () => { console.log(this.title) } }; // 함수앞에 오브

const normal = { title: 'normal', getTitle: function () { console.log(this.title) } }; // 함수앞의 오브젝트를 참조함.

arrow.normalsFunc = normal.getTitle;
normal.arrowsFunc = arrow.getTitle;

arrow.getTitle(); // global
arrow.normalsFunc(); // arrow
normal.getTitle(); // normal
normal.arrowsFunc(); // global





// regular는 this가 동적 스코프에 바인딩되며 arrow는 정적 스코프에 바인딩된다.
var point = 200;
const sports = {
    point: 100,
    getPoint: function () {
        console.log(this.point);
        return this.point;
    }
}
sports.getPoint() // 100

var point = 200;
const sports = {
    point: 100,
    getPoint: () => {
        console.log(this.point);
        return this.point;
    }
}
sports.getPoint(); //200