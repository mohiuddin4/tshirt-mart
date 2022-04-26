import React from 'react';
import Spcial from '../Special/Spcial';

const Myself = ({ house, ornament }) => {
    return (
        <div>
            <h4>Me</h4>
            <p>{house}</p>
            <Spcial ></Spcial>
        </div>
    );
};

export default Myself;