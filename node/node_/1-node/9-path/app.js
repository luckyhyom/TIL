// node는 컴퓨터 위에서 동작함.
const path = require('path');

console.log(__dirname);
console.log(__filename);

// 경로 구분자
console.log(path.sep);
// 환경변수 구분자
console.log(path.delimiter);

console.log(path.basename(__filename,'.js'));
console.log(path.dirname(__filename));
console.log(path.extname(__filename));

// 파일 정보 분리하여 객체화
const parsed = path.parse(__filename);
console.log(parsed);

// 분리된 정보 다시 스트링형태로 합치기
const str = path.format(parsed);
console.log(str);

// normalize
console.log(path.normalize('folder/////sub'));

// path.seperator
console.log(__dirname+path.sep+'image');
// join
console.log(path.join(__dirname,'image'));