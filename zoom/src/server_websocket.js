/*  Websocket 만 이용한 버전 */

import http from "http";
import WebSocket from "ws";
import express from "express";

const app = express();

app.set("view engine", "pug");
app.set("views", __dirname + "/views");
app.use("/public", express.static(__dirname + "/public"));
app.get("/", (_, res) => res.render("home"));
app.get("/*", (_, res) => res.redirect("/"));

// localhost:3000 은 http, ws 작동시킬 수 있음
const handleListen = () => console.log('Listening on http://localhost:3000');

// 둘 다 돌리기 위한 작업
const server = http.createServer(app);
const wss = new WebSocket.Server({ server })

// 여러 socket 을 저장하기 위한 배열
const sockets = [];

// socket : 연결된 브라우저
wss.on("connection", (socket) => {
    sockets.push(socket);
    socket["nickname"] = "Anon";
    console.log("Connected to Browser ✅");
    socket.on("close", () => console.log("Disconnected to Browser ❌"));
    socket.on("message", (msg) => {
        const message = JSON.parse(msg);
        switch(message.type) {
            case "new_message":
                sockets.forEach(aSocket => aSocket.send(`${socket.nickname}: ${message.payload}`));
            case "nickname":
                socket["nickname"] = message.payload;
        }
    });
 });

server.listen(3000, handleListen);
