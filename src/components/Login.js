import React from 'react';
import { googleLogin } from '../api';
import { setAuthToken } from '../utils/auth';
import '../styles/Login.css';

const Login = () => {
    const handleLogin = async () => {
        try {
            const redirectUrl = ${window.location.origin}/onebox;
            const data = await googleLogin(redirectUrl);
            if (data.token) {
                setAuthToken(data.token);
                window.location.href = '/onebox';
            }
        } catch (error) {
            console.error('Login failed', error);
        }
    };

    return (
        <div className="login-container">
            <button onClick={handleLogin} className="login-button">
                Login with Google
            </button>
        </div>
    );
};

export default Login;