import {LOGO_URL} from '../utils/constants';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

 const Header = () => {
    const [loginBtn,setLoginBtn] = useState("Login");
    console.log("header rendered");

    useEffect(()=>{
        console.log("useEffect called from render");
    },[loginBtn])
 
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About Us</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li>Cart</li>
                    <button className='login-btn'
                    onClick={()=>{
                        loginBtn==="Login"?setLoginBtn("Logout"):setLoginBtn("Login");
                    }}>
                        {loginBtn}
                    </button>
                </ul>
            </div>
        </div>
    )
}

export default Header;