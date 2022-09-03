"use strict";

/*
 Creator: Deshawn Marquis, Williams,
 GitHub Profile: https://github.com/MarquisTheCoder,
 Date Created: 8/29/22,
 Time Created: 4:09 PM,
 File Name: learning-promises.js,
 File Description:
 */

const Url = '';
fetch(Url)
     .then(data => {return data.json()})
     .then(res=> {console.log(res)})