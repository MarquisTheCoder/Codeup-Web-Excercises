"use strict";

/*
 Creator: Deshawn Marquis, Williams,
 GitHub Profile: https://github.com/MarquisTheCoder,
 Date Created: 8/25/22,
 Time Created: 9:07 AM,
 File Name: warm-ups.js,
 File Description:
 */


(function () {
     
     /*Holds all values at register index(0) and
     * returns index(0) / array length if there
     * are no non-numeric values in the array*/
     const average = (array) => {
          for (let number of array){
                 array.indexOf(number) !== 0 ? array[0] += number: 0;
                 if(!isNaN(parseFloat(number)))
                      return false;
          }
          return array[0] / (array.length);
     }
     
     console.log(average([1,2,3,4]))
     
     /*Takes element at index(N) and checks if
     * the element value at index(N) is greater than
     * value at register index(0). If so index(0)s
     * value is equal to the elements.*/
     function longestString(strArray) {
          for(let string of strArray){
               if(typeof string !== 'string')
                    return false;
               if(string.length > strArray[0].length){
                         strArray[0] = string;
               }
               
          }
          return strArray[0];
     }
     
     console.log(longestString(['sds','1234','1234dsfsdfsdfsdf','123459']))
     
})();