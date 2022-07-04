/**
 * non-callable한 ES6 클래스
 * 
 * es5에서는 함수로써 실행이 가능했지만 es6의 클래스는 오직 생성자로만 쓰인다.
 */
function FuncA(radius) {
  this.radius = radius;
  this.getDiameter = function () {
      return 2 * this.radius;
  };
  return 2;
}

// 골때리네..
console.log(FuncA(2));
console.log(getDiameter());
console.log(new FuncA(2).getDiameter());