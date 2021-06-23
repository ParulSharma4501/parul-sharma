import React from "react";
import { Container } from "react-bootstrap";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/header/header.component";
import Main from "./components/main_section/main.component"
import Skills from "./components/skills_section/skills.components";
import WorkSection from "./components/work_section/work_section.component";
import Footer from "./components/footer/footer.component";
import Mini_Row from "./components/mini_p_row/mini_p_row.component";
import ContactUs from "./components/contactForm/contactForm";
import ContactPage from "./components/contact_page/contact_page";
import About from "./components/about_page/about_page.component";


function App() {
  return (
  
   
    <div className="App">

      <Router>
        <Switch>
          <Route exact path="/">
          <Header />
      <Main />
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <Skills />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <WorkSection />
      <Mini_Row />
      <Footer/>
    
          </Route>

          <Route path="/contact">
           <ContactPage></ContactPage>
          </Route>

          <Route path="/about">
          <About></About>
          </Route>
        </Switch>
      </Router>
      
    </div>
    

    
  );
}

export default App;
