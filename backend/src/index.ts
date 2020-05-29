import http from "http";
import socketIo from "socket.io";

const port = /*process.env.PORT ||*/ 4001;
const server = http.createServer();
const io = socketIo(server);

io.on("connection", (socket) => {
    socket.on("disconnect", () => {});
});

server.listen(port, () => console.log(`Listening on port ${port}`));
