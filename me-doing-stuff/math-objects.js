"use strict";

/*
 Creator: Deshawn Marquis, Williams,
 GitHub Profile: https://github.com/MarquisTheCoder,
 Date Created: 8/19/22,
 Time Created: 9:49 AM,
 File Name: math-objects.js,
 File Description:
 */


(function () {
        /*TODO
        *       JavaScript provides a built-in Math object with a variety of helpful properties and methods.
        *       One thing that is unique about the Math object is that all of its properties and methods are static.
        *       This means that you will always access the properties and methods by using Math.property-or-method,
        *       and that you will never use var math = new Math();
        * */

        /* MATH.RANDOM() FUNCTION:
        *The Math.random() function returns a floating-point, pseudo-random number in the range [0, 1] that is, from
        * 0 (inclusive) up to but not including 1 (exclusive), which you can then scale to your desired range.
        * */

        console.log(Math.random());
        console.log(Math.random() + Math.random());

        const randomRange = (min, max) => {

                       //floor to round number down to
                       //integer
                return Math.floor (
                                       //gets n between 0-1
                                       Math.random() *

                                          //all numbers between max and min
                                          //plus one because it would be one less than max
                                          (max - min + 1)

                                                // plus min to make sure min
                                                // will be the lowest number it can go to
                                                + min);
        }



        //MATH.ROUND()
        //the Math.round() function returns the value of a number rounded to the nearest integer
        Math.round(5.5) //6
        Math.round(5.90) //6
        Math.round(78.233455354) // 78
        Math.round(9.9) //10
        Math.round(7.8) //8
        Math.round(2.21111) //2
        Math.round(3.566)//4
        Math.round(45.234334) // 45
        Math.round(7.2333) //7
        Math.round(921.1221243142349234) //921
        Math.round(921.564566456) //922

        //MATH.FLOOR()
        //The Math.floor() function returns the largest integer less than or equal to a number.
        Math.floor(4.55555) //4
        Math.floor(323.111) //323
        Math.floor(455.3) // 455
        Math.floor(88.9) //88
        Math.floor(78.903434) //78
        Math.floor(45.222) //90
        Math.floor(76.899) //76
        Math.floor(45.999)//45
        Math.floor(33) //33
        Math.floor(45.789) //45

        //MATH.CEIL
        //The Math.ceil() function returns the smallest integer greater than or equal to a number.

        Math.ceil(45.1) //46
        Math.ceil(36.1) //37
        Math.ceil(56.23) //57
        Math.ceil(78.345) //79
        Math.ceil(19.01) //20
        Math.ceil(33) //33
        Math.ceil(3.4)//4
        Math.ceil(3.2) //4
        Math.ceil(3.1) //4
        Math.ceil(8.34) //9

})();