// 1. 참가자에서 완주자를 뺀다.
// 2. 동명이인은?


function solution(participant, completion) {

    // console.log(participant);
    completion.forEach((c)=>{
        if(participant.includes(c)){
            let index = participant.indexOf(c);
            participant.splice(index,1);
        }
    });
    
    // let answer =  participant.filter((p) => completion.indexOf(p) < 0) || 'test';
    
    
    // return answer[0];
    return participant[0];
}


//
// 1. 참가자에서 완주자를 뺀다.
// 2. 동명이인은?


function solution(participant, completion) {

    // console.log(participant);
    // completion.forEach((c)=>{
    //     if(participant.includes(c)){
    //         let index = participant.indexOf(c);
    //         participant.splice(index,1);
    //     }
    // });
    
    // return participant[0];
    // let array = [...participant].sort();
    let answer =  participant.filter((p) => completion.indexOf(p) < 0);
    
    if(answer[0]===undefined){
        answer =  participant.filter((p) => participant.indexOf(p,2));
    }
        
    
    return answer[0];
    
}

//
// 1. 참가자에서 완주자를 뺀다.
// 2. 동명이인은?


function solution(participant, completion) {

    // console.log(participant);
    // completion.forEach((c)=>{
    //     if(participant.includes(c)){
    //         let index = participant.indexOf(c);
    //         participant.splice(index,1);
    //     }
    // });
    
    // return participant[0];
    // let array = [...participant].sort();
    let answer =  participant.filter((p) => completion.indexOf(p) < 0 ||  completion.indexOf(p,2));
    
//     if(answer[0]===undefined){
//         answer =  participant.filter((p) => participant.indexOf(p,2));
//     }
        
    
    return answer[0];
    
}



// 두 배열을 정렬해서 비교한다.
const solution = (p, c) => {
    // 무슨 차이지..
    // let p = participant.sort();
    // let c = completion.sort();
    p.sort()
    c.sort()
    while (p.length) {
        let pp = p.pop()
        if (pp !== c.pop()) return pp
    }
}

// 1. 참가자에서 완주자를 뺀다.
// 2. 동명이인은?


function solution(p, c) {

    // 무슨 차이지..
    // let p = participant.sort();
    // let c = completion.sort();
    p.sort();
    c.sort();
    
    
    while(p.length){
        let pp = p.pop();
        if (pp !== c.pop()) return pp
    }

}
