async function  getProjects() {

    const url = `${import.meta.env.VITE_API_URL}/projects`;

    const response = await fetch(url, { meothod: "GET" });

if (!response.ok) {
    const fallbackError = "Error fetching projects";

    const data = await response.json().catch(() => {
        throw new Error(fallbackError);
    });

    const errorMessage = data?.detail ?? fallbackError;
    throw new Error(errorMessage);
    }

    return await response.json();

}

export default getProjects;