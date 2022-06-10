import React from 'react';
import img from './notfound.png'

const Error = () => {
    return (
        <div>
            <img className="mx-auto my-20" src={img} alt="not found"/>
        </div>
    );
};

export default Error;