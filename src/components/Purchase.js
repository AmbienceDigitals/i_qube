import React from 'react';
import { Link } from 'react-router-dom';
import check from './../assets/tick.png'


const Purchase = () => {
    return (
        <div className='success'>
            <div className='purchase'>
            <img src={check}
                alt="check mark"
                className='check'/>
                <h1>Purchase Completed</h1>
                <p>Please check your email for details concerning this transaction</p>
                <Link to='/'> Return Home</Link>
            </div>
        </div>
    )
}

export default Purchase
