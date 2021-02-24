/*
1. Make an array of a meal.
2. Recursively "eat" the meal until there is nothing left.
*/

var myMeal = [
    "chicken",
    "gin",
    "potatoes",
    "salad",
    "bread",
    "caviar",
    "veggies"
];

//variable???
function eat(meal) {
    if(meal.length === 0){
        console.log("nothing left to eat");
        return -1;
    }

    if(meal.length > 9) {
        console.log("way too much food");
        return -1;
    }

    var item = meal.shift();
    console.log("I just ate " + item);
    eat(meal);
}

eat(myMeal);


