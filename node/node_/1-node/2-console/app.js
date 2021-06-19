console.table({name:"hyomin",age:26,company:{name:"ABC",since:1982}});


// 순서를 반대로..
function a(){
    console.log('hi');
    console.trace();
}
function b(){
    a();
}
function c(){
    b();
}

// ...
function a2(){
    b2();
}

function b2(){
    c2();
}

function c2(){
    console.log('gd');
    console.trace();
}

a2();
