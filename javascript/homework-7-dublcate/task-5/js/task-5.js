'use strict'

function collectInputData(inputs) {
    let arrayValues = [];

    inputs.forEach(input => {
        let arrayValue = input.getAttribute("value");
        arrayValues.push(arrayValue);
    });

    return arrayValues;
}

let inputs = document.querySelectorAll("input:checked");

let data = collectInputData(inputs);

console.log(data);