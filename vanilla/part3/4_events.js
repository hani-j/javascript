// dir 에 on 으로 시작하는 것들 => events

const title = document.querySelector("div.hello:first-child h1");
console.dir(title);

// style 은 css 에서 하는게 좋다 
function handleTitleClick() {
    console.log("title was clicked");
    title.style.color = "blue";
}

title.addEventListener("click", handleTitleClick);

// event 찾는법
// 1. h1 html element mdn 
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement

// 2. dir 에서 on 으로 시작하는 것들

function handleMouseEnter() {
    console.log("mouse is here!")
    title.innerText = "Mouse is here!";
}

title.addEventListener("mouseenter", handleMouseEnter);

function handleMouseLeave() {
    console.log("mouse is gone!")
    title.innerText = "Mouse is gone!";
}

// 다른 방법
title.onmouseleave = handleMouseLeave;
title.addEventListener("mouseleave", handleMouseLeave);