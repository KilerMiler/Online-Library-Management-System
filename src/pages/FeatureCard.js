import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FeatureCard = ({ title, to }) => {
    const navigate = useNavigate();
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        navigate(to);
        setIsClicked(true);
    };

    return (
        <div
            className="feature"
            onClick={handleClick}
            style={{
                padding: '20px',
                border: '1px solid #ccc',
                borderRadius: '8px',
                margin: '10px',
                cursor: 'pointer',
                transition: 'background-color 0.3s ease',
                backgroundColor: isClicked ? '#7A687F' : '#B7E1A1', 
            }}>
            <h2>{title}</h2>
        </div>
    );
};

export default FeatureCard;
