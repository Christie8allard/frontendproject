import useProjects from "../hooks/use-projects";
import ProjectCard from "../components/ProjectCard";
import "../pages/HomePage.css";
import ErrorPage from "./ErrorPage";

function HomePage() {
    const { projects } = useProjects();
    // add a state/error
    if (projects.length > 0) {
        return (
            <div id="project-list">
                {projects.map((projectData, key) => {
                    return <ProjectCard key={key} projectData={projectData} />;
                })}
            </div>
        );
    }
    return ErrorPage

}

export default HomePage;