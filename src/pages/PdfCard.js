import React, { useEffect, useRef } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';

const PdfCard = () => {
    const pdfViewerRef = useRef(null);
    const navigate = useNavigate();
    const { semester, subject } = useParams();

    useEffect(() => {
        // Use the Google Drive link for the PDF
        const pdfSrc = 'https://drive.google.com/file/d/1TJgmiJw7Oy9QNf-e9YmTVcKtXbLFD4cp/preview';

        // Set the iframe src to the PDF link
        const iframe = pdfViewerRef.current;
        iframe.src = pdfSrc;
    }, [semester, subject]);

    return (
        <div>
            {/* Use an iframe to display the PDF */}
            <Link to="/" style={{ color: 'white' }}>Go Back</Link>
            <iframe
                ref={pdfViewerRef}
                title="PDF Viewer"
                width="100%"
                height="700px"
                frameBorder="0"
                allowFullScreen
            >
                Loading PDF...
            </iframe>
        </div>
    );
};

export default PdfCard;
