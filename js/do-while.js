"use strict";

/*
Creator: Deshawn Marquis, Williams,
GitHub Profile: https://github.com/MarquisTheCoder,
Date Created: 8/17/22,
Time Created: 2:07 PM,
File Name: do-while.js,
File Description: 
*/


"use strict";

/*
Creator: Deshawn Marquis, Williams,
GitHub Profile: https://github.com/MarquisTheCoder,
Date Created: 8/17/22,
Time Created: 1:59 PM,
File Name: math-object.js,
File Description:
Exercise for CodeUp LLC from Javier
*/


(function () {

    // const diceRoll = Math.floor(Math.random() * 6) + 1;
    // do {
    //     alert('Wrong number');
    // }while(parseFloat(prompt(`Enter a number 1-6: `)) != diceRoll)
    //
    // alert(`You guessed it the number was ${diceRoll}`);

    // This is how you get a random number between 50 and 100
    //let allCones = Math.floor(Math.random() * 50) + 50;
    let allCones = parseFloat(prompt('Enter cone amount: '));
// This expression will generate a random number between 1 and 5
    console.log(`Amount of cones: ${allCones}`);
    while(allCones > 0){
        let bought  = Math.floor(Math.random() * 5) + 1;
        if(bought > allCones){
            console.log(`Cannot sell you ${bought}. I only have ${allCones} so ill sell you whats left`);
            allCones -= allCones;
            console.log(`All cones sold!`);
        }else{
            allCones -= bought;
            console.log(`${bought} cones sold! amount left: ${allCones}`);
        }

    }
})();