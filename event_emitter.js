const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('start', () => {
    console.log('Started.');
});

eventEmitter.emit('start');

eventEmitter.on('Start', (num) => {
    console.log(`Started process ${num}.`);
});

eventEmitter.emit('Start', 7);