"use strict";

/*
 Creator: Deshawn Marquis, Williams,
 GitHub Profile: https://github.com/MarquisTheCoder,
 Date Created: 8/19/22,
 Time Created: 2:26 PM,
 File Name: zatanna-magic-language.js,
 File Description:
 */


(function () {
        const translate = str =>{
                str = str.split(' ');
                str.forEach((word, index, array) => array[index] = word.split('').reverse().join(''));
                return str.join(' ');
        }

        console.log(translate('testing to see if the translator works'));
})();