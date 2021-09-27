import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Navbar from './Navbar';

import './../App.css';

const Billing = () => {
    const [nameOnCard, setNameOnCard] = useState('');
    const [cardType, setCardType] = useState('');
    const [cardDetails, setCardDetails] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');

    return (
        <div>
            <Navbar></Navbar>
            <form action="">
                <div>
                <div>
                        <div>
                            <label> Name on Card</label><span class="required">*</span>
                        </div> 
                        <div>
                            <input 
                            type="text" 
                            value={nameOnCard}
                            placeholder="Opara Linux Ahmed"
                            onChange={(e) => setNameOnCard(e.target.value)}
                            required/>
                        </div>
                    </div>
                    

                    <div>
                        <div>
                            <label> Card Type</label> <span class="required">*</span>
                        </div>
                        <div>
                            <select
                            value={cardType}
                            onChange={(e) => setCardType(e.target.value)}
                            style={{width: '100%'}}>
                                <option>Visa</option>
                                <option>Verve</option>
                                <option>Master Card</option>
                            </select>
                        </div>
                    </div>

                    <div className='card_details'>
                        <div className='card_detail'>
                            <div>
                                <label> Card Details</label><span class="required">*</span>
                            </div>
                            <div>
                                <input 
                                    type="text" 
                                    value={cardDetails}
                                    placeholder="44960  44960   44960   44960"
                                    onChange={(e) => setCardDetails(e.target.value = e.target.value.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1    ').trim())}
                                    maxLength='28'
                                    required/>
                            </div>
                            
                        </div>

                        <div className='expiry_date'>
                            <div>
                                <label> Expiry date</label><span class="required">*</span>
                            </div>
                            <div>
                                <input 
                                    type="text" 
                                    value={expiryDate}
                                    placeholder="04 / 23"
                                    onChange={(e) => setExpiryDate(e.target.value = 
                                        e.target.value.replace(/^(\d\d)(\d)$/g,'$1 / $2')
                                        .replace(/^(\d\d\/\d\d)(\d+)$/g,'$1 / $2').
                                        replace(/[^\d\/]/g,'  '))}
                                    maxLength='12'
                                    required/>
                            </div>
                        </div>

                        <div className='cvv'>
                        <div>
                                <label> CVV</label><span class="required">*</span>
                            </div>
                            <div>
                                <input 
                                    type="text" 
                                    value={cvv}
                                    placeholder="923"
                                    onChange={(e) => setCvv(e.target.value = e.target.value.replace(/[^\dA-Z]/g, '').replace(/(.{3})/g, '$1').trim())}
                                    maxLength='3'
                                    style={{fontWeight: '900',
                                            color: 'black'}}
                                    required/>
                            </div>
                        </div>
                    </div>

                    <div className='buttons'>
                            <button className='button1'>
                                <Link to={'/confirmpayment'}>
                                    Next
                                </Link>
                            </button>
                            <button className='button2'>
                                Cancel Payment
                            </button>
                        </div>
                </div>
            </form>
        </div>
    )
}

export default Billing
