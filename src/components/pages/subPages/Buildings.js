import React from 'react'
import { buildingImg } from '../../../db/imageDB'

function Buildings() {
  return (
    <div>
      {buildingImg.map((imges)=>{
        return ( 
        
        <div key={imges.id}>
          <img key={imges.id} src={imges.url} alt='images'></img>
        </div>
      
      )})}
    </div>
  )
}

export default Buildings