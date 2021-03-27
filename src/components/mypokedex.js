import React from 'react';
import { Card, Container, Button }from 'react-bootstrap';

const MyPokedex = ({setPokedex, pokemons }) =>{

  const handleRemovePokemon = (id) =>{
    setPokedex(pokemons.filter(pokemon => pokemon.id !== id));
  }

  return(
    <Container className="text-center" style={{width:"45 rem"}} >

      
      { pokemons.length > 0 ? <h1>My Pokedex!</h1> : <h1>Pokedex is empty!</h1> }
      { pokemons.reverse().map(pokemon => {
        return (
        <Card key={pokemon.id}>
          <Card.Body className="d-flex justify-content-center">
            <div>
              <img className="mr-3"src={pokemon.img}/>
            </div>
            <div>
              <h3> {pokemon.name} </h3>
              <Button onClick={ () => handleRemovePokemon(pokemon.id)} variant="danger">Remove!</Button>
            </div>
          </Card.Body>
        </Card>
      ) })}
    </Container>
  )
}

export default MyPokedex;