import "./styles/registrationPage.css";
import Registrationlevel1 from "./components/registerlevel1"
import {IMAGES} from "../";
function Registration (){
    return(
<div className="containerImage"style={{backgroundImage:`url(${IMAGES.regisWallpaper})`}}>
<div className="container">
<Registrationlevel1/>
</div>
    </div>
    )
}

export default Registration;