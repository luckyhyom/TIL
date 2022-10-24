// const {
//   Worker, isMainThread, parentPort, workerData
// } = require('worker_threads');


// // if (isMainThread) {
//   module.exports = async function parseJSAsync(script) {
//     return new Promise((resolve, reject) => {
//       const worker = new Worker(__filename, {
//         workerData: script
//       });
//       console.log(worker);
//       worker.on('message', resolve);
//       worker.on('error', reject);
//       worker.on('exit', (code) => {
//         if (code !== 0)
//           reject(new Error(`Worker stopped with exit code ${code}`));
//       });
//     });
//   };
// // } else {
// //   const { parse } = require('some-js-parsing-library');
// //   const script = workerData;
// //   parentPort.postMessage(parse(script));
// // }

// console.log(isMainThread);
// console.log(isMainThread);
// console.log(isMainThread);
// console.log(isMainThread);

// // module.exports.parseJSAsync('hi')
// parseJSAsync = require('parseJSAsync')
// // console.log();

const { MessageChannel } = require('worker_threads');

const { port1, port2 } = new MessageChannel();
port1.on('message', (message) => console.log('received', message));
port2.postMessage({ foo: 'bar' });