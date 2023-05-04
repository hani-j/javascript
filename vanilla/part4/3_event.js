const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const link = document.querySelector("a");

function onLoginSubmit(event) {
    event.preventDefault();
    console.log(loginInput.value);
}

function handleLinkClick(event) {
    // click 한 x, y 좌표도 줌
    event.preventDefault();
    console.dir(event);
    console.log(event);
    alert("clicked!");
}

loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLinkClick);

// EvetListener 의 함수는 브라우저가 실행하는 것
// handleLinkClick({event ...}) 정보들을 전달해줌