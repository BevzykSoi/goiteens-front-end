'use strict'

//Перше завдання

// const hello1 = function () {
//     console.log("Привіт JavaScript!");
// }

// hello1();

//Друге завдання

// const hello2 = function (name) {
//     console.log("Привіт " + name + "!");
// }

// hello2("Kostia");

//Трєте завдання

// const mul = function (n, m) {
//     console.log(n * m);
//     console.log(n + m);
//     console.log(n - m);
// }

// mul(5, 3);

//Четверте завдання

// const myNewArrowFunction = (...args) => console.log(args);

// myNewArrowFunction(1, 2, 3);
// myNewArrowFunction(100, 200, 300, 400, 500);
// myNewArrowFunction("Js", "Python", "Java", "PHP", "C++");

//П'яте завдання

const myAverageScore = function (...args) {
    let total = 0;

    for (const arg of args) {
        total += arg;
    }

    total = total / args.length;

    if (total >= 91 && total <= 100) {
        console.log("Your average score: A.");
    } else if (total >= 81 && total <= 90) {
        console.log("Your average score: B.");
    } else if (total >= 71 && total <= 80) {
        console.log("Your average score: C.");
    } else if (total <= 70) {
        console.log("Your average score: D.");
    } else {
        console.log("You are not certified.");
    }
}

myAverageScore(100, 75, 81, 96);
myAverageScore(45, 63, 85, 70);
myAverageScore(77, 82, 60, 58);
myAverageScore(93, 99, 93, 96);