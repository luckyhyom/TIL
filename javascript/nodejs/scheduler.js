const delay = 1000;
const delayForFail = 3000;
let i = 0;

function scheduler() {
    try {
        console.log(i++);
        if (i % 4 === 0) throw new Error("Error!");
        setTimeout(scheduler, delay);
    } catch (error) {
        console.error(error);
        setTimeout(scheduler, delayForFail);
    }
}

setTimeout(scheduler, delay);

//function job(func, delay) {
//    func();
//    setTimeout(job, delay, func, delay);
//}

//job(() => {
//    console.log(i++);
//}, delay);
