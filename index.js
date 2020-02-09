const net = require('net');

let socket = net.Socket();

socket.on('data', () => console.log('[event] data'));
socket.on('drain', () => console.log('[event] drain'));
socket.on('lookup', () => console.log('[event] lookup'));
socket.on('ready', () => console.log('[event] ready'));
socket.on('connect', () => console.log('[event] connect'));
socket.on('close', () => console.log('[event] close'));
socket.on('end', () => console.log('[event] end'));
socket.on('error', () => console.log('[event] error'));
socket.on('timeout', () => console.log('[event] timeout'));

socket.setTimeout(2000, () => {
    console.log('[callback] timeout');
});

socket.connect(4545, 'localhost', () => {
    console.log('[callback] connect')
});
