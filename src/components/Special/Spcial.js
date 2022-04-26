import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Spcial = () => {
    const ring = useContext(RingContext)
    return (
        <div>
            <p>spcial</p>
            <p><small>Gift:{ring}</small></p>
        </div>
    );
};

export default Spcial;