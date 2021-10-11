import React from 'react';
import '../styles/Button.css';

const Button = ({style, active, onClick, children}) => {
    return (
        <button
            style={style}
            className={active ? 'active' : undefined}
            onClick={() => onClick()}
        >
            {children}
        </button>
    );
};

export default Button;