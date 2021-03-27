import React from 'react';
import { Container, Row, Col, Button }from 'react-bootstrap';

const SinglePokemon = ({ pokemon, handleOnAdd }) => {
  const pokemonType = pokemon.types[0].type.name
  return(
    <Container className="mt-4">
      <Row >
        <Col className="text-center">
          <img src={pokemon.sprites.front_default} alt={pokemon.name} style={{width: '14rem', border: '1px solid black'}}/>
          <h2 className="mt-3"> {pokemon.name.toUpperCase()} </h2>
          <h3> Type: {pokemonType.charAt(0).toUpperCase() + pokemonType.slice(1)} </h3>
          <a href="#">
            <Button onClick={ handleOnAdd } className='mt-4' variant='outline-danger'>Add to Pokedex!</Button>
          </a>
        </Col>
      </Row>
    </Container>
  )
}

export default SinglePokemon