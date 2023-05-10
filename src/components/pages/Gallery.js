import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { landscapeImg } from '../../db/imageDB';
import { useNavigate } from 'react-router-dom';
import '../styles/Gallery.css';
// import landscapeImgHeader from 'https://images.unsplash.com/photo-1511576661531-b34d7da5d0bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'

function Gallery() {
  const navigate = useNavigate();
 let img =  landscapeImg[0]
 console.log(img, img.id)
  

  // let Images = [];
  
  

  return (
    <div>
      <h1>This is the Gallery page</h1>

      <nav>
        <ul>
          <div className='landscape-card'>
            <div className='landscape-card-info'>
              <h1>Landscape</h1>
              {/* <button><Link to="/gallery/landscape">See more Landscape</Link></button> */}
              <button onClick={() => {navigate('/gallery/landscape')}}>see more landscape</button>
            </div>
           <img src={img.url} alt="headerimg"></img>
          </div>
          <div className='portrait-card'>
            <Link to="/gallery/portraits">Portraits</Link>
          </div>
          <div className='building-card'>
            <Link to="/gallery/buildings">Buildnings</Link>
          </div>
          
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