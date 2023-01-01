const delay = 1000;
let i = 0;

function func() {
    console.log(i++);
    setTimeout(func, delay);
}
const scheduler = setTimeout(func, delay);

//function job(func, delay) {
//    func();
//    setTimeout(job, delay, func, delay);
//}

//job(() => {
//    console.log(i++);
//}, delay);
