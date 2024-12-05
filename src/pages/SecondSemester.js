import React from 'react';
import { Link } from 'react-router-dom';
import PdfCard from './PdfCard.js'; 
import SubjectCard from './SubjectCard.js';

const SecondSemester = () => {
    return (
        <div>
            <h1 style={{ fontSize: '2rem', color: 'black', textAlign: 'center', marginBottom: '20px', backgroundColor: 'white' }}>
                Second Semester Books
            </h1>
            <Link to="/" style={{ color: 'white' }}>Go Back</Link>
            <SubjectCard semester="SecondSemester" title="Chemistry" />
            <SubjectCard semester="SecondSemester" title="Maths-2" />
            <SubjectCard semester="SecondSemester" title="Fundamentals of Electronics Engineering" />
            <SubjectCard semester="SecondSemester" title="Fundamentals of Mechanical Engineering" />
        </div>
    );
};

export default SecondSemester;