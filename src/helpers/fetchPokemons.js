const fetchPokemons = (setError, setPokemons, setLoading) => {
  fetch("http://localhost:3001/api/v1/pokemons")
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