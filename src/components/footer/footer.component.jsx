import React from 'react'

import "./footer.styles.css";
import {Link} from "react-router-dom"

import Me from "../../assets/Me5.png"

function Footer() {
    return (
        <div className="footer">
      
            <div className="image_me">
            <img src={Me} className="me_img" width="120" height="120"></img>
            </div>
            <div className="social_flex">
                <div className="icons">
                    <a href="https://www.linkedin.com/in/parul-sharma-734853190/">
                        <i class="fab fa-linkedin-in icon"></i>
                    </a>
               </div>
                <div className="icons">
                    <a href="https://www.instagram.com/its_parul_sharma_/">
                        <i class="fab fa-instagram icon"></i>
                    </a>
                </div>
                <div className="icons ">
                    <Link to="/contact">
                    <i class="fas fa-envelope icon" ></i>
                    </Link>
                </div>
                <div className="icons ">
                <a href="https://github.com/ParulSharma4501">
                    <i class="fab fa-github icon"></i>
                    </a>
                </div>

              
            </div>
            <br></br>
            <br></br>


            <div className="bottom_text">
                Handcrafted by me © parulsharma
            </div>
        </div>
    )    
}

export default Footer
