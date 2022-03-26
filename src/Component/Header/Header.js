import React from 'react';
import './Header.css'
import {GiGuitarBassHead} from 'react-icons/gi'

const Header = () => {
    return (
        <div className='header'>
            <h1><GiGuitarBassHead></GiGuitarBassHead> Guiter Shop</h1>
            <p>Magical moments start with music.</p>
        </div>
    );
};

export default Header;