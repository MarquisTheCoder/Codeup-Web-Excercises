"use strict";

/*
Creator: Deshawn Marquis, Williams,
GitHub Profile: https://github.com/MarquisTheCoder,
Date Created: 8/15/22,
Time Created: 5:29 PM,
File Name: loops.js,
File Description:
Loop exercises for CodeUp curriculum
*/


(function () {
    /*returns multiplication table of number up to 10*/
    const showMultiplicationTable = number => {
        for(let item in Array.from(Array(10).keys())){
            console.log(`${number} x ${item} = ${number * item}`);
        }
    }
})();