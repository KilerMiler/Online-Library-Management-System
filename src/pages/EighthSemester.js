import React from 'react';
import { Link } from 'react-router-dom';
import PdfCard from './PdfCard.js';
import SubjectCard from './SubjectCard.js'

const EighthSemester = () => {
    return (
        <div>
            <h1 style={{ fontSize: '2rem', color: 'black', textAlign: 'center', marginBottom: '20px', backgroundColor: 'white' }}>
                Eighth Semester Books
            </h1>
            <Link to="/" style={{ color: 'white' }}>Go Back</Link>
            <SubjectCard semester="EighthSemester" title="Automation & Robotics" />
            <SubjectCard semester="EighthSemester" title="Cloud Computing" />
            <SubjectCard semester="EighthSemester" title="Project Management & Entrepreneurship" />
        </div>
    );
};

export default EighthSemester; 