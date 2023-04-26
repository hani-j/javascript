// 전
const playerName = "nico";
const playerPoints = 121212;
const playerHansome = false;
const plyerFat = "little bit";

// 후 better

const player = {
    name: "nico",
    points: 10,
    fat: true
};

console.log(player);

console.log(player.name);
console.log(player["name"]);

// 수정 가능
player.fat = false;
// 추가 가능
player.lastName = "potato"; 
console.log(player);
player.points = player.points + 15;


// const 안의 무언가를 업데이트 하는 것은 괜찮다

// object : 뭐가 무엇인지 알아야 할 때 사용
// array  : 하나의 주제로 값들을 넣을 때 사용