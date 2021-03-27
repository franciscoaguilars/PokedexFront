import React from 'react';
import MyPokedex from '../components/mypokedex';

const Pokedex = ({ pokemons, setPokedex}) => {
  return(
    <MyPokedex setPokedex ={setPokedex} pokemons = { pokemons }/>
  )
}

export default Pokedex;