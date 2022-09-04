import React from 'react';
import {data} from '../../data';
import {toCurrency} from '../../utilits/currency';

export function Footer() {
    let spendings = data.map(date => date.amount);
    let sum = spendings.reduce((amount, sum) => sum += amount, 0);

    return (
        <div className='container footer-wrapper'>
            <div className='sum-wrapper'>
                <h2>Total this week</h2> 
                <p>{toCurrency(sum)}</p>
            </div>
            <div className='month-wrapper'>
                <p className='month-count'>+2.4%</p> 
                <p>from last month</p>
            </div>
        </div>
    )
}