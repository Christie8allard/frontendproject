import ProjectForm from "../components/ProjectForm";
import "./CreateProjectPage.css";

function CreateProjectPage() {
    return (
        <div className="create-project-container">
            <h1>Create New Project</h1>
            <div className="form-wrapper">
                <ProjectForm />
            </div>
        </div>
    );
}

export default CreateProjectPage;