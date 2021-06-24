import React from 'react'
import logo from "../../assets/logo3.png"
import "./header.styles.css"

import {Link} from "react-router-dom"

function Header3() {
    return (
        <div className="header">
            <div className="logo">
                {/* <img src={logo} width="70" height="65" ></img> */}
            </div>
            <div className="nav_li">
                <Link to="/">
                <div className="lii">Home</div>
                </Link>
                <Link to="/contact">
                <div className="lii">Contact</div>
                </Link>
               
          
            </div>
          
        </div>
    )
}

export default Header3
