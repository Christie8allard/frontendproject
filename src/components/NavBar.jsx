import { Link, Outlet } from "react-router-dom";
import useAuth from "../hooks/use-auth";

function NavBar() {
    const { auth, setAuth } = useAuth();

    const handleLogout = () => {
        window.localStorage.removeItem("token");
        setAuth({ token: null });
    };

    return (
        <div>
            <nav>
                {/* Link to Home */}
                <Link to="/">Home</Link>

                {/* Conditional Rendering for Login/Logout */}
                {auth.token ? (
                    <Link to="/" onClick={handleLogout}>
                        Log Out
                    </Link>
                ) : (
                    <Link to="/login">Login</Link>
                )}
                {/* Link to Create Project */}
                <Link to="/create-project">Create Project</Link>
            </nav>
            <Outlet />
        </div>
    );
}

export default NavBar;
