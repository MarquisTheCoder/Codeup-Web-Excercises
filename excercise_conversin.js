


function numberConversion(fNumber, sNumber){
    if(!isNaN(Number(fNumber)) && !isNaN(Number(sNumber))){
        return(fNumber * sNumber);
    }
    return false;

}

console.log(numberConversion(10, 13));

function checkName(fName){
    switch (fName){
        case ("Jordan"):
            return("The Best");
        case ("Kobe" || "kobe"):
            return("The Mamba");
        default:
            return("doesn't matter");
    }


    console.log(checkName("Lebrons hairline"));
}