import { useState } from 'react';
import LoginForm from "../components/LoginForm";
import SignupForm from "../components/SignupForm";
import './LoginPage.css';

function LoginPage() {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <div className="login-container">
            <div className="login-left">
                <div className="login-copy">
                    <h1>Gemtime</h1>
                    <p>Earn. Exchange. Elevate.</p>
                    <p>Share your skills to gain Gems and exchange them for time with senior leadership.</p> 
                    
                </div>
            </div>
            <div className="login-right">
                <div className="login-form">
                    <div className="form-tabs">
                        <button 
                            className={`tab ${isLogin ? 'active' : ''}`}
                            onClick={() => setIsLogin(true)}
                        >
                            Login
                        </button>
                        <button 
                            className={`tab ${!isLogin ? 'active' : ''}`}
                            onClick={() => setIsLogin(false)}
                        >
                            Sign Up
                        </button>
                    </div>
                    {isLogin ? <LoginForm /> : <SignupForm />}
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
