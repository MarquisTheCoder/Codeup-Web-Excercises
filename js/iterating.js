"use strict";

/*
Creator: Deshawn Marquis, Williams,
GitHub Profile: https://github.com/MarquisTheCoder,
Date Created: 8/18/22,
Time Created: 8:58 AM,
File Name: iterating.js,
File Description: 
*/


(function () {


    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
    let names = ['Deshawn','Raevon','Khalil','Rahson'];

    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
    console.log(names.length);
    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
    console.log(names[0]);
    console.log(names[1]);
    console.log(names[2]);
    console.log(names[3]);

    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
    for(let i of names){ console.log(i)}
    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
    names.forEach(element => console.log(element));
    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */

    const first = arr => arr[0];
    const second = arr => arr[1];
    const last= arr => arr[arr.length -1];

})();