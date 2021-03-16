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
// (DONE)We do -> 2b. Implement `private` with ES6 getters and setters
// You(Two) do -> 2c. Implement `private` areas with "Closure Privacy"
// You(Two) do -> 3. Implement `WeakMap` for `private` and use its get and setters
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

    set temperature(temperature){

    }
}

class Room extends House {
    constructor (){
        super()

    }
}

class Bedroom extends Room {
    static lightingOptions = {
        ON: 'ON',
        OFF: 'OFF',
        DIM: 'DIM',
    };

    constructor (){
        super()

        let lightingLevel = Bedroom.lightingOptions.OFF;

        this._setLighting = function (option) {
            return lightingLevel = option;
        };

        this._getLighting = function () {
            return lightingLevel;
        };
    }

    set lighting(option) {
        return this._setLighting(option);
    }

    get lighting(){
        return this._getLighting();
    }

    get sleep(){
        //+1 energy
    }
}


class Area extends House {
    constructor (){
        super()

        const map = new WeakMap();
        
        map.set('maxCapacity', 10);
        map.set('squareFootage', 100);

        this._getFromMap = key =>
            map.get(key);

        this._setInMap = (key, value) =>
            map.set(key, value);
    }

    get maxCapacity(){
        //`maxCapacity` is `key`
        return this._getFromMap('maxCapacity');
    }

    set maxCapacity(capacity){
        return this._setInMap('maxCapacity', capacity);
    }

    get squareFootage(){
        return this._getFromMap('squareFootage');
    }

    set squareFootage(sqFootage){
        return this._setInMap('squareFootage', sqFootage);
    }
}


class Bar extends Area {}

class WeaponsCache extends Area {}

class Pool extends Area {}

class Sauna extends Area {}

class MovieTheatre extends Area {}
/*privacy is key
weapons cache
get -> "get ammo"
set -> "sentry turret"

bedrooms -> instances of Room

bar -> area
get -> "dranks"
set -> "stock the liquor (dranks)"

pool
set -> water; cleaning
get -> "healing ointment"

sauna / sunroom -> instance of Room

movie theatre -> instance of Room
*/
