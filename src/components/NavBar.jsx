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
            <nav style={{ 
                display: 'flex', 
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <div className="nav-links" style={{ gap: '20px', display: 'flex' }}>
                    <Link to="/DecidingPage">Home</Link>
                    <Link to="/create-project">Earn</Link>
                    <Link to="/projects">Burn</Link>
                </div>
                <div className="auth-link">
                    {auth.token ? (
                        <Link to="/login" onClick={handleLogout}>
                            Log Out
                        </Link>
                    ) : (
                        <Link to="/login">Login</Link>
                    )}
                </div>
            </nav>
            <Outlet />
        </div>
    );
}

export default NavBar;

