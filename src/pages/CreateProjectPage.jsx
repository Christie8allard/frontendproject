import ProjectForm from "../components/ProjectForm";
import "./CreateProjectPage.css";

function CreateProjectPage() {
    return (
        <div className="create-project-container">
            <div className="create-project-content">
                <div className="create-project-copy">
                    <h1>Create a GemSession</h1>
                    <p>Your knowledge has value. Create a project offering your time and knowledge and be rewarded in Gems.</p>
                </div>
                <div className="create-project-left">
                    <div className="form-wrapper">
                        <ProjectForm />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateProjectPage;
