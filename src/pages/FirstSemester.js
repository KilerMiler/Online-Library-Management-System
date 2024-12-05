import React from 'react';
import { Link } from 'react-router-dom';
import PdfCard from './PdfCard.js';
import SubjectCard from './SubjectCard.js'

const FirstSemester = () => {
    return (
        <div>
            <h1 style={{ fontSize: '2rem', color: 'black', textAlign: 'center', marginBottom: '20px', backgroundColor: 'white' }}>
                First Semester Books
            </h1>
            <Link to="/" style={{ color: 'white' }}>Go Back</Link>
            <SubjectCard semester="FirstSemester" title="Physics" />
            <SubjectCard semester="FirstSemester" title="Maths-1" />
            <SubjectCard semester="FirstSemester" title="Fundamentals of Electrical Engineering" />
            <SubjectCard semester="FirstSemester" title="Programming for Problem Solving" />
            <SubjectCard semester="FirstSemester" title="Environment & Ecology" />
        </div>
    );
};

export default FirstSemester;