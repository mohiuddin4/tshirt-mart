import React from 'react';
import './Tshirt.css'
const Tshirt = ({ handeleAddToCart, tshirt }) => {
    const { name, price, picture } = tshirt;
    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <h2>{name}</h2>
            <p>price:${price}</p>
            <button onClick={() => handeleAddToCart(tshirt)}>Add to Cart</button>
        </div>
    );
};

export default Tshirt;