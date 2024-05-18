import React from 'react';

import './style/index.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <div className='header header__container--light'>
            <div className='header__icon'>
                <img src='/icons/ret-2.jfif' alt='icon' height={"100%"}/>
            </div>
            <div className='header__container-buttons'>
                <div className='header__container-button'>
                    <Link to="/home">Home</Link>
                </div>
                <div className='header__container-button'>
                    <Link to="login">Login</Link>
                </div>
                <div className='header__container-button'>
                    <Link to="contact">Contact</Link>
                </div>
            </div>
        </div>
    );
};

export {Header};