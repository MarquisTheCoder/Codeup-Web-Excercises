"use strict";

/*
Creator: Deshawn Marquis, Williams,
GitHub Profile: https://github.com/MarquisTheCoder,
Date Created: 8/17/22,
Time Created: 1:59 PM,
File Name: math-object.js,
File Description: 
*/


(function () {
    const diceRoll =  Math.floor(Math.random() * 6) + 1;
    while(parseFloat(prompt(`Enter a number 1-6: `)) != diceRoll){
        alert('Wrong number');
    }
    alert(`You guessed it the number was ${diceRoll}`);
})();