// 1. 참가자에서 완주자를 뺀다.
// 2. 동명이인은?


function solution(participant, completion) {
    
    // var answer ='';
    // participant.filter(p=>{
    //     return !completion.includes(p);
    // })[0] === null ? ;
    
    completion.forEach((c)=>{
        if(participant.includes(c)){
            let index = participant.indexOf(c);
            // console.log(index);
            participant.splice(index,1);

            // 왜 completion에서 지우면 오답인지 이해 안감.
            
            // index = completion.indexOf(c);
            // console.log(index);
            // console.log('before',completion);
            // completion.splice(index,1);
            // console.log('after',completion);
        }
    });
    
    // console.log(participant);
    return participant[0];
}