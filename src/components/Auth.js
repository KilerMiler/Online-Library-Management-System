// src/components/Auth.js
import React, { useState } from 'react';
import axios from 'axios';

const Auth = ({ setIsAuthenticated }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
    try {
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/auth/login`, { username, password });
        localStorage.setItem('token', response.data.token);
        setIsAuthenticated(true);
    } catch (error) {
        console.error('Login failed', error);
    }
};

return (
    <div>
        <h2>Login</h2>
        <label>
            Username:
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
            Password:
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button onClick={handleLogin}>Login</button>
    </div>
);
};

export default Auth;