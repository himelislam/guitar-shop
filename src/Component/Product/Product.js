import React from 'react';
import './Product.css'
import {BsCart4} from 'react-icons/bs'

const Product = ({product, handleAddToCart}) => {
    const {img, name, price} = product
    return (
        <div className='product'>
            <div>
            <img src={img} alt="" />
            </div>
            <div className='product-info'>
            <h2>{name}</h2>
            <h4>Price: ${price}</h4>
            </div>
            <div className='product-btn'>
                <button onClick={()=>handleAddToCart(product)} >Add To Cart<BsCart4 className='icon'/></button>
            </div>
        </div>
    );
};

export default Product;