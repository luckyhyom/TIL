/**
 * var는 글로벌 변수이며
 * let은 블럭스코프를 가진 지역 변수이다.
 * let은 글로벌 변수로 설정되지 않는다.
 */

var globalVar = 'var';
let localLet = 'let'

this.globalVar; // 'var'
this.localLet; // undefined



/**
 * var는 전체에서 하나, let은 블럭단위로 1개씩
 * 무조건 let을 써야되는 것은 아닐 수도 있다. 수가 크다면 스코프로 관리되는 수많은 지역변수보다 전역변수 하나가 더 나을수도 있다.
 */
var node = document.querySelector(".sports");
for (let k = 0; k < node.children.length; k++) {
    node.children[k].onclick = function () {
        event.target.style.backgroundColor = 'yellow';
        console.log(k);
    }
}
