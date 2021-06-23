import React from 'react'
import Mini_Card from '../mini_p_card/mini_p_card.component'

import "./mini_p_row.styles.css"

import m1 from "../../assets/tesla.jpg";
import m2 from "../../assets/corona.jpg";
import m3 from "../../assets/weather.jpg";
import m4 from "../../assets/notes.jpg";


function Mini_Row() {
    return (
        <div className="rowaa">
            <div className="border"></div>
         
            <h1 className="fir mini_head">mini projects</h1>
       
            <br></br>
            <br></br>
            <br></br>
                <div  className="mini_p_row">
                <Mini_Card img={m1} Heading="Tesla Website Clone" link="https://tesla-clone-parul.web.app/"/>
            <Mini_Card img={m2}  Heading="Covid-19 Tracker" link="https://covid-19-app-17f14.web.app/"/>
                <Mini_Card img={m3}  Heading="Weather App" link="https://parulsharma4501.github.io/weather-app/"/>
                <Mini_Card img={m4}  Heading="Note Taking App" link="https://keeper-app-p.herokuapp.com/"/>
            </div>
            <div className="border"></div>
            </div>
    )
}

export default Mini_Row;
