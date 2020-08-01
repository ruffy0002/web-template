import http from "http";
import express from "express";
import socketIo from "socket.io";

import { PORT } from "shared/settings";

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

server.listen(PORT, () => console.log(`Server started on port ${PORT}`));

app.get("/", (req, res) => {
	return res.send("Hello World!");
});

io.on("connection", (socket) => {
	socket.on("SOCKET_HELLO_WORLD", () => "Hello from socket!");
});
