const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);

// 5초마다 실행
// setInterval(sayHello, 5000);

// 일정한 시간 뒤에 한번 호출
// setTimeout(sayHello, 5000);

// Date : 실행한 시점의 시간
// const date = new Date();

// padStart() : 기준 글자 수, 없으면 문자 추가
// "1".padStart(2, "0");