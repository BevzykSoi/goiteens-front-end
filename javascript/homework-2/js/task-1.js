'use strict'

const logItems = function (array) {
    for (let index = 0; index < array.length; index++) {
        const j = array[index];
        console.log(`${index + 1} - ${j}`);
    }
};

logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);
logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);