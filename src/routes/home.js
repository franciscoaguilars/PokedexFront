import React, { useState, useEffect } from 'react';
import PokeContainer from '../components/pokecontainer';
import Loading from '../components/loading';
import fetchPokemons from '../helpers/fetchPokemons';

const Home = () =>{
  const [error, setError] = useState(null);
  const [pokemons, setPokemons] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() =>{
    fetchPokemons( setError, setPokemons, setLoading );
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