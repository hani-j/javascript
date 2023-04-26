// function : 계속해서 사용할 수 있는 코드 조각

function sayHello(name, age) {
    console.log("Hello my namee is " + name + " and I'm " + age);
}

sayHello("junhyuki", 31);


function plus(first, second) {
    console.log(first + second);
}

plus(6, 8);


const player = {
    name: "nico",
    sayHello: function (other) {
        console.log("hello " + other + " nice to meet you");
    },
};

player.sayHello("lynn");