# Nodejs net.Socket events
Demonstrating the order of events of nodejs TCP sockets

## Notes
The order in which a callback or a listener is called depends on which is added first.
ie. calling socket.connect() with a callback before socket.on('connect', ...) means the
callback will be called first.

## Connecting to a server
### Successful connection
1. [event] lookup
2. [event] connect
3. [callback] connect
4. [event] ready
5. [event] timeout
6. [callback] timeout

### Server dropping packets
1. [event] lookup
2. [event] timeout
3. [callback] timeout

### Server rejects connections
1. [event] lookup
2. [event] error
3. [event] close
