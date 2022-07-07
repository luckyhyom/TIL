let obj = {}; // obj가 객체 주소를 참조한다. -> reference count 1
let obj2 = obj; // obj2가 obj를 통해서 {}를 참조한다. -> reference count 2
let obj2 = null; // obj2에 null이 들어가며 {}의 참조 카운트가 하나 감소
let obj = null; // 참조 카운트가 0이 되며 garbage collector의 수거 대상이 된다.