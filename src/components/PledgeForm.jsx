import { useState } from "react";
import { useNavigate } from "react-router-dom";
import postPledge from "../api/post-pledge.js";
import './PledgeForm.css';
/* eslint-disable react/prop-types */

function PledgeForm(props) {
    const { projectId }=props;
    const navigate = useNavigate();
    const [pledgeData, setPledgeData] = useState({
        amount: "",
        comment: "",
        anonymous: false,
        project: projectId,
    });
    const handleChange = (event) => {
        const { id, value, type, checked } = event.target;
        setPledgeData((prevProjectData) => ({
            ...prevProjectData,
            [id]: type === "checkbox" ? checked : value,
        }));
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        const { amount, comment, anonymous, } = pledgeData;

        if (amount && comment && anonymous > 0) {
            try {
                const response = await postPledge(
                    amount,
                    comment,
                    anonymous,
                    projectId,
                );
                alert("Your GemSession has been created.");
                console.log("Project response:", response);

                setPledgeData({
                    amount: "",
                    comment: "",
                    anonymous: 0,
                });
                navigate(`/project/${response.id}`);
            } catch (error) {
                console.error("Error during pledging", error.message);
            }
        } else {
            alert(
                "Please complete all required fields (amount, comment, and anonymous)."
            );
        }
    };
    return (
        <form onSubmit={handleSubmit} className="pledge-form">
            <div className="form-group">
                <label htmlFor="amount">Amount:</label>
                <input
                    type="number"
                    id="amount"
                    placeholder="What are you offering? e.g. 30mins of Python one-on-one"
                    value={pledgeData.amount}
                    onChange={handleChange}
                    min="1"
                    className="form-input"
                />
            </div>
            <div className="form-group">
                <label htmlFor="comment">Comment:</label>
                <textarea
                    id="comment"
                    placeholder="Let's-a go!"
                    value={pledgeData.comment}
                    onChange={handleChange}
                    className="form-input"
                    rows="4"
                />
            </div>
            <div className="form-group checkbox-group">
                <label htmlFor="anonymous" className="checkbox-label">
                    <input
                        type="checkbox"
                        id="anonymous"
                        checked={pledgeData.anonymous}
                        onChange={handleChange}
                        className="checkbox-input"
                    />
                    <span className="checkbox-text">Private</span>
                </label>
            </div>
            
            <button type="submit" className="submit-button">Create Pledge</button>
        </form>
    );
}
export default PledgeForm;
