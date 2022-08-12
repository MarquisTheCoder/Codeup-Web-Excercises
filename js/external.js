"use strict";
console.log( "Hello from external JavaScript");
alert('Welcome to my Website!');
let userResponse = prompt("What is your favorite colore? ");
if(userResponse){
    alert(`Great, ${userResponse} is my favorite color too!`);
}

//=============EXCERCISE THREE FROM PREVIOUS EXERCISE===============

//.A)------------------------------------------
function moviePriceCalculation(amountOfDays){
    return(amountOfDays * 3);
}

function outputPay(movies){
    return(`You'll have to pay $${movies} for your movies`);
}

let littleMermaid = 3;
let brotherBear = 5;
let hercules = 1;

outputPay(littleMermaid + brotherBear + hercules);


console.log(outputPay)

//.B)------------------------------------------
function payPerHour(hourlyRate, hoursWorked){
    return(hourlyRate * hoursWorked);
}
function outputPay(calculatedPay){
    return(`You'll be payed $${calculatedPay} for your work.`);
}
console.log(outputPay(
    payPerHour(400, 6) +
                payPerHour(380, 4) +
                payPerHour(350, 10)
    )
);

//.C)------------------------------------------------------------
function classCapacityChecker(classCapacity, numberOfStudents){
    return(classCapacity>numberOfStudents);
}
function classSchedule(){
    let classCapacity = prompt("How any students can the class hold?: ");
    let numberOfStudents = prompt("How many students are in the class?: ")
    if(classCapacityChecker(classCapacity, numberOfStudents)){
        alert("You can enroll in this class!");
        return("You can enroll this class!");
    }
    alert("You cannot enroll this class!");
    return("You cannot enroll this class!");

}

//.D)-----------------------------------------------------------------------------

function productBuyer(){
    let memberStatus = prompt("Are you a premium member? ");
    let productQuantity = prompt("How many products do you want?: ");
    if(memberStatus === "Yes" || memberStatus === "yes" || memberStatus === "y"){
        let productChoice = prompt("We have Expired Milk" +
            "We have a 3 year old mcdonalds hamburger" +
            "And we have candy")
        if(productChoice.includes("milk", "Milk")){
            alert("WE CANNOT HELP YOU!!");
            return("WE CANNOT HELP YOU GO AWAY RIGHT NOW!!!");
        }else{
            alert("We are shipping whatever item you want right away!");
        }
    }
    else if(productQuantity >= 2){

        let productChoice = prompt("We have Expired Milk" +
            "We have a 3 year old mcdonalds hamburger" +
            "And we have candy")
        if(productChoice.includes("milk", "Milk")){
            alert("WE CANNOT HELP YOU!!");
            return("WE CANNOT HELP YOU GO AWAY RIGHT NOW!!!");
        }else{
            alert("We'll try to maybe ship your items immediately.....maybe");
        }
    }

}