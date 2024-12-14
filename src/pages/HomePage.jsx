import useProjects from "../hooks/use-projects";
import ProjectCard from "../components/ProjectCard";
import "../pages/HomePage.css";
import { Link } from "react-router-dom";
import ErrorCard from "../components/ErrorCard";

function HomePage() {
    const { projects, isLoading, error } = useProjects();
    // add a state/error
    if (isLoading) {
        return (<p>loading...</p>)
        
    }
// let fakeerror = true, and change Error below to fakeerror to test
    if (error) {
        return <ErrorCard />
    }

    if (projects.length > 0) {
        return (
            <div>
            <div id="project-list">
                {projects.sort((a, b) => b.id - a.id).map((projectData, key) => {
                    return <ProjectCard key={key} projectData={projectData} />;
                })}
            </div>
            <Link to="/create-project">Create project</Link>
            </div>
        );
    }
    return <div>no projects to show</div>

}

export default HomePage;