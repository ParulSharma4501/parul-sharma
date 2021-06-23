import React from 'react'

import "./projects_right.styles.css";

// import cute1 from "../../assets/1cute.png"

import Slide from 'react-reveal/Slide';

function PRight({ numImg, center,projectName,projectDescription,link,btn }) {
    
    // console.log({ numImg });

    return (
        <Slide right>
            <div className={center ? "pright_center" : "pright"} >
                <div>  <img src={numImg} height="140" width="110" className="num_img"></img></div>

   
            <div className="project_name">{ projectName}</div>
          
    
            <div className="project_description">{ projectDescription}</div>
            
              <a href={link}>
            <button className="btn-grad gooey-button">
       {btn}
                    </button>
                    </a>
                    </div>
      
            </Slide>
    )
}

export default PRight