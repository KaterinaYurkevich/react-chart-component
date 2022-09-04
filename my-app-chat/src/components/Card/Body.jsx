import React from 'react';
import {data} from '../../data';
import { Card } from './components/Card';
import { Footer } from './Footer';

export function Body() {
    return (
        <div className='body'>
            <div className='container body-wrapper'>
                <h1>Spending - Last 7 days</h1>
                <div className='card'>
                    {Array.isArray(data) && data.map((date, index) => <Card key={index} {...date} />)}
                </div>
            </div>
            <Footer />
        </div>
    )
}