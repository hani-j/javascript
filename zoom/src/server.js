/*  SocketIO 이용한 버전 */

import http from "http";
import { Server } from "socket.io";
import express from "express";
import { spawnSync } from "child_process";

const app = express();

app.set("view engine", "pug");
app.set("views", __dirname + "/views");
app.use("/public", express.static(__dirname + "/public"));
app.get("/", (_, res) => res.render("home"));
app.get("/*", (_, res) => res.redirect("/"));


// 둘 다 돌리기 위한 작업
const httpServer = http.createServer(app);

/* frontend socket 설정 => const socket = io(); */
// localhost:3000/socket.io/socket.io.js 를 제공

/* backend socket 설정 */
const wsServer = new Server(httpServer);
// const wsServer = SocketIO(httpServer); 이전 버전

function publicRooms() {
    const {sockets: {adapter: {sids, rooms}}} = wsServer;
    // const sids = wsServer.sockets.adapter.sids;
    // const rooms = wsServer.sockets.adapter.rooms;
    const publicRooms = [];
    rooms.forEach((_, key) => {
        if (sids.get(key) === undefined)
            publicRooms.push(key);
    });
    return publicRooms;
}
wsServer.on("connection", socket => {
    socket["nickname"] = "Anon";
    socket.onAny((event) => {
        console.log(`Socket Event: ${event}`);
    });
    socket.on("enter_room", (roomName, done) => {
        socket.join(roomName);
        done();
        socket.to(roomName).emit("welcome", socket.nickname); 
        wsServer.sockets.emit("room_change", publicRooms());
    }); 
    socket.on("disconnecting", () => {
        socket.rooms.forEach(room => socket.to(room).emit("bye", socket.nickname));
    });
    socket.on("disconnect", () => {
        wsServer.sockets.emit("room_change", publicRooms());
    });
    socket.on("new_message", (msg, room, done) => {
        socket.to(room).emit("new_message", `${socket.nickname}: ${msg}`);
        done();
    });
    socket.on("nickname", nickname => {
        socket["nickname"] = nickname;
        done();
    })
});


// localhost:3000 은 http, ws 작동시킬 수 있음
const handleListen = () => console.log('Listening on http://localhost:3000');
httpServer.listen(3000, handleListen);

// Adaptor
// 1. room ID 를 볼 수 있음  
// 2. socket ID 를 볼 수 있음