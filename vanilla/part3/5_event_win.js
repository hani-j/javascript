const h1 = document.querySelector("div.hello:first-child h1");
console.dir(h1);


function handleh1Click() {
    console.log("h1 was clicked");
    h1.style.color = "blue";
}
function handleMouseEnter() {
    console.log("mouse is here!")
    h1.innerText = "Mouse is here!";
}
function handleMouseLeave() {
    console.log("mouse is gone!")
    h1.innerText = "Mouse is gone!";
}
function handleWindowResize() {
    document.body.style.backgroundColor = "tomato";
    // document
    // body, head, title
    // 나머지는 selector 로 찾아와야 함
}
function handleWindowCopy() {
    alert("copier");
}
function handleWindowOffline() {
    alert("SOS no WIFI");
}
function handleWindowOnline() {
    alert("ALL GOOOOD");
}

h1.addEventListener("click", handleh1Click);
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);