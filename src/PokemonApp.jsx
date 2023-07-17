import React from 'react'
import { PokemonList } from './components/PokemonList'
import { PokemonItem } from './components/PokemonItem';
import { PokemonSearch } from './components/PokemonSearch';
import { usePokemons } from './hooks/usePokemon';


export const PokemonApp = () => {

    const { pokemons, addNewPokemon } = usePokemons();
    
    return (
        <>
            {/* { Titulo } */}
            <header className='pokemon__header'>
                <h1 className='pokemon__header-title'>Pokemon App</h1>
                <span className='pokemon__header-subtitle'>By hbcordova</span>
            </header>

            {/* { Buscador } */}
            <PokemonSearch onAddPokemon={addNewPokemon} />

            {/* { PokemonList } */}
            { pokemons.length === 0 && <div className='pokemon__list-message'>No hay pokemon para mostrar, agregue a pikachu!</div> }
            <PokemonList>
                { pokemons.map(pokemon => <PokemonItem key={pokemon.name} { ...pokemon } />) }
            </PokemonList>
        </>
  )
}
