const socketIO = require('socket.io');

function initializeSocket(server) {
  const io = socketIO(server);

  io.on('connection', (socket) => {
    console.log('A user connected');

    socket.on('send_message', (data) => {
      console.log('Received message:', data);

        socket.emit('Send Message', data)
    });

    socket.on('disconnect', () => {
      console.log('A user disconnected');
    });
  });

  return io;
}

module.exports = initializeSocket;