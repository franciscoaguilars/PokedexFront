import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

const NavbarTop = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/">
        DigitalPokedex
      </Navbar.Brand>
    </Navbar>
  )
}

export default NavbarTop;