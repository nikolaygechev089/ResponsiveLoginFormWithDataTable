import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [username, setUsername] = useState({ value: "", error: "" });
    const [password, setPassword] = useState({ value: "", error: "" });
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        if (validateForm()) {
            navigate("/table");
        }
    };

    const validateForm = () => {
        return (
            username.length >= 4 &&
            username.length <= 30 &&
            password.length >= 4 &&
            password.length <= 30
        );
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <div>
                    <label>Username:</label>
                    <input
                        type="text"
                        value={username.value}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password.value}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" disabled={!validateForm()}>
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;