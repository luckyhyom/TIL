const job = new Array(100).fill("job");

function partitioning() {
    if (job.length === 0) return;
    for (let i = 0; i < 10; i++) {
        job.pop();
        console.log(job.length, i);
    }
    setTimeout(partitioning);
}

partitioning();
