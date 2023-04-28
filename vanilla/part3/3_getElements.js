// 방법 1 ByClassName
// const hellos = document.getElementsByClassName("hello");
// console.log(hellos);


// 방법 2 ByTagName
// const title = document.getElementsByTagName("h1");
// console.log(title);


// 가장 좋은 방법 
// document.querySelector
// document.querySelectorAll
// element 를 CSS 방식으로 검색할 수 있음 (.hello) css selector

// 첫 element
const title = document.querySelector(".hello h1");
console.log(title);

// 전부
const titleAll = document.querySelectorAll(".hello h1");
console.log(titleAll);

// selector 로 id
const titleId = document.querySelector("#hello");
console.log(titleId);

// first-child
const titleFC = document.querySelector("div.hello:first-child h1");
console.log(titleFC);
// element 내부를 보고 싶을 때
console.dir(titleFC);