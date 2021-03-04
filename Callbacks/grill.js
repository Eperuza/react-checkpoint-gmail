/*
    1. Nick is grilling
    3. Check if you have all the ingredients you need
    2. Turn on the gas
    4. Wait for temperature to reach "x" //nextInstructions or async operation
    4. Prep the ingredients
    5. Food on the grill.
*/

//nextInstructions function
// evaluates to undefined
// asynchronous
function waitForTemperature(temperature) {
    setTimeout(
        function(){
            console.log(`optimal temp has been reached, ${temperature}`)
        },
        5000
    );
}

// Greg must go get buns...
// synchronous
function getBuns(numberOfBuns) {
    console.log("Greg got the buns and has returned");
}

let ingredients = [
    "hamburger meat",
    "pineapple",
    // buns,
    "cheese"
];

function grilling(ingredients, nextInstructions) {
    console.log("Nick start grilling");

    waitForTemperature(75);

    if (ingredients.indexOf("buns") > -1) {
        console.log("Nick is prepping the ingredients")
    } else {
        // getBuns(20)
        nextInstructions(20);
        console.log("Instructions finished");
    }
}

grilling(ingredients, getBuns);