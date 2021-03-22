'use strict'

//Перше завдання

// let user = {};
// user.userName = "Kostiantyn"
// user.age = 11;
// user.showUserName = function () {
//     console.log(this.userName);
// }
// user.updateAge = function () {
//     console.log(this.age + 1);
// }

// user.showUserName();
// user.updateAge();

//Друге завданння

// const salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// }

// function countSalaries() {
//     const values = Object.values(salaries);
//     let total = 0;
//     for (const key of values) {
//         total += key;
//     }
//     console.log(total);
// }

// countSalaries();

//Третє завдання

// const calculator = {
//     read(a, b) {
//         calculator.a = a;
//         calculator.b = b;
//     },
//     sum() {
//         console.log(calculator.a + calculator.b);
//     },
//     mult() {
//         console.log(calculator.a * calculator.b);
//     }
// }

// calculator.read(2, 3);
// calculator.sum();
// calculator.mult();

//Четверте завдання

const cafe = {
    name: "Republic",
    width: 200,
    height: 300,
    personal: 5,
    hr: true
}

console.log(Object.entries(cafe));
console.log(cafe.width * cafe.height);