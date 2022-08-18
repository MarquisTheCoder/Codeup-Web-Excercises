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
        let numberChoice = parseFloat(prompt('Enter A number: '));
        if(checkRange(numberChoice) && numberChoice % 2 !== 0){
            for(let element in Array.from((Array(50).keys()))){
                if(element == numberChoice){
                    console.log(`Yikes!Skipping number: ${numberChoice}`);
                }else{
                    (element % 2 !== 0) ? console.log(`Here's an Odd number: ${element}`):
                                                      'skipping even number here';
                }
            }
            break;
        }
    }
})();