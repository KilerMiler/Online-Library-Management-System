import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PdfCard from './PdfCard';

const SubjectCard = ({ semester, title }) => {
    const navigate = useNavigate();
    const [isClicked, setIsClicked] = useState(false);
    const [textColor, setTextColor] = useState('#000000');

    const handleClick = () => {
        navigate(`/${semester}/${title}`);
        setIsClicked(!isClicked);
        setTextColor('#800080');
    };

    const style = {
        cardContainer: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
        },
        card: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
            border: '1px solid #ccc',
            borderRadius: '8px',
            margin: '10px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
            backgroundColor: '#B7E1A1',
            maxWidth: '600px',
            flex: '0 0 45%',
            marginBottom: '10px',
        },
    };

    return (     
        <div style={style.cardContainer}>
            <div className="subject-card" onClick={handleClick} style={style.card}>
                <h3 style={{ color: textColor }}>{title}</h3>
                {isClicked && <PdfCard semester={semester} subject={title} />}           
            </div>
        </div>
    );
};

export default SubjectCard;
