import React, {useState} from 'react';
import {toCurrency} from '../../../utilits/currency';
import { maxAmount } from '../../../utilits/maxAmount'; 

export function Card (props) {
    const { day, amount } = props;
    const heightNum = amount * 3;
    const max = maxAmount();

    const [divClassName, setDivClassName] = useState("amount-wrapper hidden");

    const handleMouseEnter = (e) => {
        setDivClassName("amount-wrapper")
       }
            
    const handleMouseLeave = (e) => {
        setDivClassName("amount-wrapper hidden")
    }
     
    return (
        <div className='card-wrapper'>
            <h3 className="card_title">{day}</h3>
            <div className={`card_body ${amount === max ? 'amount-biggest' : ''}`} style={{height: heightNum}} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            </div>
            <div className={divClassName}>
                {divClassName === "amount-wrapper" ? <p>{toCurrency(amount)}</p> : <p></p>}
            </div>
        </div>
    )
  }