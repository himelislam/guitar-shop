import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product'
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])
    useEffect(()=>{
        fetch('fakedb.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    const  [cart, setCart] = useState([])
    const handleAddToCart = (product) => {
        const newProduct = [...cart , product]
        if(newProduct.length<5){  
            setCart(newProduct) 
        }
        else{
            alert('Cant Add Item more than 4')
        }
    }

    const randomCart = () =>{
        const existCart = cart;
        const randomcart = [existCart[Math.floor(Math.random() * existCart.length)]]
        setCart(randomcart)
    }

    const clearCart = () =>{
        const emptyCart = []
        setCart(emptyCart)
    }

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product 
                        key={product._id} 
                        product = {product}
                        handleAddToCart = {handleAddToCart}
                        ></Product> )
                }
            </div>
            <div className="cart-container">
                {
                  cart.map(product => <Cart key={product._id} product={product}></Cart>)  
                }
                <div className='cart-buttons'>
                    <button onClick={randomCart}>Choose One For Me</button>
                    <button onClick={clearCart}>Choose Again</button>
                </div>
            </div>
            
        </div>
    );
};

export default Shop;