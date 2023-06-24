import {useNavigate} from "react-router-dom";

function Main(){

    const navigate = useNavigate();

    return(
        <div className="bg">
            <button onClick={()=>{
                navigate(`/sub`);
            }}>sub</button>
        </div>
    )
}
export default Main;