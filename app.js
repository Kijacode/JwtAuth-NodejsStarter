import express from "express";
import { json as _json } from "body-parser";
// import postRoute from "./route/posts";
import con from "./db/database";
// import authenticat from "./route/auth";
const app = express();
app.use(_json());

con;

app.use(express.json());
app.use("/api/user", require('./route/auth'));
app.use("/api/posts", require('./route/posts'));

export default app;
