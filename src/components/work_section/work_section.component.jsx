import React from 'react'

import PRow from "../projects_row/projects_row.component";
import WorkHeading from "../workHeading/workHeading.component"

import "./work_section.styles.css";

function WorkSection() {
    return (
        <div className="work_section">
            <WorkHeading />
            <PRow  condition numImg="/images/1cute.png" btn="Launch" link="https://cherry-blossom-shop.herokuapp.com/" projectImg="/images/project1.png" projectName="E-COMMERCE WEBSITE - CHERRY BLOSSOM" projectDescription="This is an e-commerce website for clothing. Made by keeping more focus on Frontend - REACT and REDUX part, User can shop clothes, add items to cart, get Google Authentication and then also pay using credit cards." />
            <PRow numImg="/images/2cute.png" center btn="Launch" link="https://shelter-check.herokuapp.com/" projectImg="/images/project2.png" projectName="HOME SERVICES APP - SHELTER CHECK" projectDescription="The main aim was to build a website that is basically an online marketplace for local services such as repair & maintenance, home cleaning, homecare & design, pest control, packers & movers, business services, event management, weddings & party management, health & wellness, salon, etc. 
"/>
            <PRow  condition numImg="/images/3cute.png" btn="Launch" link="https://netflix-clone-ps-657ec.web.app/" projectImg="/images/project3.png" projectName="MOVIE STREAMING APP - NETFLIX CLONE" projectDescription="Tried to build an online movie streaming application or a netflix clone (Frontend mainly) using React.js and TMDB API . I created this react app using firebase . And getting all the movies from the API , their trailers from the react-youtube library, build the app using components and state management."/>
        </div>
    )
}

export default WorkSection
