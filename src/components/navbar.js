import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

const NavbarTop = () => {
  return (
    <Navbar  bg="danger" variant="dark">
      <Navbar.Brand className="ml-3 font-weight-bold" href="/">
        DigitalPokedex
      </Navbar.Brand>
      <Navbar.Brand href="/pokedex">
        My pokedex!
      </Navbar.Brand>
    </Navbar>
  )
}

export default NavbarTop;