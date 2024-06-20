const socketIO = require('socket.io');

function initializeSocket(server) {
  const io = socketIO(server);

  io.on('connection', (socket) => {
    console.log('A user connected');

    socket.on('userid', (data) => {
      console.log('Received message:', data);
    });

    socket.on('disconnect', () => {
      console.log('A user disconnected');
    });
  });

  return io;
}

module.exports = initializeSocket;