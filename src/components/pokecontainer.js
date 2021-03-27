import React from 'react';
import PokeCard from './pokecard';
import { Container, Row, Col } from 'react-bootstrap';

const PokeContainer = ({pokemons}) =>{
  return (
    <Container className="mt-3">
      <Row className="justify-content-center">
   
        {pokemons.map(pokemon => {
            return <Col key={pokemon.id} className="p-0 mb-3 ml-3" xs={12} md={6} lg={3}><PokeCard key={pokemon.id} pokemon={pokemon}/></Col>
          })}
      
      </Row>
    </Container>
  )
}


export default PokeContainer;