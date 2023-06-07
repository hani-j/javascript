/*  SocketIO 이용한 버전 */

import http from "http";
import SocketIO from "socket.io";
import express from "express";

const app = express();

app.set("view engine", "pug");
app.set("views", __dirname + "/views");
app.use("/public", express.static(__dirname + "/public"));
app.get("/", (_, res) => res.render("home"));
app.get("/*", (_, res) => res.redirect("/"));


// 둘 다 돌리기 위한 작업
const httpServer = http.createServer(app);

/* backend socket 설정 */
/* frontend socket 설정 => const socket = io(); */
// localhost:3000/socket.io/socket.io.js 를 제공
const wsServer = SocketIO(httpServer);
wsServer.on("connection", socket => {
    socket.on("enter_room", (msg) => console.log(msg));
});


// localhost:3000 은 http, ws 작동시킬 수 있음
const handleListen = () => console.log('Listening on http://localhost:3000');
httpServer.listen(3000, handleListen);
