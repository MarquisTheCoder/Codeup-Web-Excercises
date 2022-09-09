"use strict";

/*
 Creator: Deshawn Marquis, Williams,
 GitHub Profile: https://github.com/MarquisTheCoder,
 Date Created: 9/9/22,
 Time Created: 8:45 AM,
 File Name: maps.js,
 File Description:
 */


(function () {
     
     const numberIsEven = number => number % 2 === 0;
     let testArray = [1,2,3,4,5,5,6,7,8,9,10];
    
     
     /*Filter returns array of values that match a given condition*/
     let evenNumbers = testArray.filter(number => numberIsEven(number));
     console.log(`the even numbers are = ${evenNumbers} `);
     /*Map goes through elements in the array and performs an
     * action on them
     * */
     let evenNumbersTimesTwo = evenNumbers.map(number => number * 2);
     console.log(`the even numbers times two = ${evenNumbersTimesTwo}`);
     
     /*reduce takes a list of values and returns the values reduced to one value*/
     let sumOfEvenNumbersTimesTwo = evenNumbersTimesTwo.reduce((accumulation, currentNumber) => accumulation + currentNumber);
     console.log(`the sum of all even numbers times two is = ${sumOfEvenNumbersTimesTwo}`);
})();