originalRequire = require
const { readFileSync } = originalRequire('fs')

/**
 * - readFileSync로 파일을 읽을 때 인스턴스를 매번 새로 만들면 안될텐데?
 * 각 파일의 위치에 따라 id(캐시의 키가 되는 값)가 다르니까.. import하는 파일마다 새로 인스턴스를 생성하지 않을까?
 *
 *
 * - 왜 모듈이라는 리터럴 객체를 만들어서 반환하는걸까?
 * 1. 파일에서 원하는 부분만 인터페이스로 제공하기 위해,
 *    각 파일은 module이라는 객체에 인터페이스를 담아 제공한다.
 *    모듈이라는 객체가 있다고 가정하고 작성을 해놓는거다.
 *
 * 모듈의 id는 말 그대로 고유 식별자를 뜻한다. 캐싱을 위해
 */
function loadModule(filename, module, require) {
  /**
   *  loadSync = `(function(module, exports, require) {
   *        moduleC = require('./moduleC.js')
   *        privProp = 'i am string'
   *        function ownFuction() {
   *            console.log('this is log one..')
   *        }
   *        function myFunc() {
   *            console.log('this is log two..')
   *        }
   *        exports.ownFunction = ownFunction
   *        module.exports.log = myFunc;
   *    })(module, module.exports, require)
   *    `
   */

  // 초기화를 한번만 하기 위해 함수를 즉시 실행한다.
  loadSync = `(function(module, exports, require) {
        ${readFileSync(filename)}
    })(module, module.exports, require)
    `
  eval(loadSync)
}

require = function require(filePath) {
  console.log('filePath: ', filePath)
  id = require.resolve(filePath) // 절대경로
  if (require.cache[id]) return require.cache[id].exports

  module = {
    exports: {},
    id
  }

  loadModule(id, module, require) // require는 재귀된다

  require.cache[id] = module

  return module.exports
}

require.cache = {}

require.resolve = (filename) => {
  return originalRequire.resolve(filename)
}

console.log(require(process.argv[2]))
