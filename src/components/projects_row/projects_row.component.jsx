import React from 'react'
import "./projects_row.styles.css"

import PLeft from '../projects_left/projects_left.component'
import PRight from '../projects_right/projects_right.component'
import da from "../../assets/arrow-down.png";

function PRow({condition,numImg,center,projectImg,projectName,projectDescription,link,btn}) {

    let contentl;
    let contentr;
    if (condition) {
        contentl = <PLeft projectImg={projectImg} link={link} />;
        contentr = <PRight numImg={numImg} btn={btn} link={link} center={center} projectName={projectName} projectDescription={ projectDescription}/>;
    } else {
        contentr = <PLeft projectImg={projectImg} link={link}/>;
        contentl = <PRight numImg={numImg} btn={btn} link={link} center={ center} projectName={projectName} projectDescription={ projectDescription}/>;
    }

    return (
    
        <div className="prow">
            <div className="col1">
          {contentl}
            </div>
            <div className="col2">
            {contentr}
            </div>
              {/* <img src={da} className="DownArrow"></img> */}
        </div>
          
      
    )
}

export default PRow
