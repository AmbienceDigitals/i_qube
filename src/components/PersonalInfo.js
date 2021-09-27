import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

import './../App.css'

const PersonalInfo = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address1, setAddress1] = useState('');
    const [address2, setAddress2] = useState('');
    const [localGovernment, setLocalGovernment] = useState('');
    const [state, setState] = useState('');

    return (
        <div>
            <Navbar></Navbar>
            <form>
                <div>

                    <div>
                        <div>
                            <label> Name</label>
                        </div>
                        <div>
                            <input 
                            type="text" 
                            value={name}
                            placeholder="Opara Linux Ahmed"
                            onChange={(e) => setName(e.target.value)}/>
                        </div>
                    </div>
                    

                    <div>
                        <div>
                            <label> Email Address</label> <span class="required">*</span>
                            <p>The purchase receipt would be sent to this address</p>
                        </div>
                        <div>
                            <input 
                            type="email" 
                            value={email}
                            placeholder="OparaLinusAhmed@devmail.com"
                            onChange={(e) => setEmail(e.target.value)}
                            required/>
                        </div>
                    </div>
                    

                    <div>
                        <div>
                        <label> Address 1</label>
                        </div>
                        <div>
                            <input 
                            type="text" 
                            value={address1}
                            placeholder="The address of the user goes here"
                            onChange={(e) => setAddress1(e.target.value)}/>
                        </div>
                    </div>

                    <div>
                        <div>
                            <label> Address 2</label>
                        </div>
                        <div>
                            <input 
                            type="text" 
                            value={address2}
                            placeholder="and here"
                            onChange={(e) => setAddress2(e.target.value)}/>
                        </div>
                        
                        
                    </div>

                    <div className="location">
                        <div className='local'>
                            <div>
                                <label>Local Government</label>
                            </div>
                            <div>
                                <input 
                                type="text" 
                                value={localGovernment}
                                placeholder="Surulere"
                                onChange={(e) => setLocalGovernment(e.target.value)}/>
                            </div>
                        </div>


                        <div className='state'>
                            <div>
                                <label> State</label>
                            </div>
                            <div>
                                <select
                                value={state}
                                onChange={(e) => setState(e.target.value)}>
                                    <option>Abia</option>
                                    <option>Adamawa</option>
                                    <option>Akwa Ibom</option>
                                    <option>Anambra</option>
                                    <option>Bauchi</option>
                                    <option>Bayelsa</option>
                                    <option>Benue</option>
                                    <option>Borno</option>
                                    <option>Cross River</option>
                                    <option>Delta</option>
                                    <option>Ebonyi</option>
                                    <option>Edo</option>
                                    <option>Ekiti</option>
                                    <option>Enugu</option>
                                    <option>Gombe</option>
                                    <option>Imo</option>
                                    <option>Jigawa</option>
                                    <option>Kaduna</option>
                                    <option>Kano</option>
                                    <option>Katsina</option>
                                    <option>Kebbi</option>
                                    <option>Kogi</option>
                                    <option>Kwara</option>
                                    <option>Lagos</option>
                                    <option>Nasarawa</option>
                                    <option>Niger</option>
                                    <option>Ogun</option>
                                    <option>Ondo</option>
                                    <option>Osun</option>
                                    <option>Oyo</option>
                                    <option>Plateau</option>
                                    <option>Rivers</option>
                                    <option>Sokoto</option>
                                    <option>Taraba</option>
                                    <option>Yobe</option>
                                    <option>Zamfara</option>
                                    <option>FCT Abuja</option>
                                </select>
                            </div>
                        </div>

                    </div>

                    <div className='buttons'>
                            <button className='button1'>
                                <Link to={'/billinginfo'}>
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

export default PersonalInfo;
