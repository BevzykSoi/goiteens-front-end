'use strict'

let credits = 23580;
let pricePerDroid = 3000;
let totalPrice;

let droidsNumber = prompt("How many droids do you want to buy? Please enter the number:");

if (droidsNumber === null) {
    console.log("Скасовано користувачем!");
} else {
    totalPrice = droidsNumber * pricePerDroid;
    if (totalPrice <= credits) {
        credits = credits - totalPrice;
        console.log(`Ви купили ${droidsNumber} дроїдів, на рахунку залишилося ${credits} кредитів.`);
    } else {
        console.log("Недостатньо коштів на рахунку!");
    }
}