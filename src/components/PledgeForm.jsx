
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import postPledge from "../api/post-pledge.js";
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
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="amount">amount:</label>
                <input
                    type="number"
                    id="amount"
                    placeholder="What are you offering? e.g. 30mins of Python one-on-one"
                    value={pledgeData.amount}
                    onChange={handleChange}
                    min="1"
                />
            </div>
            <div>
                <label htmlFor="comment">comment:</label>
                <textarea
                    id="comment"
                    placeholder="Tell us who you are, and some of the details"
                    value={pledgeData.comment}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="anonymous">anonymous:</label>
                <input
                    type="checkbox"
                    id="anonymous"
                    value={pledgeData.anonymous}
                    onChange={handleChange}
                />
                Private
            </div>
            
            <button type="submit">Create Pledge</button>
        </form>
    );
}
export default PledgeForm;
