exports.loaded = false

const b = require('./b') // 실행

module.exports = {
  b,
  loaded: true // overrides the previous export
}
console.log('hi!')
