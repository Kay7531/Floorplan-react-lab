import Bath from "./Bath"
import Bedroom from "./Bedroom"
import Kitchen from "./Kitchen"
import LivingRoom from "./LivingRoom"
function Floorplan(props) {
    return(
        <>
            {props.roomPlan.bedNum.map(bed =>
            <Bedroom bed={bed}/>
            )}
        
        <div><LivingRoom/></div>
        <div> <Kitchen/> </div>
    
       {props.roomPlan.sizes.map(size =>
        <Bath size={size}/>
        )}
       
       
        
        
        </>
    )
}

export default Floorplan