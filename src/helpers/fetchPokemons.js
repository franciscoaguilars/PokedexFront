const fetchPokemons = (setError, setPokemons, setLoading) => {
  fetch("http://digitalpokedexapi.herokuapp.com/api/v1/pokemons")
    .then(res => res.json())
    .then(
      (result) => {
        setPokemons(result);
        setError(false);
        setLoading(false);
      },
      (error) => {
        setLoading(true);
        setError(error);
      }
    )
}

export default fetchPokemons;