import { React, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SinglePokemon from '../components/singlepokemon';
import Loading from '../components/loading';
import NotFound from '../components/notfound';

const ShowPage = ({pokedex, setPokedex}) => {
  const [error, setError] = useState(null);
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  let { id } = useParams();

  const fetchPokemon = () => {
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
    

  useEffect(() =>{
    fetchPokemon();
  }, [])

  const handleOnAdd = () =>{
    if ( !(pokedex.some(pokemon => pokemon.id === id))) {
      let newPokemon = {
        id: id,
        name: pokemon.name.toUpperCase(),
        img: pokemon.sprites.front_default
      }
      setPokedex([...pokedex, newPokemon])
      alert("Pokemon added!")
    }else{
      alert("You already have that pokemon!")
    }
  }

  return (
    loading === true ? (
      <Loading />
    ) : (
      error === true ? <NotFound/> : <SinglePokemon handleOnAdd = { handleOnAdd} pokemon = {pokemon}/>
    )
  )
}

export default ShowPage;