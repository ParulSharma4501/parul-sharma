import React from 'react'
import "./skills.styles.css"
import code from "../../assets/code.jpg"
import react from "../../assets/react.png"
import mongo from "../../assets/mongo.png"
import bootstrap from "../../assets/bootstrap.png"
import html from "../../assets/html.png"
import css from "../../assets/css.png"
import node from "../../assets/node.png"
import bar1 from "../../assets/bar1.png"
import bar2 from "../../assets/bar2.png"
import bar3 from "../../assets/bar3.png"
import bar4 from "../../assets/bar4.png"
import bar5 from "../../assets/bar5.png"
import bar6 from "../../assets/bar6.png"
// import bar7 from "../../assets/bar7.png"
import bar8 from "../../assets/bar8.png"



import Slide from 'react-reveal/Slide';

function Skills() {
    return (
        <div className="skills">
           
            <Slide left>
            <div>
                
        <img src={code} className="code_img" height="600" width="600"></img>
                </div>
            </Slide>
            
            <Slide right>
            <div className="icons_flex">
            <h1 className="head">Skills</h1>
                <div className="table">
                    <table>
                        <tr>
                            <td>
                            React Js
                            </td>
                            <td>
                            &nbsp; &nbsp; &nbsp; &nbsp; <img src={bar1} height="10" width="160"></img>
                            </td>
                        </tr>
                        <tr>
                            <td>
                            Node Js
                            </td>
                            <td>
                            &nbsp; &nbsp; &nbsp; &nbsp; <img src={bar2} height="10" width="160"></img>
                            </td>
                        </tr>
                        <tr>
                            <td>
                           MongoDB
                            </td>
                            <td>
                            &nbsp; &nbsp; &nbsp; &nbsp; <img src={bar3} height="10" width="160"></img>
                            </td>
                        </tr>
                        <tr>
                            <td>
                           Bootstrap
                            </td>
                            <td>
                            &nbsp; &nbsp; &nbsp; &nbsp; <img src={bar4} height="10" width="160"></img>
                            </td>
                        </tr>
                        <tr>
                            <td>
                           HTML
                            </td>
                            <td>
                            &nbsp; &nbsp; &nbsp; &nbsp; <img src={bar1} height="10" width="160"></img>
                            </td>
                        </tr>
                        <tr>
                            <td>
                           CSS
                            </td>
                            <td>
                            &nbsp; &nbsp; &nbsp; &nbsp; <img src={bar6} height="10" width="160"></img>
                            </td>
                        </tr>
                        <tr>
                            <td>
                           Javascript
                            </td>
                            <td>
                            &nbsp; &nbsp; &nbsp; &nbsp; <img src={bar8} height="10" width="160"></img>
                            </td>
                        </tr>
                    </table>
                </div>

            
                </div>
                </Slide>
    </div>
    )
}

export default Skills
