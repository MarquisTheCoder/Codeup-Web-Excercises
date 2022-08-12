
let khalilAge = 23;
let marquisAge = 22;
let yearGoal = 44;
let success = true;
let failed = false;
let animal = true;
let human = false;
let treeType = "plant";
let flowerType = "plant";
let antType = "bug";

const BRAIN_DEVELOPED = 25;

function t(tenaryOperation){
    console.log(tenaryOperation);
}

//tenary practice

t((marquisAge <= yearGoal) ? "You still have plenty of time" : "You might want to hurry up my boy... :(");
t((success || failed) ? "this will always be true" : "this will always be false");
t((marquisAge >= 44) ? "You're getting old around this time" : "You're still pretty young");
t((khalilAge > marquisAge) ? "khalil still the lil bro" : "khalil still the lil bro");
t((yearGoal > BRAIN_DEVELOPED) ? "The brain will be developed no excuses" : "bruh...?");
t((failed !== success) ? "hmm....that sounds about right" : "bruh........huh?");
t((antType === "bug") ? "The ants type is correct" : "the ants type needs to be bug");
t((flowerType === "plant") ? "The flowers type is indeed plant" : "The flowers type needs to be plant");

