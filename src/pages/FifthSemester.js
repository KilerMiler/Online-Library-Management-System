import React from 'react';
import { Link } from 'react-router-dom';
import PdfCard from './PdfCard.js';
import SubjectCard from './SubjectCard.js'

const FifthSemester = () => {
    return (
        <div>
            <h1 style={{ fontSize: '2rem', color: 'black', textAlign: 'center', marginBottom: '20px', backgroundColor: 'white' }}>
                Fifth Semester Books
            </h1>
            <Link to="/" style={{ color: 'white' }}>Go Back</Link>
            <SubjectCard semester="FifthSemester" title="Data Analytics" />
            <SubjectCard semester="FifthSemester" title="Database Management System" />
            <SubjectCard semester="FifthSemester" title="Design and Analysis of Algorithm" />
            <SubjectCard semester="FifthSemester" title="Machine Learning Techniques" />
            <SubjectCard semester="FifthSemester" title="Web Designing and Development" />
        </div>
    );
};

export default FifthSemester; 