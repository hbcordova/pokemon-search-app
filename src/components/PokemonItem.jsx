import React from 'react'
import { PropTypes } from 'prop-types'

export const PokemonItem = ({ image, name, abilities, type }) => {

    return (
        <div className='pokemon'>
            <div className='pokemon__details'>
                <img className='pokemon__details-image' src={image} alt={`Image of ${name}`} />
                <h3 className='pokemon__details-name'>{ name }</h3>
                <p className='pokemon__details-type'>[{ type }]</p>
            </div>
            <div className='abilities'>
                { abilities.map(ability => <span className='ability' key={ ability }>{ ability }</span>) }
            </div>
        </div>
    )
}

PokemonItem.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    abilities: PropTypes.array.isRequired,
    type: PropTypes.string.isRequired,
}
