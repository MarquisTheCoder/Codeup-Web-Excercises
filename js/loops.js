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


    function generateRandom(iterations){
        const isEven = number => number % 2 == 0;
        for(let i = 0; i !== iterations; i++){
            let randomNumber = Math.floor(Math.random() * 200) + 20;
            (isEven(randomNumber)) ? console.log(`${randomNumber} is even`) :
                                     console.log(`${randomNumber} is odd`);
        }
    }

    generateRandom(10);

    function numberPyramid(){
        for(let pyramidBrick in Array.from({length: 10}, (_, i) => i + 1)){
            let string = ``;
            for(let iter = 0; iter != parseFloat(pyramidBrick); iter++){
                string += `${pyramidBrick}`;
            }
            console.log(string);

        }
    }
    numberPyramid();
})();