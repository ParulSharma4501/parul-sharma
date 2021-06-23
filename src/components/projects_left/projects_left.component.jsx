import React from 'react'
import {Link, Router} from "react-router-dom"
import "./projects_left.styles.css";

import Slide from 'react-reveal/Slide';

// import project1 from "../../assets/project1.png"

function PLeft({projectImg,link}) {
    return (
        <Slide left>
        <div className="pleft">
           
           <a href={link}>
                <img src={projectImg} className="proj_img" height="350" width="570" />
              </a>
        
             
            </div>
            </Slide>
    )
}

export default PLeft
