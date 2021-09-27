import React from 'react';
import {Link, useLocation} from 'react-router-dom';

import './../App.css';

const Navbar = () => {
    const location = useLocation();

    const path = location.pathname;

    return (
        <div>
            <h1 className="heading"> Complete Your Purchase</h1>

            <header className="navBar">
                <Link to="/"
                className={path === "/" ? "active_link" : ""}>
                Personal Info
                <div className={path === "/" ? "active" : ""}>

                </div>
                </Link>

                <Link to={"/billinginfo"}
                className={path === "/billinginfo" ? "active_link" : ""}>
                Billing Info
                <div div className={path === "/billinginfo" ? "active" : ""}>
                    
                </div>
                </Link>
                <Link to={"/confirmpayment"}
                className={path === "/confirmpayment" ? "active_link" : ""}>
                Confirm Payment
                <div div className={path === "/confirmpayment" ? "active" : ""}>
                    
                </div>
                </Link>
            </header>
            <hr />
        </div>
    )
}

export default Navbar
