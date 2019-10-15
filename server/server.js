import { createServer } from "http";
import app, { set } from "../app";

set("port", process.env.PORT || 7000);

const server = createServer(app);

server.on("listening", function() {
    console.log("ok, server is running");
});

server.listen(process.env.PORT || 7000);