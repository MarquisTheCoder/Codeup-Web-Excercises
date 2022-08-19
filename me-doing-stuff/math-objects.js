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



})();