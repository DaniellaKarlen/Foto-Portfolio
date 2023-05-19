import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import '../styles/Gallery.css';
import { landscapeImg, portraitImg, buildingImg } from '../../db/imageDB.js';
// import imageDB from '../../db/imageDB';

function Gallery() {
  const [showLandscape, setShowLandscape] = useState(true);
  const [showPortraits, setShowportraits ] = useState(true);
  const [showBuildings, setShowBuildings] = useState(true)
  const navigate = useNavigate();



  const handlePortraitButtonClick = () => {

    // if((navigate('/gallery/portraits'))) {
    //   setShowLandscape(false);
    //   setShow(false)
    // } else {
    //   setShowLandscape(showLandscape === true)
      
    // }
    
    const newLandscape = setShowLandscape(prev => prev === false)
    const newShow = setShowBuildings(prev => prev === false)
    return {newLandscape, newShow};

    // setShowLandscape(false);
    // setShowportraits(true);
    // setShowBuildings(false);
    
  };
  

 let firstLandscape = landscapeImg[0];
 let firstPortrait = portraitImg[0];
 let firstBuilding = buildingImg[0];

  return (
    <div>
      <h1>This is the Gallery page</h1>

      <nav>
        <ul className='card-container'>
        { showLandscape && 
          <div className='card landscape-card'>
            <div className='card-info'>
              <h1>Landscape</h1>
              {/* <button><Link to="/gallery/landscape">See more Landscape</Link></button> // exempel 1 , exempel 2 nedan */}
              <button className='gallery-btn' onClick={() => {navigate('/gallery/landscape')}}>see more landscapes</button>
            </div><img key={firstLandscape.id} src={firstLandscape.url} alt="headerimg"></img>
          </div>
          }
          { showPortraits &&
          <div className='card portrait-card'>
            <Link to ="/gallery/portraits" onClick={handlePortraitButtonClick}>
            <div className='card-info'>
              <h1>Portrait</h1>
              {/* <button><Link to="/gallery/landscape">See more Landscape</Link></button> // exempel 1 , exempel 2 nedan */}
              {/* <button className='gallery-btn' onClick={() => {navigate('/gallery/portraits', handlePortraitButtonClick())}}>see more portraits</button>  */}
            </div>
           <img className='img-background' key={firstPortrait.id} src={firstPortrait.url} alt="headerimg"></img>
           </Link>
         </div>
            }
          
          {showBuildings &&
          <div className='card building-card'>
            <Link to ="/gallery/buildings">
              <div className='card-info'>
                <h1>Buildings</h1>
                {/* <button><Link to="/gallery/landscape">See more Landscape</Link></button> // exempel 1 , exempel 2 nedan */}
                {/* <button className='gallery-btn' onClick={() => {navigate('/gallery/buildings')}}>see more landscape</button>  */}
              </div>
            <img key={firstBuilding.id} src={firstBuilding.url} alt="headerimg"></img>
            </Link>
            
          </div>
          }
          
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