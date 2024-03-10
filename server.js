import express from 'express';
import { Server } from 'socket.io';
import { createServer } from 'http';

const app = express();
const server = createServer(app);

const io = new Server(server);

/* Socket.io event handler for the 'connection' event, which is triggered whenever a new client connects */
io.on('connection', (socket) => {
    console.log('socket connected', socket.id)
})








const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
  