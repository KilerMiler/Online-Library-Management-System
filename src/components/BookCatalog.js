// src/components/BookCatalog.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BookCatalog = () => {
const [books, setBooks] = useState([]);

useEffect(() => {
    const fetchData = async () => {
        try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/books`);
        setBooks(response.data);
        } 
        catch (error) {
            console.error('Failed to fetch books', error);
        }
    };

    fetchData();
}, []);

return (
    <div>
        <h2>Book Catalog</h2>
        <ul>
            {books.map((book) => (
            <li key={book.id}>{book.title}</li>
        ))}
        </ul>
    </div>
);
};

export default BookCatalog;