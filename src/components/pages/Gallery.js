import React from 'react';
import { Link } from 'react-router-dom';

function Gallery() {
  return (
    <div>
      <h1>This is the Gallery page</h1>
      <nav>
        <ul>
          {/* 

          Få länkarna att visas på sidan nästa gång.

          */}
          <Link to="/Landscape"></Link>
          <Link to="/Portraits"></Link>
          <Link to="/Buildings"></Link>
          {/* <button><a href="/Landscape">Landscape</a></button>
          <button><a href="/Portraits">Portraits</a></button>
          <button><a href="/Buildings">Buildings</a></button> */}
        </ul>

      </nav>
    </div>
  )
}

export default Gallery