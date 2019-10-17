const http = require("http");
const app = require("../app");

app.set("port", process.env.PORT || 7000);

const server = http.createServer(app);

server.on("listening", function() {
    console.log("ok, server is running");
});

server.listen(process.env.PORT || 7000);