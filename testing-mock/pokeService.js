let fetch = require('node-fetch');

class PokeService {
    constructor(){        
    }

    getPokemonById(pokemonId, callback){
        console.log("in pokeservice");
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`)
        .then(response => response.json())
        .then(function(pokemon) {
            callback(pokemon);
        })
        .catch(function(err){
            console.log(`ERROR! ${err}`)
        });                
    }
}

module.exports = PokeService;