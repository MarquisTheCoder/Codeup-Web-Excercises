"use strict";

/*
Creator: Deshawn Marquis, Williams,
GitHub Profile: https://github.com/MarquisTheCoder,
Date Created: 8/17/22,
Time Created: 10:24 AM,
File Name: break_and_continue.js,
File Description:
Loop exercise for CodeUp LLC class.
*/


(function () {
    const checkRange = num => num >= 1 && num <= 50;

    while(true){
        let userInput = parseFloat(prompt('Enter A number: '));
        if(checkRange(userInput) && userInput % 2 !== 0){
            for(let number in Array.from(Array(50).keys())){
                if(number == userInput){
                    console.log(`Yikes!Skipping number: ${userInput}`);
                }else{
                    (number % 2 !== 0) ? console.log(`Here's an Odd number: ${number}`): 0;
                }
            }
            break;
        }
    }
})();