// SignInPage.js
import React from 'react';
import SignInComponent from './SignInComponent';

const SignInPage = () => {
    return (
        <div style={{ textAlign: 'center', color: 'white' }}>
            <h1 style={{ marginTop: '100px' }}>Sign In to AKGEC</h1>
            <SignInComponent />
        </div>
    );
};

export default SignInPage;