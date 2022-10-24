const {performance} = require('perf_hooks');


function sleep(sec) {
  const start = performance.now();
  return new Promise(resolve=>{
      setTimeout(resolve, sec * 1000);
  }).then(() => {
      console.log(`sleep: ${sec}s, realTime: ${performance.now()- start}`);
  });
}

function sleepThrow(sec) {
  const start = performance.now();
  return new Promise(resolve=>{
      setTimeout(resolve, sec * 1000);
  }).then(() => {
      console.log(`sleep & Throw: ${sec}s, realTime: ${performance.now()- start}`);
      throw new Error('Sleep Error');
  })
}

async function a() {
  try {
    await Promise.all([
      sleep(1),
      sleep(2),
      sleepThrow(3),
      sleep(4),
    ]);
    console.log('중간에 에러나면 이 로그는 실행 안되네.. promise안에 있는건 다 실행되고');
  } catch (e) {
      console.log(e);
      console.log('(mock) tx rollback!');
  }
}
a();

async function b() { // catch는 한번만 잡히네
  try {
    await Promise.all([
      sleep(1),
      sleep(2),
      sleepThrow(1),
      sleepThrow(2),
      sleepThrow(3),
      sleepThrow(4), 
      sleep(4),
    ]);
    console.log('중간에 에러나면 이 로그는 실행 안되네.. promise안에 있는건 다 실행되고');
  } catch (e) {
      console.log(e);
      console.log('(mock) tx rollback!');
  }
}
