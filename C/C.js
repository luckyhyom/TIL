/**
 * 값에 의한 자료 전달.
 * 값을 바꾸는 함수를 만들어도.. 값 자체가 전달되므로 값은 바뀌지 않는다.
 * 참조형이면 바뀜
 * 
 * C에서는
 * swap(&a, &b)
 * *a = *b 이런식으로 포인터(주소)를 할당하여 할수있나보다.
 */
function a(x, y) {
  let temp = x;
  x = y;
  y = temp;
  console.log(x,y);
}
const s = 1;
const b = 2;
console.log(s, b);
a(s,b);
console.log(s, b);

/**
 * auto = 지역변수
 * static = 전역변수 (범위를 벗어나도 계속 살아있는다.)
 * extern = 전역변수, 다른 파일에서 참조 가능 (export와 같다.)
 */