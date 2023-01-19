import React from 'react';
import { useNavigate, useLocation } from 'react-router'

const HomePage = () => {
    const location = useLocation();
    const history = useNavigate();

    console.log('We are in Route:', location.pathname); 
    const navigate = (path) => {
        history.push(path)
    }

   

    return (
        <div>
           <h1>Home Page</h1> 
           <button onClick={() => navigate('/profile')}>
            Go To Profile
           </button>
           <button onClick={() => navigate(-1)}>
                Go Back
           </button>
           <button onClick={() => navigate(1)}>
                Go Forward
           </button>
        </div>
    );
}

export default HomePage;
