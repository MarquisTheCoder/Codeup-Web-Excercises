
/*
* IIFE: Immediately Invoked Functions
* Function declarations that are immediately
* called and ran by the JavaScript interpreter.
*
* IIFE USE: Protecting the global scope
* Because of the way javascript does scope
* without an IIFE all functions and variable
* declarations would be called in the global scope
*
* WHAT TO TAKE FROM THIS:
* Good practice is all code should be called
* and run from within an IIFE
* to protect the global scope and
* keep code clean and reliable.
* */

( function(){
    /*
     All code beyond this point is within the IIFEs local scope
    */
    function testDeclarationExample(parameter1, parameter2){
        return((parameter1 > parameter2) ? parameter1 / parameter2 : parameter2 / parameter1);
    }


    /*
     Functions walk-through with Javier
    * */

    /*Function expression */

    /*Functions should be portable thats why we don't
     rely on variables in the global scope*/
    const addNine = function (x){ return(x + 9)}
    const addTen = (x) => x + 10;


})();