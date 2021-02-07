'use strict'

//Перше завдання

// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }

//Друге завдання

// for (let i = 1; i <= 10; i++) {
//     if (i % 2 === 0) {
//         console.log("Число парне.");
//         continue;
//     }

//     console.log("Число непарне.");
// }

//Третє завдання

// let num = 20;

// while (num <= 28) {
//     console.log(num);
//     num++;
// }

//Четверте завдання

let name = prompt("Enter name of your favourite hero:");

while (name.length < 6) {
    console.log(name);
    name = prompt("Enter name of your favourite hero:");
}