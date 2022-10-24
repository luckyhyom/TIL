const EventEmitter = require('events');

class Logger extends EventEmitter {
    log(callback){
        this.emit('log','started...');
        callback();
        this.emit('log','ended!');
    }


}

module.exports.Logger = Logger;

// const callback1 = (args) => {
//     console.log('first callback - ',args);
// };

// emitter.on('hyom',callback1);

// emitter.on('hyom',(args)=>{
//     console.log('second callback - ',args);
// });

// emitter.emit('hyom',{message:1});
