import React from 'react';
import PokeCard from './pokecard';

const PokeContainer = ({pokemons}) =>{
  return (
    <div>
      <ul>
        {pokemons.map(pokemon => {
          return <PokeCard pokemon={pokemon}/>
        })}
      </ul>
    </div>
  )
}


export default PokeContainer;