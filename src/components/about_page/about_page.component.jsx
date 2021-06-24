import React from 'react'

import "./about_page.styles.css"


import paru2 from "../../assets/paru7.png"



function About() {
    return (
        
        <div className="about">
            <div className="leftt">
                <br></br>
                <br></br>
                <br></br>
            
                <h1 className="fir">About me</h1>
                <br></br>
                <div className="sec secc">
                    
                Creative web developer dedicated to building and optimizing the performance of websites.

                    My specialties include quickly learning new skills and programming languages, website optimization.
                    <br></br><br></br>     I've started learning React, Node.JS, MongoDB, and Express.JS.                So far I have Java, C, C++, SQL, JavaScript, HTML, CSS, jQuery, Bootstrap, and Git/GitHub under my belt.
      

                    When I am not Coding I usually spend my time sketching and cartooning.
                    <br></br><br></br>I'll be Graduating in 2022. And have did a couple of internships as an web developer Intern. I'm still enthusiastically grabbing onto any other programming languages like Java frameworks or principles I can integrate into the coding web in my head.
                    <br></br>
                    <br></br>
                    A girl who loves to code.
                    LIVE.LAUGH.CODE
                </div>
            </div>
            <div className="dsc">
                
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
         
                <img src={paru2} className="paru"></img>
                
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>

    )
}

export default About;
