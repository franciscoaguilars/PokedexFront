import React from 'react';
import PokeCard from './pokecard';
import { Container, Row, Col } from 'react-bootstrap';

const PokeContainer = ({pokemons}) =>{
  return (
    <Container className="mt-3">
      <Row className="d-flex justify-content-center">
   
        {pokemons.map(pokemon => {
            return <Col key={pokemon.id} className="mb-3" xs={12} md={4} lg={3}><PokeCard key={pokemon.id} pokemon={pokemon}/></Col>
          })}
      
      </Row>
    </Container>
  )
}


export default PokeContainer;