import React from 'react'
import logo from "../../assets/logo3.png"
import "./header.styles.css"

import {Link} from "react-router-dom"

function Header() {
    return (
        <div className="header">
            <div className="logo">
                {/* <img src={logo} width="70" height="65" ></img> */}
            </div>
            <div className="nav_li">
                <Link to="/contact">
                <div className="lii">Contact</div>
                </Link>
                <Link to="/about">
                <div className="lii">About</div>
                </Link>
               
          
            </div>
          
        </div>
    )
}

export default Header
