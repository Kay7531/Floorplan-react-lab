import Bath from "./Bath"
import Bedroom from "./Bedroom"
import Kitchen from "./Kitchen"
import LivingRoom from "./LivingRoom"
function Floorplan(props) {
    return(
        <>
        
        <div>
            {props.roomPlan.bedNum.map(bed =>
            <Bedroom bed={bed}/>
            )}
        </div>
        <div><LivingRoom/></div>
        <div> <Kitchen/> </div>
       <div>
       {props.roomPlan.sizes.map(size =>
        <Bath size={size}/>
        )}
       </div>
       
        
        
        </>
    )
}

export default Floorplan