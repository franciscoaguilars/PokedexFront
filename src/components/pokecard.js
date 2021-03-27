import React from 'react';
import Card from 'react-bootstrap/Card';


const PokeCard = ({pokemon}) =>{
  const pokemonName = pokemon.name
  const types = pokemon.types
  return (
    <a href={`pokemon/${pokemon.id}`} className="text-decoration-none text-dark">
      <Card border="dark" style={{ width: '18rem', height: '20rem'}} className="text-center mr-0">
        <Card.Body>
        <Card.Img variant="top" src={pokemon.sprites.front_default} style={{width: '10rem'}}/>
          <Card.Title>{pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1) }</Card.Title>
          <Card.Text>
            <h6> <b>ID:</b> {pokemon.id}</h6>

              { types.map( type => {
                return <p className="m-0"> &bull; { type.type.name }</p>
              })}
          </Card.Text>
        </Card.Body>
      </Card>
    </a>
  )
}

export default PokeCard;