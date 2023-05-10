import { landscapeImg } from "../../../db/imageDB"

const Landscape = () => {
  return (
    <div>
      {landscapeImg.map((imges)=>{
        return ( 
        
        <div>
        <img key={imges.id} src={imges.url} alt='images'></img>
        </div>
      
      )})}
    </div>

    
  )
}
export default Landscape