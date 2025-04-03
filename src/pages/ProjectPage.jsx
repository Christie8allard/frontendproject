import { useParams } from "react-router-dom";
import useProject from "../hooks/use-project";
import ErrorCard from "../components/ErrorCard";
import PledgeForm from "../components/PledgeForm";

<div className="projects-header">
    <h1>Discover Projects</h1>
    <p className="projects-description">
        Browse through our collection of innovative projects seeking support...
    </p>
</div>



function ProjectPage() {
    const { id } = useParams();
    const { project, isLoading, error } = useProject(id);
    if (isLoading) {
        return (<p>loading...</p>)
        
    }
// let fakeerror = true: and change Error below to fakeerror to test
    if (error) {
        return <ErrorCard />
    }
    return (
    <div>
        <h2>{project.title}</h2>
        <h3>Created at: {project.date_created}</h3>
        <h3>{`Status: ${project.is_open}`}</h3>
        <h3>Pledges:</h3>
        <ul>
            {project.pledges.map((pledgeData, key) => {
                return (
                    <li key={key}>
                        {pledgeData.amount} from {pledgeData.supporter} 
                        <div>{pledgeData.comment}</div>
                    </li>
                );
            })}
        </ul>
        <PledgeForm projectId={project.id}/>
    </div>
    );
}

export default ProjectPage;
