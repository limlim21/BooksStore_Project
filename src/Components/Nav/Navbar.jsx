import React, { component, useState } from "react";
import { Link } from "react-router-dom";
import { GiSpellBook } from "react-icons/gi";
import { FaBars, FaTimes } from "react-icons/fa";
import  { Button }   from "react-bootstrap";
import './Navbar.css';

function Navbar (){
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false);
        } else {
            setButton(true);
        }
    }

    window.addEventListener('resize', showButton);

    return(
    <>
        <div className="navbar" style={{Navbar}}>
            <div className="navbar-container container">
                <Link to='/' className="navbar-logo">
                    <GiSpellBook className="nav-icon"/>
                    <p className="nav-title"> Magic</p> 
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    {click ? <FaTimes/> : <FaBars/>}
                </div>
                <ul className={click ? 'nav-menu-active' : 'nav-menu'}>                                      
                    <li className='nav-item'>
                        <Link to='/about' className='nav-link'>
                            About
                        </Link>
                    </li>                    
                    <li className='nav-btn'>
                        {button ? (
                            <Link to='/login' className="btn-link">
                                <Button variant="outline-light">LOGIN</Button>
                            </Link>
                        ) : (
                            <Link to='/login' className="btn-link">
                                <Button variant="outline-light" size="sm">
                                    LOG IN
                                </Button>
                            </Link>
                        )}
                    </li>                    
                </ul>
            </div>
        </div>
    </>
    );
}
export default Navbar;