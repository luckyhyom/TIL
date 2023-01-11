const obj = {
  exports: {}
}

obj.exports.log = { func: 'log!' }
/**
 * Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope (to the top of the current script or the current function).
 *
 * objProp는 전역변수가 아니라 함수의 스코프 안에서 놀기는 하는듯 아 모르겠다
 */
function load(obj2, objProp) {
  console.log(objProp)
  obj2 = {} // 쉣이네.. 여기서 완전히 새로운 변수가 생기는건가.. 값의 재할당이 아니라
  obj2.exports = {} // 이게 먼저 실행되면 진짜 매개변수로 들어온 객체의 값이 바뀜

  // 이건.. objProp을 재할당하는게 아니라 전역에 새로운 변수를 만들기때문에 원본에 변화가 없다.
  // let이나 const를 사용하면.. 스코프가 지역변수로 잡히기때문에 컴파일 단계에서 오류가 발생한다.
  objProp = { test: 'fromLoadFunction' }

  console.log(objProp)
  objProp.fromLoad = { func: console.log(7) }
}
load(obj, obj.exports)

console.log(obj)

/**
 * 여기서는 객체가 수정되는데 위에서는 왜 안되냐
 */

function f(o) {
  o.message = '수정함'
  o = { message: '할당함' }
  console.log(o.message)
}

const o = { message: '초기값' }
console.log(o.message)
f(o)
console.log(o.message)
