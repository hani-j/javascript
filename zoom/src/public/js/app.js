/* SocketIO 이용한 버전 */

const socket = io();

const nick = document.getElementById("nick");
const welcome = document.getElementById("welcome");
const form = welcome.querySelector("form");
const room = document.getElementById("room");

welcome.hidden = true;
room.hidden = true;

let nickName;
let roomName;

function addMessage(message) {
    const ul = room.querySelector("ul");
    const li = document.createElement("li");
    li.innerText = message;
    ul.appendChild(li);
}

function handleMessageSubmit(event) {
    event.preventDefault();
    const input = room.querySelector("#msg input");
    const value = input.value;
    socket.emit("new_message", input.value, roomName, () => {
        addMessage(`You: ${value}`);
    });
    input.value = "";
}

function showNick() {
    welcome.hidden = false;
    nick.hidden = true;
    const h3 = welcome.querySelector("h3");
    h3.innerText = `Welcome ${roomName}`;
    const nameForm = nick.querySelector("#name");
    nameForm.addEventListener("submit", handleNicknameSubmit);
}

function handleNicknameSubmit(event) {
    event.preventDefault();
    const input = nick.querySelector("#name input");
    socket.emit("nickname", input.value, showNick);
    nickName = input.value;
    input.value = ""
 }

function showRoom(msg) {
    welcome.hidden = true;
    room.hidden = false;
    const h3 = room.querySelector("h3");
    h3.innerText = `Room ${roomName}`;
    const msgForm = room.querySelector("#msg");
    msgForm.addEventListener("submit", handleMessageSubmit);
}

function handleRoomSubmit(event) {
    event.preventDefault();
    const input = form.querySelector("input");
    socket.emit("enter_room", input.value, showRoom);
    roomName = input.value;
    input.value = ""
}

form.addEventListener("submit", handleRoomSubmit);

socket.on("welcome", (user) => {
    addMessage(`${user} arrived!`);
});

socket.on("bye", (left) => {
    addMessage(`${left} left ㅠㅠ`);
});

socket.on("new_message", addMessage);

socket.on("room_change", (rooms) => {
    const roomList = welcome.querySelector("ul");
    roomList.innerText = "";
    if (rooms.length === 0)
        return;
    rooms.forEach(room => {
        const li = document.createElement("li");
        li.innerText = room;
        roomList.append(li);
    });
});