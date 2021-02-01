'use strict'

const ADMIN_PASSWORD = 'jqueryismyjam';
let promptIntroduction;
let message;

promptIntroduction = prompt("Your password:");

if (promptIntroduction === null) {
    message = "Скасовано користувачем!";
} else if (promptIntroduction === ADMIN_PASSWORD) {
    message = "Ласкаво просимо!";
} else {
    message = "Доступ заборонений, невірний пароль!";
}

alert(message);