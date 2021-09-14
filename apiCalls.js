const getPokemonData = async (axios, pokemonToLookFor) => {
  try {
    const req = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${pokemonToLookFor}`
    );
    const data = await req.data;
    return {
      id: data.id,
      weight: data.weight,
      moves: data.moves,
      name: data.name
    };
  } catch (err) {
    return undefined;
  }
};

module.exports = getPokemonData