import React from 'react';
import '../styles/Loader.css';

const Loader = () => {
    return (
        <svg height="100" width="100" className="loader">
            <circle cx="50" cy="50" r="40" />
        </svg>
    );
};

export default Loader;