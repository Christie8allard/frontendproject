import { useState } from "react";
// import postProject from "../api/post-project.js";

function ProjectForm() {
    const [projectData, setProjectData] = useState({
        title: "",
        description: "",
        goal: 0,
        image: "/images/bluegem.jpg",
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
        const { title, description, goal, image, isOpen } = projectData;
        console.log("Final Data: ", dateCreated, projectData)

        if (title && description && goal > 0) {
            try {
                const response = await postProject(
                    title,
                    description,
                    goal,
                    image,
                    isOpen,
                    dateCreated
                );
                alert("Your GemSession has been created.");
                console.log("Project response:", response);

                setProjectData({
                    title: "",
                    description: "",
                    goal: 0,
                    image: "/images/bluegem.jpg",
                    isOpen: true,
                    dateCreated: "",
                });
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
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">Title:</label>
                <input
                    type="text"
                    id="title"
                    placeholder="What are you offering? e.g. 30mins of Python one-on-one"
                    value={projectData.title}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="description">Description:</label>
                <textarea
                    id="description"
                    placeholder="Tell us who you are, and some of the details"
                    value={projectData.description}
                    onChange={handleChange}
                />
            </div>
            <div>
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
            <div>
                <div>
                    <label>Image:</label>
                    <img
                        src={projectData.image} // The preloaded image path
                        alt="Project preview"
                        style={{
                            maxWidth: "100px",
                            display: "block",
                            marginTop: "10px",
                        }}
                    />
                </div>
            </div>
            <div>
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
    );
}
export default ProjectForm;
