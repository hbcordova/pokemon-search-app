import React, { useState } from 'react'

export const PokemonSearch = ({ onAddPokemon }) => {

    const [valueInput, setValueInput] = useState('');

    const onChangeInput = ({ target }) => {
        setValueInput(target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(valueInput.trim().length > 2){
            onAddPokemon(valueInput);
            setValueInput('');
        }
    }

    return (
        <form className='form__search' onSubmit={ handleSubmit }>
            <input 
                className='form__search-input' 
                type="text" 
                placeholder="Buscar Pokemon..." 
                onChange={ onChangeInput }
                value={ valueInput  }
            />
        </form>
    )
}
