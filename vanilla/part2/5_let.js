const a = 5;
let isNicoFat = true;
// var 는 쓰지 않는 것이 좋다 Never!

const me = "sexy";
const days = [1, 2, false, true, null, undefined, "TEXT", me];

console.log(days[2]);
days[2] = "water";
console.log(days[2]);
days.push("one");
console.log(days);
