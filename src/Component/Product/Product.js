import React from 'react';
import './Product.css'

const Product = (props) => {
    console.log(props)
    return (
        <div className='product'>
            <h2>Name{props.product.name}</h2>
            <h4>Price:{props.product.price}</h4>
            <img src={props.product.img} alt="" />
        </div>
    );
};

export default Product;