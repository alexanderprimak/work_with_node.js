const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('anything', data => {
	console.log('on anything ', data);
});

emitter.emit('anything', { a: 1 });
emitter.emit('anything', { a: 2 });

setTimeout(() => {
	emitter.emit('anything', { a: 3 });
}, 1000);

class Dispatcher extends EventEmitter {
	subscribe(eventName, cb) {
		console.log('[subscribe...]');
		this.on(eventName, cb);
	}

	dispatch(eventName, data) {
		console.log('dispatching');
		this.emit(eventName, data);
	}
}

const dis = new Dispatcher();

dis.subscribe('aa', data => {
	console.log('on:aa', data);
});

dis.dispatch('aa', { aa: 22 });
