import React, { useState, useEffect } from 'react';
import PokeContainer from './pokecontainer';

const Home = () =>{
  const [error, setError] = useState(null);
  const [pokemons, setPokemons] = useState();
  const [loading, setLoading] = useState(true);

  const fetchPokemons = () => {
    fetch("http://localhost:3001/api/v1/pokemons")
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result);
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

  useEffect(() =>{
    fetchPokemons();
  }, [])

  return(
    <div>
      { loading === true ? (
        <h1>Loading awesome Pokemons!</h1>
      ) : (
        <div> 
          <h1>This is the home page.</h1>
          <PokeContainer pokemons={pokemons}/>
        </div>
      ) }
    </div>
  )
}

export default Home;