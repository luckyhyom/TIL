/**
 * 값에 의한 자료 전달.
 * 값을 바꾸는 함수를 만들어도.. 값 자체가 전달되므로 값은 바뀌지 않는다.
 * 참조형이면 바뀜
 * 
 * C에서는
 * swap(&a, &b)
 * &: 주소를 표현한다. (포인터?)
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
 * 기억클래스
 * auto = 지역변수
 * static = 전역변수 (범위를 벗어나도 계속 살아있는다.)
 * extern = 전역변수, 다른 파일에서 가져올 것이라는 뜻
 * register = cpu 레지스터에 자료를 저장 실행속도 증가를 목적으로 사용
 *  - L1, L2,에는 미리 예상되는 자료를 저장하는데.. 이것을 프로그래머가 임의로 넣어주는 것 (그럼 ram메모리에서 io를 안해도 된다.)
 */

/**
 * 배열 크기 지정
 * int a[10]
 * JS는?
 * 
 */

/**
 * 2차원 배열 (JS와 비교하기)
 * int array[3][3] = {{1,2,3},{4,5,6},{7,8,9}}
 */

/**
 * 문자열 끝에는 null이 저장된다 (\0)
 * 문자열 단위는 ("") 자동으로 추가되지만 문자 단위({'a','b','\0'})에는 직접 추가해야함
 * 왜?
 */