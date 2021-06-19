// 'this' depends on the context

function a(){
    // this indicate 'global'
    console.log(this);
    console.log(this===global);
}

a();

class A {
    constructor(num){
        // this indicate class A
        this.num = num;
    }

    printNum(){
        console.log('---class A---');
        console.log(this);
        console.log(this.num);
    }
}

const testA = new A(3);
testA.printNum();

// this indicate export.module
console.log('this:',this);
console.log('this===module.export',this===module.exports);

console.log(module.exports);