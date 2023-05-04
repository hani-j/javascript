const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

// 정보를 받기만 하면
// 방금 일어난 'event 에 대한 정보'를 지닌 
// argument 를 채워넣어 줌
// submitter, target
function onLoginSubmit(event) {
    event.preventDefault(); // 기본 동작(새로고침) 막는 것
    // const username = loginInput.value;
    
    console.log(event);
    console.log(loginInput.value);
}

loginForm.addEventListener("submit", onLoginSubmit);