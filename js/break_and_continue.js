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
(
    function () {
    const checkRange = num => num >= 1 && num <= 50;

    while(true){
        let number = prompt('Enter A number: ');
        if(checkRange(number) && number % 2 !== 0){
            for(let odd = 1; odd < 50; odd += 2){
                odd == number ?
                    console.log(`Yikes!Skipping number: ${number}`) :
                    console.log(`Here's an Odd number: ${odd}`);
            }
            break;
        }
    }
})();