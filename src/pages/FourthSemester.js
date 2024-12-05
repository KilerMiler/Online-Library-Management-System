import React from 'react';
import { Link } from 'react-router-dom';
import PdfCard from './PdfCard.js';
import SubjectCard from './SubjectCard.js'

const FourthSemester = () => {
    return (
        <div>
            <h1 style={{ fontSize: '2rem', color: 'black', textAlign: 'center', marginBottom: '20px', backgroundColor: 'white' }}>
                Fourth Semester Books
            </h1>
            <Link to="/" style={{ color: 'white' }}>Go Back</Link>
            <SubjectCard semester="FourthSemester" title="Cybersecurity" />
            <SubjectCard semester="FourthSemester" title="Digital Electronics" />
            <SubjectCard semester="FourthSemester" title="Object Oriented Programming with Java" />
            <SubjectCard semester="FourthSemester" title="Operating System" />
            <SubjectCard semester="FourthSemester" title="Technical Communication" />
            <SubjectCard semester="FourthSemester" title="Theory of Automata and Formal Languages" />
        </div>
    );
};

export default FourthSemester; 