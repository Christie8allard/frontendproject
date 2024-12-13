import ProjectForm from "../components/ProjectForm";
import "./CreateProjectPage.css";

function CreateProjectPage() {
    return (
        <div className="create-project-container">
            <div className="create-project-content">
                <div className="create-project-left">
                    <div className="form-wrapper">
                        <ProjectForm />
                    </div>
                </div>
                <div className="create-project-right">
                    <div className="create-project-copy">
                        <h1>Create a GemSession</h1>
                        <p>Your knowledge has value, create a project offering your time and knowledge and be rewarded</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateProjectPage;