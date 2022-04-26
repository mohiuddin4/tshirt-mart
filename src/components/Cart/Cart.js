import React from 'react';
import './Cart.css'

const Cart = ({ cart, handleRemoveFromCart }) => {
    //conditional rendaring
    //1.element variable
    //2.ternary oparetor
    //3.&& oparetor
    //4.|| oparetor
    let command;
    if (cart.length === 0) {
        command = <div>
            <h1>oh kipta koroch kor</h1>
            <p>kinek kisu</p>
        </div>
    }
    else if (cart.length === 1) {
        command = <p>please add more...</p>
    }
    else {
        <p>thanks for adding...</p>
    }
    return (
        <div>
            <h2>item selecteda:{cart.length}</h2>
            {
                cart.map(tshirt =>
                    <p>{tshirt.name}
                        <button onClick={() => handleRemoveFromCart(tshirt)}>X</button>
                    </p>)
            }
            {cart.length === 0 || <p className='orange'> Yay !! you are buying</p>}
            {cart.length === 3 && <div className='orange'>
                <h3>thregonal</h3>
                <p>3 jon ke ki gift dila</p>
            </div>}
            {command}
            {cart.length !== 4 ? <p>keep adding</p> : <button>remove</button>}
            {cart.length === 4 && <button className='orange'>review all</button>}
        </div>
    );
};

export default Cart;