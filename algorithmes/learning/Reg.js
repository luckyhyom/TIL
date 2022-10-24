
// 정규표현식 사용법을 몰라서 시간이 부족했다.. 값을 배열에 담아서 반환하는구나..
let files = [];
let reg = /([_V])\w+/;
let fileName = "a_V1.x";
let words = fileName.split(reg.exec(fileName)[0]);

console.log(words[0]+words[1]);
files.add(words[0]+words[1]);

console.log(files);