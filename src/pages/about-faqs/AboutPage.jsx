import { Button } from 'bootstrap';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const AboutPage = () => {
    const location = useLocation();
    const history = useNavigate();

    console.log('We are in Route:', location.pathname); 
    const navigate = (path) => {
        history.push(path)
    }

    const goBack = () => {
        history.goBack();
    }

    const goForward = () =>
        history.goForward


    return (
        <div>
            <h1>
                About | FAQs 
            </h1>
            <div>
                <button onClick={() => navigate ('/')}>
                    Go to Home
                </button>
                <Button onClick = { goBack }>
                    Go Back
                </Button>
                <button onClick ={ goForward }>
                    Go goForward
                </button>
            </div>
            
        </div>
    );
}

export default AboutPage;
