import React from 'react';
import { Link } from 'react-router-dom';
import PdfCard from './PdfCard.js';
import SubjectCard from './SubjectCard.js'

const SeventhSemester = () => {
    return (
        <div>
            <h1 style={{ fontSize: '2rem', color: 'black', textAlign: 'center', marginBottom: '20px', backgroundColor: 'white' }}>
                Seventh Semester Books
            </h1>
            <Link to="/" style={{ color: 'white' }}>Go Back</Link>
            <SubjectCard semester="SeventhSemester" title="Artificial Intelligence" />
            <SubjectCard semester="SeventhSemester" title="Deep Learning" />
            <SubjectCard semester="SeventhSemester" title="Machine Learnng" />
            <SubjectCard semester="SeventhSemester" title="Renewable Energy Resources" />
        </div>
    );
};

export default SeventhSemester; 