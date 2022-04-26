import React, { useState } from 'react';
import useTshirts from '../../hooks/useTshirt';
import './Home.css'
import Cart from '../Cart/Cart';
import Tshirt from '../Tshirt/Tshirt';

const Home = () => {
    const [tshits, setTshits] = useTshirts();
    const [cart, setCart] = useState([]);

    const handeleAddToCart = (selectedItem) => {
        const exists = cart.find(tshirt => tshirt._id === selectedItem._id);
        if (!exists) {
            const newCart = [...cart, selectedItem];
            setCart(newCart);
        }
        else {
            alert('item olredy added')
        }

    }
    const handleRemoveFromCart = (selectedItem) => {
        const rest = cart.filter(tshirt => tshirt._id !== selectedItem._id);
        setCart(rest);
    }
    return (
        <div className='home-container'>

            <div className="tshirt-container">
                {
                    tshits.map(tshirt => <Tshirt
                        key={tshirt._id}
                        handeleAddToCart={handeleAddToCart}
                        tshirt={tshirt}></Tshirt>)
                }
            </div>
            <div className="cart-container">
                <Cart
                    handleRemoveFromCart={handleRemoveFromCart}
                    cart={cart}></Cart>
            </div>

        </div>
    );
};

export default Home;