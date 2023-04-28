const h1 = document.querySelector("div.hello:first-child h1");

// 전
// function handleh1Click1() {
//     const currentColor = h1.style.color;
//     let newColor;
//     if (currentColor === "blue") {
//         newColor = "tomato";
//     } else {
//         newColor = "blue";
//     }
//     h1.style.color = newColor;
//     console.log(h1.style.color);
// }

// h1.addEventListener("click", handleh1Click1);


// css 에서 적용 후
// javascript 로 class name 을 변경하지 않는 것이 좋음
function handleTitleClick() {
    const clickedClass = "clicked";
    
    if (h1.className === clickedClass) {
        h1.className = "";
    } else {
        h1.className = clickedClass;
    }
}

h1.addEventListener("click", handleTitleClick);
