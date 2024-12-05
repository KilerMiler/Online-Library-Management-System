import React from 'react';
import { Link } from 'react-router-dom';
import PdfCard from './PdfCard.js';
import SubjectCard from './SubjectCard.js'

const SixthSemester = () => {
    return (
        <div>
            <h1 style={{ fontSize: '2rem', color: 'black', textAlign: 'center', marginBottom: '20px', backgroundColor: 'white' }}>
                Sixth Semester Books
            </h1>
            <Link to="/" style={{ color: 'white' }}>Go Back</Link>
            <SubjectCard semester="SixthSemester" title="Augmented & Virtual Reality" />
            <SubjectCard semester="SixthSemester" title="Big Data" />
            <SubjectCard semester="SixthSemester" title="Computer Networks" />
            <SubjectCard semester="SixthSemester" title="Embedded Systems" />
            <SubjectCard semester="SixthSemester" title="Web Technology" />
        </div>
    );
};

export default SixthSemester; 