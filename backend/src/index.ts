import express from "express";

import { NetworkConfig } from "shared/settings";

const app = express();

const testFunc = (): string => "Hi!";

app.get("/", (req, res) => {
	res.send("App works!!");
});

app.listen(NetworkConfig.port, () => {
	console.log("running server on from port:::::::" + NetworkConfig.port);
});
