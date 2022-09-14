import React from 'react';

const Square = ({value, onClick, className}) => {

    return (
        <div className={`squares ${className}`} onClick={onClick}>
            {value}
        </div>
    );
};

export default Square;
