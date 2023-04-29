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

loginForm.addEventListener("submit", onLoginSubmit)
link.addEventListener("click", handleLinkClick);
