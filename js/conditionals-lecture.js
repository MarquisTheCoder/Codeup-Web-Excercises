// let userInput = prompt('Welcome to CodeUp icecream, What flavor do you want?: ').toLowerCase();
//
// if(userInput === 'chocolate'){
//     alert('one chocolate coming right up');
// }else if(userInput === 'vanilla'){
//     alert('mmm....ok....like if that\'s what you like....me personally tho...');
// }
//
// switch (userInput){
//     case ('strawberry'):
//         alert('ok sweetness');
//         break;
//
//     case ('blueberry'):
//         alert('ok smurf');
//         break;
//
//     default:
//         alert('no other options my boy');
// }

/*
* TERNARY OPERATIONS
* Uses: A shorthand way to create and use if/else conditionals
* Example: (conditional) ? (true) : (false)
* */

// let anime = confirm("Do you like anime?: ");
// (anime) ? alert('Yeh...same') : alert('hmmmm...ok...me personally though');

let running = true;
while(running){
    const divByFive = (number) =>
        (number % 5 === 0 && isNaN(parseFloat(number))) ? alert('number is divisible by five') : alert('pick another number');
    divByFive(prompt('Check if number is divisible by 5: '));

}


/*
*
* Good code example Javier
* */

function customer(purchaseAmt){
    if(purchaseAmt >= 1000){
        alert('Customer is MVP');
    }else{
        alert('Customer is not MVP');
    }
}

const isMvp = (purchaseAmt) =>
    (purchaseAmt > 1000) ? true : false;

