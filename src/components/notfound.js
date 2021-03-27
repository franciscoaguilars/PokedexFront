import React from 'react';
import logo from '../assets/sad_pikachu.png';

const NotFound = () =>{
  return(
    <div className="container text-center mt-4">
      <h1>Pokemon not found!</h1>
      <img src={logo} style={{background: "transparent"}}/>
    </div>
  )
}

export default NotFound;