import React from 'react'

import "./main.styles.css";

import Me from "../../assets/Me5.png"
import Description from "../description/description.component"

import RubberBand from 'react-reveal/RubberBand';

function Main() {
    return (
        <div className="main">
            <div >
                <RubberBand>
                    <img src={Me} className="me_img" width="230" height="230"></img>
                    </RubberBand>
            </div>
            <Description></Description>
        </div>
    )
}

export default Main
