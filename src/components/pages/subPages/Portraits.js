import React from 'react'
import { portraitImg } from '../../../db/imageDB'

function Portraits() {
  return (
    <div>
      {portraitImg.map((imges)=>{
        return ( 
        
        <div key={imges.id}>
          <img key={imges.id} src={imges.url} alt='images'></img>
        </div>
      
      )})}
    </div>
  )
}

export default Portraits