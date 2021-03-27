import React, { useState, useEffect } from 'react';
import PokeContainer from '../components/pokecontainer';
import Loading from '../components/loading';

const Home = () =>{
  const [error, setError] = useState(null);
  const [pokemons, setPokemons] = useState();
  const [loading, setLoading] = useState(true);

  const fetchPokemons = () => {
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

  useEffect(() =>{
    fetchPokemons();
  }, [])

  return(
    <div>
      { loading === true ? (
        <Loading />
      ) : 
      (
        <div> 
          <PokeContainer pokemons={pokemons}/>
        </div>
      ) }
    </div>
  )
}

export default Home;