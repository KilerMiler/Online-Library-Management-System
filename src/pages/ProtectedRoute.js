// src/pages/ProtectedRoute.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProtectedRoute = () => {
const [message, setMessage] = useState('');

useEffect(() => {
    const fetchData = async () => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/protected`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        });
        setMessage(response.data.message);
    } catch (error) {
        console.error('Protected route failed', error);
        setMessage('Authentication failed');
    }
    };

    fetchData();
}, []);

return (
    <div>
        <h2>Protected Route</h2>
        <p>{message}</p>
    </div>
);
};

export default ProtectedRoute;