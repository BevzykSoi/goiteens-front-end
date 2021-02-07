'use strict'

//Перше завдання

// const Arr1 = [1, 5, "4", "hello"];
// const Arr2 = [true, 2, {}, ["a"], 222];

// console.log(Arr1[2]);
// console.log(Arr2[2]);
// console.log(Arr1[2] + Arr2[2]);

//Друге завдання

// const Arr1 = [1, 5, "4", "hello"];
// Arr1[4] = 22;

// for (const value of Arr1) {
//     console.log(value);
// }

//Третє завдання

// const Arr2 = [true, 2, {}, ["a"], 222];

// for (const arrValue of Arr2) {
//     console.log(arrValue);
//     console.log(typeof arrValue);
// }

//Четверте заівдання

// const message = 'Welcome to Ukraine!';
// const arrayMessage = message.split('');
// console.log(arrayMessage);

// console.log(arrayMessage.indexOf("l"));

// console.log(arrayMessage.join(''));

//П'яте завдання

const styles = ["Джаз", "Блюз"];

styles.push("Рок-н-ролл");
styles.splice(2, 0, "Класика");
console.log(styles.shift());
styles.unshift("Реп", "Реггі");

console.log(styles);