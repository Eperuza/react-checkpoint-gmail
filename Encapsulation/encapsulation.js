/* 
The Mission, Operation "Key Maker": 
Steven Richards(USAF) & Ethan Wise(USAF) are on special assignment 
operating out of Alexandria and Aswan, Egypt. There they will train
Egyptian military personnel in digital counter-terrorism
with cellist and beverage connoisseur, Zach Mansell, as a civilian attachment.

The trio are posing as bourgeois, Australo-British, millionaire playboys, who struck it rich
selling their own line of niche, novelty, boiled, flavorless, bottled, Japanese, spring waters
called "Z Water". As a cover, they have been assigned a beach house in Alexandria where they host
occasional, lavish parties DJ'd by "TJ"(ret. Army), a U.S. expat and bilingual tour-guide.

It is your job as a class to implement security for their beach-side
base of operations. Godspeed.
*/

// (DONE) I do -> 1. Implement `public` areas. The entire house is open. Not good. Not fun.
// (DONE) We do -> 2a. Implement `private` areas with "Conventional Privacy"
// We do -> 2b. Implement `private` with ES6 getters and setters
// We do -> 2c. Implement `private` areas with "Closure Privacy"
// We do -> 3. Implement `WeakMap` for `private` and use its get and setters
// You(Two) do -> 4. Implement `protected` areas using `WeakMap` (this is purposefully challenging)


// var egyptianCrib = new House(15, 4);
class House {
    constructor (rooms, areas){
        //we dont want peeps to know how many rooms are in the house...
        //we want the weapons cache to be private

        //"conventional privacy"
        this._rooms = rooms;
        this._areas = areas;
    }

    //getter
    get RoomCount(){
        return this._rooms;
    }

    //setter
    set RoomCount(numberOfRooms){
        this._rooms = numberOfRooms;
    }
}

class Room extends House {
    constructor (){
        super()
    }

}
class Bedroom extends Room {
    constructor (){
        super()
    }
}

class Area extends House {
    constructor (){
        super()
    }
}

//privacy is key
weapons cache
get -> "get ammo"
set -> "sentry turret"

bedrooms -> instances of Room

//public area 
bar -> area
get -> "dranks"
set -> "stock the liquor (dranks)"

pool
set -> water; cleaning
get -> "healing ointment"

sauna / sunroom -> instance of Room

movie theatre -> instance of Room