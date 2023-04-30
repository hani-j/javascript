// const loginForm = document.querySelector("#login-form");
// const loginForm = document.getElementById("login-form");
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");

const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function onLoginBtnClick() {
    const username = loginInput.value;
    
    // 항상 체크하는 것이 좋다
    // if(username === "") {
    //     alert("Please write your name");
    // } else if (username.length > 15) {
    //     alert("Your name is too long");
    // }
    // -> 이런 방법 보다는
    //    input 자체적으로 requied 가 있음
    console.log(username);
}

loginButton.addEventListener("click", onLoginBtnClick);