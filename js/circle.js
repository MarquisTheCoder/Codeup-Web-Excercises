"use strict";

/*
 Creator: Deshawn Marquis, Williams,
 GitHub Profile: https://github.com/MarquisTheCoder,
 Date Created: 8/19/22,
 Time Created: 10:50 AM,
 File Name: circle.js,
 File Description:
 */


(function () {
        (function() {

                // create a circle object
                let circle = {
                        radius: 3,
                        // TODO: complete this method
                        // hint: area = pi * radius^2
                        // TODO: return the proper value
                        getArea: () => Math.PI * (circle.radius ** 2),

                        logInfo: doRounding => {
                                // TODO: complete this method.
                                // If doRounding is true, round the result to the nearest integer.
                                // Otherwise, output the complete value
                                let rounded = Math.round(circle.getArea());
                                return (!doRounding) ?
                                        console.log(`Area of a circle with radius:${circle.radius} is: ${circle.getArea()}`) :
                                        console.log(`Area of a circle with radius:${circle.radius} is ${rounded}`)
                        }
                };

                // log info about the circle
                console.log("Raw circle information");
                circle.logInfo(false);
                console.log("Circle information rounded to the nearest whole number");
                circle.logInfo(true);

                console.log("=======================================================");
                // TODO: Change the radius of the circle to 5.
                circle.radius = 5;
                // log info about the circle
                console.log("Raw circle information");
                circle.logInfo(false);
                console.log("Circle information rounded to the nearest whole number");
                circle.logInfo(true);
        })();

})();