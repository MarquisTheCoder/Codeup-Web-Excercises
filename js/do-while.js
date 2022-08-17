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

    const diceRoll = Math.floor(Math.random() * 6) + 1;
    do {
        alert('Wrong number');
    }while(parseFloat(prompt(`Enter a number 1-6: `)) != diceRoll)

    alert(`You guessed it the number was ${diceRoll}`);

})();