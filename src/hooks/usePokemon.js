import { useState, useEffect } from 'react'
import { getPokemonByName } from '../helpers/getPokemon'

export const usePokemons = () => {

    const [pokemons, setPokemons] = useState([]);
    
    const getPokemon = async (name) => {
        const pokemon = await getPokemonByName(name);
        if (pokemon) setPokemons([pokemon, ...pokemons]);
    }

    const addNewPokemon = (newPokemon) => {

        const newPokemonLowerCase = newPokemon.toLowerCase();
    
        if (pokemons.findIndex(pokemon => pokemon.name === newPokemonLowerCase) !== -1) return;
    
        getPokemon(newPokemonLowerCase);
    }

    return {
        pokemons,
        addNewPokemon
    }
}
