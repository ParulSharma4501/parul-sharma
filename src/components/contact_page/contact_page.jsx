import React from 'react'
import "./contact_page.styles.css";
import ContactUs from "../contactForm/contactForm";
import emaily from "../../assets/emaily.jpg"





function ContactPage() {
    return (
        <div className="cpage">
      
            <div></div>
            <div></div>
 
            <div className="forma"> <ContactUs></ContactUs></div>
            <div className="flex22">
                <img src={emaily} className="emaily" width="400px"></img>
                <br></br>
                <div className="social_flex marginn">
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
                    <a href="https://github.com/ParulSharma4501">
                    <i class="fab fa-github icon"></i>
                    </a>
                </div>
            </div>
            </div>
            <div></div>
            <div></div>
            <div></div>
            
        </div>
    )
}

export default ContactPage;
