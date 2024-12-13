import { useState } from "react";
import postProject from "../api/post-project.js";
import { useNavigate } from "react-router-dom";
import './ProjectForm.css';

function ProjectForm() {
    const navigate = useNavigate();
    const [projectData, setProjectData] = useState({
        title: "",
        description: "",
        goal: 0,
        isOpen: true,
        dateCreated: "",
    });
    const handleChange = (event) => {
        const { id, value, type, checked } = event.target;
        setProjectData((prevProjectData) => ({
            ...prevProjectData,
            [id]: type === "checkbox" ? checked : value,
        }));
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        const dateCreated = new Date()
        const { title, description, goal, isOpen } = projectData;
        console.log("Final Data: ", dateCreated, projectData)

        if (title && description && goal > 0) {
            try {
                const response = await postProject(
                    title,
                    description,
                    goal,
                    isOpen,
                    dateCreated
                );
                alert("Your GemSession has been created.");
                console.log("Project response:", response);

                setProjectData({
                    title: "",
                    description: "",
                    goal: 0,
                    isOpen: true,
                    dateCreated: "",
                });
                navigate(`/projects/${response.id}`);
            } catch (error) {
                console.error("Error during project creation:", error.message);
            }
        } else {
            alert(
                "Please complete all required fields (title, description, and goal)."
            );
        }
    };
    return (
        <div className="project-form-container">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Title:</label>
                    <input
                        type="text"
                        id="title"
                        placeholder="e.g. 30mins of Python one-on-one"
                        value={projectData.title}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <textarea
                        id="description"
                        placeholder="Let's get to know you. Tell us who you are, and some of the details."
                        value={projectData.description}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="goal">Goal:</label>
                    <input
                        type="number"
                        id="goal"
                        placeholder="Enter funding goal"
                        value={projectData.goal}
                        onChange={handleChange}
                        min="1"
                    />
                </div>
                <div className="form-group checkbox-group">
                    <label htmlFor="isOpen">
                        <input
                            type="checkbox"
                            id="isOpen"
                            checked={projectData.isOpen}
                            onChange={handleChange}
                        />
                        Project is open for pledges
                    </label>
                </div>
                <button type="submit">Create Project</button>
            </form>
        </div>
    );
}
export default ProjectForm;
