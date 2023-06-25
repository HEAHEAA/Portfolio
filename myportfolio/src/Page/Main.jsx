import {useNavigate} from "react-router-dom";
import Home from "./Home/Home.jsx";
import Drawer from "../Component/Drawer.jsx";

function Main(){
    const navigate = useNavigate();
    return(
        <div>
            <Drawer/>
            <Home/>
        </div>
    )
}
export default Main;