import React from 'react';
import Card from 'react-bootstrap/Card';


const PokeCard = ({pokemon}) =>{
  return (
    <a href={`pokemon/${pokemon.id}`}>
      <Card border="dark" style={{ width: '18rem' }}>
        <Card.Body>
        <Card.Img variant="top" src={pokemon.sprites.front_default} style={{width: '16rem'}}/>
          <Card.Title>{pokemon.name}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk
            of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </a>
  )
}

export default PokeCard;