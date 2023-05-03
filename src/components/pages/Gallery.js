import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Gallery() {
  return (
    <div>
      <h1>This is the Gallery page</h1>
      <nav>
        <ul>
          <Link to="/gallery/landscape">Landscape</Link>
          <Link to="/gallery/portraits">Portraits</Link>
          <Link to="/gallery/buildings">Buildnings</Link>
        </ul>
        {/* 
        Outlet är för child-components 
        (måste ha med för att undermenyn ska synas/renderas) 
        */}
        <Outlet />

      </nav>
    </div>
  )
}

export default Gallery