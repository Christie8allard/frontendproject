async function postPledge(amount, comment, isAnonymous, projectId) {
    const url = `${import.meta.env.VITE_API_URL}/pledges/`;
    const token = window.localStorage.getItem("token");
    console.log(token)
    
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
        },
        body: JSON.stringify({
            amount: amount,
            comment: comment,
            anonymous: isAnonymous,
            project: projectId,
            supporter: 1
        }),
    });
    
    if (!response.ok) {
        const fallbackError = `Error creating a pledge`;
        
        const data = await response.json().catch(() => {
            throw new Error(fallbackError);
        });
        
        const errorMessage = data?.detail ?? fallbackError;
        throw new Error(errorMessage);
    }
    
    return await response.json();
}

export default postPledge;
