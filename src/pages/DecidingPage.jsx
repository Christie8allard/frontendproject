import { useNavigate } from "react-router-dom";

function DecidingPage() {
    const navigate = useNavigate();
    function handleEarnClick(){
        navigate("/create-project")
    }
    function handleBurnClick() {
        navigate("/projects")
    }
    return(
        <div>
            <button
            onClick={handleEarnClick}>Earn</button>
            <button
            onClick={handleBurnClick}>Burn</button>
        </div>
    )
    
}
export default DecidingPage;