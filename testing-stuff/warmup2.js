"use strict";

/*
 Creator: Deshawn Marquis, Williams,
 GitHub Profile: https://github.com/MarquisTheCoder,
 Date Created: 9/20/22,
 Time Created: 1:54 PM,
 File Name: warmup2.js,
 File Description:
 */


(function () {
    
     const convertAddressToObject = (string) => {
          return {
               addressNumber : string.split(' ')[0],
               addressStreet : string.substring(string.indexOf(' ') + 1)
               
          };
     }
     
     console.log(convertAddressToObject('6758 springton dr'));
})();