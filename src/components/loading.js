import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

const Loading = () =>{
  return(
    <div className="container" style={{height: '100vh'}}>
        <div className="row justify-content-center align-items-center h-100">
          <Spinner className="m-3" animation="grow" variant="danger" />
          <Spinner className="m-3" animation="grow" variant="warning" />
          <Spinner className="m-3" animation="grow" variant="info" />
          <Spinner className="m-3" animation="grow" variant="success" />
          <Spinner className="m-3" animation="grow" variant="dark" />
      </div>
    </div>
  )
}

export default Loading;