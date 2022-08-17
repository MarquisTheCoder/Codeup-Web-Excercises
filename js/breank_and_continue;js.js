"use strict";

/*
Creator: Deshawn Marquis, Williams,
GitHub Profile: https://github.com/MarquisTheCoder,
Date Created: 8/17/22,
Time Created: 9:40 AM,
File Name: break_and_continue;js.js,
File Description: 
*/


(function (){

    const checkNumber = num => num >= 1 && num <= 50;
    const genOddArray = Array.from({length: 50}, (_, i) => i + 1).filter(num => num %2);
    for(let userNumber = parseFloat(prompt('Enter a number')); !genOddArray.includes(userNumber);){
       if(genOddArray.includes(userNumber) && checkNumber(userNumber)){
           for(let item of genOddArray){
               if(item === userNumber){
                   console.log(`Yikes! skipping number: ${item}`);
               }else{
                   console.log(`Odd number ${item}`);
               }

           }

       }
    }

}
)();