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
// console.log(FuncA(2));
// console.log(getDiameter());
// console.log(new FuncA(2).getDiameter());


function Parent() {}
Parent.staticMethod = function () {
  this.s = 11
  return 'static method'
}
Parent.prototype.method = function () {
  this.m = 12
  return 'method'
}



// const obj = { a: 1, b: 2, [Symbol()]: 3 };
// console.log(Object.getOwnPropertyDescriptor(obj, 'a'));
// console.log(Object.getOwnPropertyDescriptors(obj));

const obj = {
  b:1,
  get a(){ return this.b; },
  set a(v){ console.log(v); }
};
// obj.a = 10;
// console.log(obj.a);
const obj2 = Object.assign({}, obj);
// obj2.a = 20;
// console.log(obj2.a);
const b = { ...obj }
console.log(b.a);
// b.a = 10
// console.log(b.a);
const obj3 = Object.defineProperties({}, Object.getOwnPropertyDescriptors(obj));
// obj3.a = 30;
// console.log(obj3.a);

// console.log({...obj});

/**
 * 느낀 것
 * 나도 명확히 설명할수 없는 부분에 대해서 복습 할 수 있는 시간을 가졌다.
 * 하지만.. 자바스크립트를 어느정도 사용해왔다면 기본적으로 es6 문법을 사용했을 것이다.
 * 복습하는 것은 좋지만.. 이것이 반복되면 비효율적일 수 있다. 물론 내가 다 외워서 통달하면 그때그때 설명이 가능하겠지만
 * 일단 나는 더 나은 것이라 생각하는 것을 제안하고, 그 이유에 대해서는 직접 찾아보게 하는 것이 맞는 것 같다.
 *
 * 어쨋든 js를 모르고 온것이니, js를 먼저 사용하던 내가 방향을 제시하고 그것에 대한 근거는 알아서 찾는 방식으로 하는 것이 맞는 것 같다.
 * 자연스럽게 작업할때 편하게 쓰고있던 방식에 대해 뭔가 이견이 나오면 그것에 대해 다시 반박하는 것이 그렇게 생산적인 것 같지는 않다. (쓰다보면 알게 될 것에 대해)
 * 물론 나도 공부하며 쉽고 명확하게 답을 해줄수 있는 것은 해줄것이다.
 *
 * 결론: 쓰다보면 알 수 있는 것들에 대하여 내가 모든 것을 대답해줄 필요도 없고 아는 것만 대답하고 나머지는 스스로 리서치하도록
 *
 * 납득시켜야 하는 사람은 내가 아님 기존의 것을 변경하려는 사람이 납득을 시켜야함. 근데 반박시 나도 반박해야하므로..
 *
 * 어드민부터 작업 들어가자는 말이 클라이언트쪽에서 쓰는 코드는 일단 건드리지 말자는 의도였음.
 * 
 * 
 */