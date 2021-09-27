import React from 'react';
import {Link} from 'react-router-dom';
import naira from './../assets/naira.png'
import Navbar from './Navbar';

const Payment = () => {
    return (
        <div>
            <Navbar></Navbar>

            <div className="payment">

                <div className="info1">
                    <div className='item1'>Item Name</div>
                    <div className='item2'>
                        <img src={naira}
                        alt="naira"
                        className='image'/>Price</div>
                </div>
                <div className="info2">
                    <div>Data Science and usability</div>
                    <div>50,000.00</div>
                </div>
                <div className="info3">
                    <div>Shipping</div>
                    <div className='black'>0.00</div>
                </div>
                <hr />
                <div className="info4">
                    <div>Total</div>
                    <div>50,000.00</div>
                </div>

            </div>
            <div className='buttons'>
                <button className='button1'>
                    <Link to={'/success'}>
                        Pay
                    </Link>
                </button>
                <button className='button2'>
                    Cancel Payment
                </button>
            </div>
        </div>
    )
}

export default Payment
