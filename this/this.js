var catNoise = "Meow.";

var dog = {
    sound: "Ruff",
    makeSound: function(){
        console.log("The dog says: " + this.sound);
    }
}

var cat = { sound: catNoise }

dog.makeSound.call(cat);