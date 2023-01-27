import { readFile } from 'fs'
/**
 * 콜백 함수는 핸들러라고 하고..
 * 이벤트에 등록되는 애는 리스너라고 하는 것 같다..
 * 핸들러는 1회성으로서 한번 호출되고 끝이고..
 * 리스너는 계속 듣고 이쓰니까.. 계속 호출 되니까..
 */

function readJSONThrows(filename, callback) {
  // readFile이라는 비동기 함수는.. 다른 세계로 떠납니다. 리턴은 그저 다음 코드를 실행하지 못하게 하는 것일 뿐
  // 어느 곳에도 반환하지 못하고 영원히.. 사라집니다
  // 그저.. 콜백 해줄 뿐...
  readFile(filename, 'utf8', (err, data) => {
    if (err) {
      return callback(err)
    }
    return callback(null, JSON.parse(data))
  })
  //  return callback(null, 23)
}

// The error is not propagated to the final callback nor is caught
// by a try/catch statement
try {
  const res = readJSONThrows('invalid_json.json', (err, data) => {
    console.error(err, data)
    return 2
  })
  console.log(res, 'res')
} catch (err) {
  console.log('This will NOT catch the JSON parsing exception')
}

// Our last chance to intercept any uncaught error
process.on('uncaughtException', (err) => {
  console.error(
    `This will catch at last the JSON parsing exception: ${err.message}`
  )
  // Terminates the application with 1 (error) as exit code.
  // Without the following line, the application would continue
  process.exit(1)
})
