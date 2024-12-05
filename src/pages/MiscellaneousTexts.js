import React from 'react';
import { Link } from 'react-router-dom';
import PdfCard from './PdfCard.js';
import SubjectCard from './SubjectCard.js'

const MiscellaneousTexts = () => {
    return (
        <div>
            <h1 style={{ fontSize: '2rem', color: 'black', textAlign: 'center', marginBottom: '20px', backgroundColor: 'white' }}>
                Miscellaneous Texts
            </h1>
            <Link to="/" style={{ color: 'white' }}>Go Back</Link>
            <SubjectCard semester="MiscellaneousTexts" title="A Tale of Two Cities" />
            <SubjectCard semester="MiscellaneousTexts" title="Alice's Adventures in Wonderland" />
            <SubjectCard semester="MiscellaneousTexts" title="Dracula" />
            <SubjectCard semester="MiscellaneousTexts" title="Frankenstein" />
            <SubjectCard semester="MiscellaneousTexts" title="The Adventures of Sherlock Holmes" />
            <SubjectCard semester="MiscellaneousTexts" title="The Picture of Dorian Gray" />
        </div>
    );
};

export default MiscellaneousTexts; 