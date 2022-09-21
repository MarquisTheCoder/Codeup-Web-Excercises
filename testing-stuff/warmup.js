"use strict";

/*
 Creator: Deshawn Marquis, Williams,
 GitHub Profile: https://github.com/MarquisTheCoder,
 Date Created: 9/19/22,
 Time Created: 9:06 AM,
 File Name: warmup.js,
 File Description:
 */


(function () {
    const attendance ={
         miami: 32789,
         buffalo: 45678,
         portland: 24567
    }
    
    Object.values(attendance).forEach(value => console.log(value));
    
    console.log(
    Object.values(attendance).reduce((previousValue, currentValue)=> {
         return previousValue +  currentValue / Object.values(attendance).length
    },0)) 
    
})();