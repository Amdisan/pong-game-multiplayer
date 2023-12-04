const http = require("http");
const api = require("./api");
const io = require("socket.io");

const apiServer = http.createServer(api);

const socketServer = io(apiServer, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

const { listenSocket } = require("./sockets");

const PORT = 3000;

apiServer.listen(PORT);
console.log(`Listening on ${PORT}...`);

listenSocket(socketServer);
