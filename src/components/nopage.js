import { useNavigate } from "react-router-dom"

function Nopage(){
    let navigate = useNavigate("");
    return (
        <div className="no-page">
            <p>Something went wrong</p>
            <button onClick={()=>navigate("/")}>GO to Home</button>
        </div>
    )
}
export default Nopage;