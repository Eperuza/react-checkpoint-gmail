const Pokedex = require("./pokedex");
const PokeService = require("./pokeService");

describe('Pokedex tests', ()=> {

    it('is a function', () => {
        expect(typeof Pokedex).toEqual('function');
    })


    // it('has a method that returns pokemon attributes', () => {
    //     const pd = new Pokedex();
    //     expect(typeof pd.getPokemonAbilitiesByPokemonId).toEqual('function');

    //     var pokemonAbilityResults = pd.getPokemonAbilitiesByPokemonId(25);
    //     expect(pokemonAbilityResults.length).toEqual(2);
    // })

    it('returns attributes for a given pokemon', done => {
        //solution 1 - still dependent
        //const pokedex = new Pokedex(new PokeService());

        //solution 2 - great and working but no jest goodies
        // const pikachu = {
        //     name: "Pikachu",
        //     abilities: [
        //         {
        //           ability: { name: 'static', url: 'https://pokeapi.co/api/v2/ability/9/' },
        //           is_hidden: false,
        //           slot: 1
        //         },
        //         {
        //           ability: {
        //             name: 'lightning-rod',
        //             url: 'https://pokeapi.co/api/v2/ability/31/'
        //           },
        //           is_hidden: true,
        //           slot: 3
        //         }
        //       ]
        // }
        // var aMockPokeService = {
        //     getPokemonById: function(pokemonId, callback){
        //         callback(pikachu);
        //     }
        // }
        // const pokedex = new Pokedex(aMockPokeService);

        const pikachu = {
            name: "Pikachu",
            abilities: [
                {
                  ability: { name: 'static', url: 'https://pokeapi.co/api/v2/ability/9/' },
                  is_hidden: false,
                  slot: 1
                },
                {
                  ability: {
                    name: 'lightning-rod',
                    url: 'https://pokeapi.co/api/v2/ability/31/'
                  },
                  is_hidden: true,
                  slot: 3
                }
            ]
        }
        const mockPokeServiceResponseObject = {
            getPokemonById: jest.fn((pokeId, callback) => {
                callback(pikachu)
            })
        };
        jest.mock('./pokeService', () => mockPokeServiceResponseObject)        
        var mockPokeService = require('./pokeService');
        
        var pokedex = new Pokedex(mockPokeServiceResponseObject);
        

        pokedex.getPokemonAbilitiesByPokemonId(25, (results) => {
            try{
                console.log(results);
                expect(results.length).toEqual(2);
                expect(mockPokeService.getPokemonById).toHaveBeenCalledTimes(1);
                done();
            }
            catch(error){
                done(error);
            }
            
        })
    }); 
})