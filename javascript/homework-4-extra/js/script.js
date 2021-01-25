//Перше завдання

// const dateDay = 24;
// console.log((dateDay > 2) ? dateDay : "Сьогодні перше число.");

//Друге завдання

// const date = 24;
// console.log((date % 2 === 0) ? "Число парне." : "Upppss!");

//Третє завдання

// console.log((5 % 2 === 0) ? 5 % 2 + " грн" : 5 % 2 + " євро");

//Чеверте завдання

// const ageOfMaksym = 55;
// let ageGroup;

// if (ageOfMaksym >= 0 && ageOfMaksym <= 16) {
//     ageGroup = "Максим відноситься до вікової групи 0-16 років.";
// }
// else if (ageOfMaksym >= 17 && ageOfMaksym <= 60) {
//     ageGroup = "Максим відноситься до вікової групи 17-60 років.";
// }
// else if (ageOfMaksym >= 61 && ageOfMaksym <= 100) {
//     ageGroup = "Максим відноситься до вікової групи 61-100 років."
// }
// else {
//     ageGroup = "Максим вже за 101 і далі років!";
// }

// console.log(ageGroup);

//П'яте завдання

// let randomNumberOfCoinOne = Number.parseInt(Math.random() * 2);
// let randomNumberOfCoinTwo = Number.parseInt(Math.random() * 2);

// if (randomNumberOfCoinOne === randomNumberOfCoinTwo) {
//     console.log("ФАРТ!");
// } else {
//     console.log("Не фарт...");
// }

//Шосте завдання

// const myName = "Костянтин";
// const myLastName = "Станіславчук";

// if (myName.length > 4 && myLastName.length > 5) {
//     console.log(myName.length + myLastName.length);
// } else {
//     console.log("УПС!");
// }

//Сьоме завдання

// let randomNumber = Number.parseInt(Math.random() * 6);

// if (randomNumber === 1) {
//     console.log("Число 1");
// } else if (randomNumber === 2) {
//     console.log("Число 2");
// } else if (randomNumber === 3) {
//     console.log("Число 3");
// } else if (randomNumber === 4) {
//     console.log("Число 4");
// } else if (randomNumber === 5) {
//     console.log("Число 5");
// } else {
//     console.log("Якесь інше число");
// }

//Восьме завдання

let ageOfNeighbor = Number.parseInt(prompt("Введіть ім'я Вашого сусід зліва:"));
let myAge = 10;

if (ageOfNeighbor > 12) {
    console.log(ageOfNeighbor + myAge);
} else {
    console.log("Error. Something went wrong ...");
}