'use strict'

let arrayPlayers = [];
let theBestPlayer = ["", 0];

const monopolyRandom = function (...args) {
    for (const arg of args) {
        let throwOne = Number.parseInt(Math.random() * 6 + 1);
        let throwTwo = Number.parseInt(Math.random() * 6 + 1);
        let total = throwOne + throwTwo;
        console.log(`Перший кидок користувача ${arg}: ${throwOne}`);
        console.log(`Другий кидок користувача ${arg}: ${throwTwo}`);
        console.log(`Разом користувача ${arg}: ${total}`);
        if (theBestPlayer[1] < total) {
            theBestPlayer[0] = arg;
            theBestPlayer[1] = total;
        }
        arrayPlayers.push(arg);
    }
    
    
}

monopolyRandom("Kostia", "Rinat", "Marko");
console.log(theBestPlayer);