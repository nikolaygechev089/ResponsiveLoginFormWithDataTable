import React, { useState, useEffect } from 'react';
import Input from './Input';
import Layout from './Layout';
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [submitDisabled, setSubmitDisabled] = useState(false);
    const navigate = useNavigate();


    useEffect(() => {
        // Update the document title using the browser API
        setSubmitDisabled(false)
    }, [username, password]);

    const validateForm = () => {
        const newErrors = {};

        if (username.length < 4 || username.length > 30) {
            newErrors.username = 'Between 4 and 30 characters!';
        }

        if (password.length < 4 || password.length > 30) {
            newErrors.password = 'Between 4 and 30 characters!';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0; // Връща true, ако няма грешки
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            console.log('Form data:', { username, password });
            navigate("/table");
        } else {
            console.log('Form has errors');
            setSubmitDisabled(true);

        }
    };

    return (
        <Layout>
            <div className="flex justify-center items-center bg-opacity-0">
                <div className="bg-white p-8 rounded-lg shadow-md max-w-md">
                    <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
                    <form onSubmit={handleSubmit}>
                        {/* Поле за потребителско име */}
                        <Input
                            className=""
                            label="Username"
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            error={errors.username}
                        />

                        {/* Поле за парола */}
                        <Input
                            label="Password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            error={errors.password}
                        />

                        {/* Бутон за изпращане */}
                        <button
                            type="submit"
                            className={`w-full py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 ${submitDisabled
                                ? "bg-gray-400 text-gray-700 cursor-not-allowed" // Стилове за disabled състояние
                                : "bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-500" // Стилове за активно състояние
                                }`}
                            disabled={submitDisabled}
                        >
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </Layout>
    );
};

export default LoginForm;