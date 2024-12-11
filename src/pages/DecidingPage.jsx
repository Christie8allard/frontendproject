import { useNavigate } from "react-router-dom";

function DecidingPage() {
    const navigate = useNavigate();
    function handleEarnClick(){
        navigate("/create-project")
    }
    return(
        <div>
            <button
            onClick={handleEarnClick}>Earn</button>
            <button>Burn</button>
        </div>
    )
    
}
export default DecidingPage;