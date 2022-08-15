"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
function analyzeColor(color){
    if(color == 'red') {
        return "roses are";
    }else if (color == 'blue'){
        return "water is";
    }else if(color == 'orange'){
        return "cant ryhme with anything";
    }else if(color == 'green'){
        return 'trees are';
    }else if(color == 'yellow'){
        return 'banannas are';
    }else if(color == 'indigo'){
        return 'is a pretty color';
    }else if(color == 'violet'){
        return 'is a pretty name';
    }else{
        return 'i dont have that color';
    }
}

console.log(analyzeColor('red'));
console.log(analyzeColor('blue'));

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */
console.log(analyzeColor(randomColor));

/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */
function analyzeColor(color){
    switch (color.toLowerCase()){
        case "red":
            return "roses are";
            break;
        case "blue":
            return "water is";
            break;
        case "white":
            return "clouds are";
            break;
        case "yellow":
            return "banannas are";
            break;
        case "violet":
            return "a pretty name";
            break;
        case "indigo":
            return "pretty color";
            break;
        case 'orange':
            return 'doesnt ryhme with anything';
            break;
        default:
            return "dont have that color";
            break;
    }
}
/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
alert(analyzeColor(prompt('pick a color: ')));
/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

function calculateTotal(luckyNumber, amount){
    switch (luckyNumber){
        case 0:
            return amount;
            break;
        case 1:
            return amount - (amount * .1);
            break;
        case 2:
            return amount - (amount * .25);
            break;
        case 3:
            return amount - (amount * .35);
            break;
        case 4:
            return amount - (amount * .5);
            break;
        default:
            return 0;
    }
}

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
/*Generate a random number between 0 and 6*/

 let luckyNumber = Math.floor(Math.random() * 6);
alert(calculateTotal(prompt('whats your bill?; ')));
/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

/*the below functions will perform comparisons on a given number and return a filtered output*/
const polarity = number => (number > 0) ? 'Your number is positive\n' : 'Your number is negative\n';
const isEven = number => (number % 2 === 0) ? 'Your number is True\n' : 'Your numbe false\n';
const plusOneHundred = number => `Your number plus 100: ${number + 100}\n`;
const allOfTheAbove = number => isEven(number) + plusOneHundred(number) + polarity(number);

/*below this line will ask for user input and alert all of the following functions*/
if(confirm('Would you like to enter a number')){
    let number = parseFloat(prompt('Enter Number: '));
    (!isNaN(Number(number))) ? alert(allOfTheAbove(number)) : alert('That\'s not a number nerd');
}
