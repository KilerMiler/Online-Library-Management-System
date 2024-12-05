import React from 'react';
import { Link } from 'react-router-dom';
import PdfCard from './PdfCard.js';
import SubjectCard from './SubjectCard.js'

const ThirdSemester = () => {
    return (
        <div>
            <h1 style={{ fontSize: '2rem', color: 'black', textAlign: 'center', marginBottom: '20px', backgroundColor: 'white' }}>
                Third Semester Books
            </h1>
            <Link to="/" style={{ color: 'white' }}>Go Back</Link>
            <SubjectCard semester="ThirdSemester" title="Computer Organization & Architecture" />
            <SubjectCard semester="ThirdSemester" title="Data Structure" />
            <SubjectCard semester="ThirdSemester" title="Discrete Structures and Theory of Logic" />
            <SubjectCard semester="ThirdSemester" title="Maths-4" />
            <SubjectCard semester="ThirdSemester" title="Python Programming" />
            <SubjectCard semester="ThirdSemester" title="Universal Human Value & Professional Ethics" />
        </div>
    );
};

export default ThirdSemester;