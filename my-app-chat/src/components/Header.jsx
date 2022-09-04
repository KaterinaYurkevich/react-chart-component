import React from 'react';
import logo from '../images/logo.svg';
import {toCurrency} from '../utilits/currency';

export function Header() {
    return (
        <div className='header'>
            <div className='container header-wrapper'>
            <div>
                <h2>My balance</h2>
                <p>{toCurrency(921.48)}</p>
            </div>
            <img src={logo} className="logo" alt="logo" width="80px" />
            </div>
        </div>
    )
}