class Pet {
    constructor(givenAnimalType, name, speed){
        this.type = givenAnimalType;
        this.name = name;
        this.speed = speed;
    }

   

    static whichAnimalIsFaster(pet1, pet2){
        if(pet1.speed > pet2.speed)
            return pet1;
        else 
            return pet2;
    }
}

class Dog extends Pet {
    constructor(name){
        super("Dog", name, 20)
    }

}

class Cheetah extends Pet{
    constructor(name){
        super("Cheetah", name, 70);
    }
}

// whichAnimalIsfaster(pet1, pet2){
//     if(pet1.speed > pet2.speed)
    
// }

let myDogDoug = new Dog("Doug");
let myDog2 = new Dog("Fido");

let myCheetah = new Pet("Cheetah", "Charlie", 70);
let myCheetah2 = new Cheetah("Casey")

//ClassName.FunctionInvocation
console.log(Pet.whichAnimalIsFaster(myDog2, myCheetah));

//myCheetah.name = "Charlie";
//console.log(myCheetah.type, myCheetah.name);


// Job {
//     Rooms [
//         {Room obj
//             [Readings]
//         }
//     ]
//     //output the entirety of the dryness of the room
//     static entireDrynessOnJob(rooms)
// }

// dryness(myInstance.rooms)
// Job.dryness(myInstance.rooms);