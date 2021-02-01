'use strict'

let country = prompt("Please, enter a country, to which you want to deliver the order:").toLowerCase();
let countryPrice;


switch (country) {
    case "китай":
        countryPrice = 100;
        alert(`Доставка в країну ${country} буде коштувати ${countryPrice} кредитів.`);
        break;
    case "чилі":
        countryPrice = 250;
        alert(`Доставка в країну ${country} буде коштувати ${countryPrice} кредитів.`);
        break;
    case "австралія":
        countryPrice = 170;
        alert(`Доставка в країну ${country} буде коштувати ${countryPrice} кредитів.`);
        break;
    case "індія":
        countryPrice = 80;
        alert(`Доставка в країну ${country} буде коштувати ${countryPrice} кредитів.`);
        break;
    case "ямайка":
        countryPrice = 120;
        alert(`Доставка в країну ${country} буде коштувати ${countryPrice} кредитів.`);
        break;
    default:
        alert("У вашій країні доставка недоступна.");
}