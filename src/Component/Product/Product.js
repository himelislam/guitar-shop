import React from 'react';
import './Product.css'
import {BsCart4} from 'react-icons/bs'

const Product = (props) => {
    return (
        <div className='product'>
            <div>
            <img src={props.product.img} alt="" />
            </div>
            <div className='product-info'>
            <h2>Name{props.product.name}</h2>
            <h4>Price: ${props.product.price}</h4>
            </div>
            <div className='product-btn'>
                <button onClick={()=>props.handleAddToCart(props.product)} >Add To Cart<BsCart4 className='icon'/></button>
            </div>
        </div>
    );
};

export default Product;