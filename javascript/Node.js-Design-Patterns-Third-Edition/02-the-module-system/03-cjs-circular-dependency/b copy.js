exports.loaded = false
/**
 * 처음에 뭐가 문제인지 파악이 안됐다.
 * 동기적으로 하나하나 따라가보면 옳은 결과인것 같아서.
 * 근데 결론적으로 a는 loaded가 true여야하는데 false인 상태가 있었던게 흠이었음 (결과는 자연스러울 수 있으나?)
 *
 * 또,
 * 동기적으로 실행되서 나오는 현상인건 알 것 같은데 캐시는 무슨상관이지?
 * a의 전체를 다 읽어야하는거 아닌가?
 * 라는 의문이 있었음
 *
 * plus, loaded라는게 코드를 전부 실행시키기 전까지 참조를 중단하는 코드인줄 알았음
 */
/*
 * 캐싱된 a의 객체를 받아옴.
 * 만약 a를 처음부터 모두 읽어야한다면 순환참조로 인해 무한루프가 형성 됨
 */
const a = require('./a')

module.exports = {
  a,
  loaded: true // overrides the previous export
}
console.log('hi! 1!')
