const PokeService = require("./pokeService")

class Pokedex {
    constructor(pokeService){
        this.pokeService = pokeService
    }

    getPokemonAbilitiesByPokemonId(pokemonId, callback)
    {
        this.pokeService.getPokemonById(pokemonId,function(pokemonData){
            var abilities = pokemonData.abilities;
            callback(abilities);
        })
    }

}

module.exports = Pokedex