// 예제1
let array = [1, 2, 3, 4];
console.log(array);
console.log(array + false);

// 예제2
function divide(a, b) {
    return a / b
}

console.log(divide(2, 3));
console.log(divide("xxxxx"));

// 예제3
const nico = {name:"nico"}
nico.hello()

/* javascript 의 문제점 

type 안정성이 없다.
1. 숫자 array 에 bool 타입을 추가하면 string 으로 바뀌어버림
오류를 뱉지 않는다.

2. 함수에 개수도 오류를 뱉지 않음

3. runtimeError : 실행시 일어나는 오류
실행조차 하지 않게 하는 것이 좋다

*/
