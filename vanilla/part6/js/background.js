const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg"
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

// createElment
const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

// body.appendChild : body 에 element 추가
// body.prepend : 가장 위에 추가
document.body.appendChild(bgImage);