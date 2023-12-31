const { Server } = require('socket.io');

const configureSocket = (server) => {
  const io = new Server(server, {
    cors: {
      origin: process.env.FRONT_URL,
    },
  });

  return io;
};

module.exports = configureSocket;