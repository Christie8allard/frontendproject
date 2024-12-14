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

        if (amount && comment) {
            try {
                const response = await postPledge(
                    amount,
                    comment,
                    anonymous,
                    projectId,
                );
                alert("You've pledged your Gems '.");
                console.log("Project response:", response);

                setPledgeData({
                    amount: "",
                    comment: "",
                    anonymous: false,
                });
                navigate(0);
            } catch (error) {
                console.error("Error during pledging", error.message);
            }
        } else {
            alert(
                "Please complete all required fields (amount & comment)."
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
                    placeholder="How many gems are you pledging?"
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
