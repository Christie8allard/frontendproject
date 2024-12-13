// DecidingPage.jsx
import { useNavigate } from "react-router-dom";
import "./DecidingPage.css"; // Create this file

function DecidingPage() {
    const navigate = useNavigate();
    function handleEarnClick(){
        navigate("/create-project")
    }
    function handleBurnClick() {
        navigate("/projects")
    }
    return(
        <div className="deciding-container">
            <div className="content-container">
                <div className="button-section">
                    <button
                        className="deciding-button earn"
                        onClick={handleEarnClick}>
                        <span>Earn</span>
                    </button>
                    <div className="description-box earn-desc">
                        <p>Teach. Mentor. Inspire. </p>
                        <p>Earn Gems by creating a project that gives your time to a peer.</p>
                    </div>
                </div>
                <div className="button-section">
                    <button
                        className="deciding-button burn"
                        onClick={handleBurnClick}>
                        <span>Burn</span>
                    </button>
                    <div className="description-box burn-desc">
                        <p>Now it's time to spend your hard earned balance.</p>
                        <p>Browse projects for mentorship opportunities across the business.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default DecidingPage;


















// import { useNavigate } from "react-router-dom";

// function DecidingPage() {
//     const navigate = useNavigate();
//     function handleEarnClick(){
//         navigate("/create-project")
//     }
//     function handleBurnClick() {
//         navigate("/projects")
//     }
//     return(
//         <div>
//             <button
//             onClick={handleEarnClick}>Earn</button>
//             <button
//             onClick={handleBurnClick}>Burn</button>
//         </div>
//     )
    
// }
// export default DecidingPage;