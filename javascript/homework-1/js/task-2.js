'use strict'

let total = 100;    //Кількість товарів на складі
let ordered = 50;   //Одиниць товару в замовленні

if (ordered > total) {
    console.log("На складі недостатньо товарів!");
} else {
    console.log("Замовлення оформлено, з вами зв'яжеться менеджер");
}