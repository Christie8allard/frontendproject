import { useState } from "react";
import { useNavigate } from "react-router-dom";
import postUser from "../api/post-user";

function SignupForm() {
    const navigate = useNavigate();

    const [credentials, setCredentials] = useState({
        username: "",
        password: "",
        email:"",
        first_name:"",
        last_name: "",
    });

    const handleChange = (event) => {
            const { id, value } = event.target;
            setCredentials((prevCredentials) => ({
                ...prevCredentials,
                [id]: value,
            }));
        };

const handleSubmit = (event) => {
    event.preventDefault();
    if (credentials.username && credentials.password) {
        postUser(
            credentials.username,
            credentials.password,
            credentials.email,
            credentials.first_name,
            credentials.last_name,
        ).then((response) => {
            window.localStorage.setItem("token", response.token);
            console.log("token", response.token);
            navigate("/");
        });
    }
}

    return (
        <form>
            <div>
                <label htmlFor="username">Username:</label>
                <input 
                    type="text"
                    id="username"
                    placeholder="Enter username"
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input 
                    type="password"
                    id="password"
                    placeholder="Password"
                    onChange={handleChange}
                />
            </div>
            <div>
            <label htmlFor="email">Email:</label>
                <input 
                    type="email"
                    id="email"
                    placeholder="email"
                    onChange={handleChange}
                    />
            </div>
        
            <button type="submit" onClick={handleSubmit}>
                Sign up
            </button>
        </form>
    );
}

export default SignupForm