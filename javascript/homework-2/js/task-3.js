'use strict'

const findLongestWord = function (string) {
    let stringArray = string.split(" ");

    let longestWordIndex = 0;

    for (let i = 0; i < stringArray.length; i++) {
        if (stringArray[longestWordIndex].length < stringArray[i].length) {
            longestWordIndex = i;
        }
    }
    
    console.log(stringArray[longestWordIndex]);
};

console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); //jumped
console.log(findLongestWord('Google do a roll')); // 'Google'
console.log(findLongestWord('May the force be with you')); // 'force'