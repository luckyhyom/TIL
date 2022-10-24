
// 이론은 10분정도
// 왜 안될까? 정확성 85.7이다
function solution(a, com) {
    var answer = [];
    com.forEach(c=>{
        //c[0]~c[1] 자르고, 정렬 후 c[3]
        let sliced = a.slice(c[0]-1,c[1]);
        sliced.sort();
        answer.push(sliced[c[2]-1]);
    })
    return answer;
}


//
function solution(array, commands) {
    return commands.map(command => {
        // 디스트럭처링할당. 구조분해할당.
        const [sPosition, ePosition, position] = command
        const newArray = array
            .filter((value, fIndex) => fIndex >= sPosition - 1 && fIndex <= ePosition - 1)
            .sort((a,b) => a - b)    // sort안에 뭘 넣은거지?

        return newArray[position - 1]
    })
}


//
function solution(array, commands) {
    var answer = [];

    answer = commands.map(a=>{
        
        return array.slice(a[0]-1,a[1]).sort((b,c)=>b-c)[a[2]-1];
    })
    return answer;
}