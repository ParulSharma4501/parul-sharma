import React from 'react';

import "./mini_p_card.styles.css";

import {Link} from "react-router-dom"



function Mini_Card({img,Heading,link}) {
    return (
        <a href={link}>
            
        <div  class="mini_card hover-overlay">
            <img src={img} className="mini_img"></img>

            <h4 className="titlee">{Heading}</h4>
            <div
    class="mask"
    
    
    
  ></div>

            </div>
            </a>
    )
}

export default Mini_Card
