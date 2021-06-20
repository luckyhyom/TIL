// 총 길이의 절반만큼 가질수있고
// let chance = nums/2
// 최대한 다양한 종류여야함.

// 일단 중복되지 않게 choose안에 담아서, 
// choose = '';
// nums.for.. bottle.add..

// choose 안에서.. 선택할수있는 개수만큼 선택하면..

// if choose > chance ? chance를 리턴.
function solution(nums) {    

    let chance = nums.length/2;
    let choose = [];

    nums.forEach((num)=>{
        if(!choose.includes(num)){
            choose.push(num);
        }
    });

    return choose.length>chance ? chace : choose.length;
}

// function solution(nums) {
//   const max = nums.length / 2;
//   const arr = [...new Set(nums)];

//   return arr.length > max ? max : arr.length
// }