"use strict";

/*
Creator: Deshawn Marquis, Williams,
GitHub Profile: https://github.com/MarquisTheCoder,
Date Created: 8/17/22,
Time Created: 12:21 PM,
File Name: while.js,
File Description: 
*/

/*
* TODO
* Create a while loop that uses console.log() to create the output shown below.
*
2
4
8
16
32
64
128
256
512
1024
2048
4096
8192
16384
32768
65536
* */
(function () {
    //long loop
    let total = 2;
    while(total <= 65536){
        console.log(total);
        total *= 2;
    }
    //shorthand for while loop
    //FOR


    const END_OF_PATH = 62;
    let footsteps = 0;
    do{
        footsteps++;
    }while(footsteps != END_OF_PATH);


})();
