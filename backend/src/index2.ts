import http from "http";
import socketIo from "socket.io";

import { PORT } from "shared/settings";

const port = process.env.PORT || PORT;
const server = http.createServer();
const io = socketIo(server);

io.on("connection", (socket) => {
	socket.on("disconnect", () => {
		/* Do nothing */
	});
});

server.listen(port, () => console.log(`Listening on port ${port}`));
