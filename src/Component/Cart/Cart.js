import React from 'react';
import './Cart.css'

const Cart = ({product}) => {
    const {img, name} = product
    return (
        <div>
            <div className='cart'>
                <img src={img} alt="" />
                <h2>{name}</h2>
            </div>
        </div>
    );
};

export default Cart;