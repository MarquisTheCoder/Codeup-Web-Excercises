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
    const oddArray = Array.from({length: 50}, (_, i) => i + 1).filter(num => num %2);

    while(true){
        let userInput = parseFloat(prompt('Enter A number: '));
        if(oddArray.includes(userInput) && checkRange(userInput)){
            for(let oddNumber in oddArray){
                if(oddNumber == userInput){
                    console.log(`Yikes!Skipping number: ${userInput}`);
                }else{
                    console.log(`Here's an Odd number: ${oddNumber}`);
                }
            }
            break;
        }
    }
})();