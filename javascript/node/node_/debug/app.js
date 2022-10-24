function sayHello(){
    console.log('hello!');
}

function calculate(x,y){
    console.log('calculating..');
    const result = x+y;
    console.log(result);
    sayHello();
    return result;
}

calculate(1,2);
calculate(1,3);

const stop = 4;
console.log('......loopings......');
for (let i = 0; i < 10; i++) {
    console.log('iii');
    if(i===stop){
        break;
    }

}