const title = document.getElementById("title");

console.dir(title);
// autofocus 추가 -> autofocus: true 로 변경

title.innerText = "Got you!";

console.log(title.id);
console.log(title.className);

// document 로 html 을 가져와 수정이 가능