export const getPokemonByName = async (name) => {
    
    const url = `https://pokeapi.co/api/v2/pokemon/${ name.toLowerCase() }`;
    
    try {
        const pokemon = await fetch(url);
        const { types, abilities, sprites, name: pokemonName } = await pokemon.json();

        return {
            name: pokemonName,
            type: types[0].type.name,
            abilities: abilities.map(({ ability }) => ability.name),
            image: sprites.front_default
        }
    } catch (error) {
        return null;
    }
}
