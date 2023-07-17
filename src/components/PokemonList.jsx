import React from 'react'

export const PokemonList = ({ children }) => {

    return (
        <>
            {/* { Aqui puede ir cualquier contenido } */}

            {/* { Aqui ira la lista } */}

            <div className='pokemons'>
                { children }
            </div>
        </>
    )
}
