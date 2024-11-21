import { oneProject } from "../data";

function ProjectPage() {
    return (
    <div>
        <h2>{oneProject.title}</h2>
        <h3>Created at: {oneProject.date_created}</h3>
        <h3>`Status: ${oneProject.is_open}`</h3>
        <h3>Pledges:</h3>
        <ul>
            {oneProject.pledges.map((pledgesData, key) => {
                return (
                    <li key={key}>
                        {pledgesData.amount} from {pledgesData.supporter}
                    </li>
                );
            })}
        </ul>
    </div>
    );
}

export default ProjectPage;