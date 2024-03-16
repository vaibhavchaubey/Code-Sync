import express from 'express';
import { Server } from 'socket.io';
import { createServer } from 'http';
import path from 'path';
import ACTIONS from './src/Actions.js';

const app = express();
const server = createServer(app);

const io = new Server(server, {
  cors: {
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST'],
    credentials: true,
  },
});

const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();

app.use(express.static('dist'))
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});

const userSocketMap = {};

function getAllConnectedCleints(roomId) {
  // It is used to get an array of socket IDs belonging to a specific room (roomId) in the Socket.IO server
  // after that we use map in order to get the socketId and username
  return Array.from(io.sockets.adapter.rooms.get(roomId) || []).map(
    (socketId) => {
      return {
        socketId,
        username: userSocketMap[socketId],
      };
    }
  );
}

/* Socket.io event handler for the 'connection' event, which is triggered whenever a new client connects */
io.on('connection', (socket) => {
  console.log('socket connected', socket.id);

  socket.on(ACTIONS.JOIN, ({ roomId, username }) => {
    userSocketMap[socket.id] = username;
    socket.join(roomId);

    const clients = getAllConnectedCleints(roomId);
    clients.forEach(({ socketId }) => {
      io.to(socketId).emit(ACTIONS.JOINED, {
        clients,
        username,
        socketId: socket.id,
      });
    });
  });

  socket.on(ACTIONS.CODE_CHANGE, ({ roomId, code }) => {
    socket.in(roomId).emit(ACTIONS.CODE_CHANGE, {
      code,
    });
  });

  socket.on(ACTIONS.SYNC_CODE, ({ socketId, code }) => {
    io.to(socketId).emit(ACTIONS.CODE_CHANGE, {
      code,
    });
  });

  // Event when the perticular user leave the room and we have to notify this in that room
  socket.on('disconnecting', () => {
    // getting all the rooms of a user
    const rooms = [...socket.rooms];
    rooms.forEach((roomId) => {
      // socket.to     (is also working)
      socket.in(roomId).emit(ACTIONS.DISCONNECTED, {
        socketId: socket.id,
        username: userSocketMap[socket.id],
      });
    });

    delete userSocketMap[socket.id];
    socket.leave();
  });
});


server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
