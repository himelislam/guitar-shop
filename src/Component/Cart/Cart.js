import React from 'react';
import './Cart.css'

const Cart = (props) => {
    return (
        <div>
            <div className='cart'>
                <img src={props.product.img} alt="" />
                <h2>{props.product.name}</h2>
            </div>
        </div>
    );
};

export default Cart;