// a.js
console.log('a.js 시작')
const b = require('./b')
b.call()
exports.call = () => {
  console.log('a.js의 call에서의 b: ', b)
}
