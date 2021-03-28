const fetchPokemon = (setError, setLoading, setPokemon, id) => {
  fetch(`http://localhost:3001/api/v1/pokemons/${id}`)
    .then(res => res.json())
    .then(
      (result) => {
        
        if ('error' in result){
          setError(true);
          setLoading(false);
        }else {
          setPokemon(result);
          setLoading(false);
        }
      }
    )
}

export default fetchPokemon;