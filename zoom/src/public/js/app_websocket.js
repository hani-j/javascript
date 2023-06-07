/* Websocket 만 이용한 버전 */

// socket : 서버로의 연결
const socket = new WebSocket(`ws://${window.location.host}`);
const messageList = document.querySelector("ul");
const nickForm = document.querySelector("#nick");
const messageForm = document.querySelector("#message");



// javascript 언어로 보내는 것은 좋지 않음 
// => Java or go 로 접속할 수 있으니
function makeMessage(type, payload) {
    const msg = {type, payload};
    return JSON.stringify(msg);
}; 

function handleOpen() {
    console.log("Connected to Server ✅");
};

socket.addEventListener("open", () => {
    handleOpen();
});

socket.addEventListener("message", (message) => {
    const li = document.createElement("li");
    li.innerText = message.data;
    messageList.append(li);
});

socket.addEventListener("close", () => {
    console.log("Disconnected to Server ❌");
});


function handleSubmit() {
    event.preventDefault();
    const input = messageForm.querySelector("input");
    socket.send(makeMessage("new_message", input.value));
    const li = document.createElement("li");
    li.innerText = `You: ${input.value}`;
    messageList.append(li);
    input.value = "";
}

function handleNickSubit() {
    event.preventDefault();
    const input = nickForm.querySelector("input");
    socket.send(makeMessage("nickname", input.value));
 }

messageForm.addEventListener("submit", handleSubmit);
nickForm.addEventListener("submit", handleNickSubit); 