import { React, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SinglePokemon from './singlepokemon';

const ShowPage = () => {
  const [error, setError] = useState(null);
  const [pokemon, setPokemon] = useState();
  const [loading, setLoading] = useState(true);
  let { id } = useParams();

  const fetchPokemon = () => {
    fetch(`http://localhost:3001/api/v1/pokemons/${id}`)
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result);
          setPokemon(result);
          setError(false);
          setLoading(false);
        },
        (error) => {
          setLoading(true);
          setError(error);
        }
      )
    }
  
  useEffect(() =>{
    fetchPokemon();
  }, [])

  return (
    loading === true ? (
      <h1>Loading..</h1>
    ) : (
      <SinglePokemon pokemon = {pokemon}/>
    )
  )
}

export default ShowPage;