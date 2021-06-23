import emailjs from "emailjs-com";
import React from "react";

import { Form, Button } from "react-bootstrap";

import "./contactForm.styles.css";


export default function ContactUs() {

  function sendEmail(e) {
    e.preventDefault();
    
    emailjs.sendForm('default_service', 'template_74axfhd', e.target, 'user_dSv9XBMM5g9gAvIIoOyZM')
      .then((result) => {
        console.log(result.text);
        alert("Message Sent! We will get back to you shortly.");
      }, (error) => {
        console.log(error.text);
        alert("Message not Sent!");
      });
      e.target.reset();
  }

    return (
      <div className="form_div">
        <br></br>
        <Form onSubmit={sendEmail}>
          <h1 className="fir">LET'S TALK</h1>
          <p className="sec">Wanna collaborate for a project with me ? Or to request a quote or any other help, fill the form and I'll get back to you promptly.</p>
          <table className="tabley" cellPadding="10" cellSpacing="15">
            <tr>
              <td><Form.Label>Name</Form.Label></td>
              <td><Form.Control type="text" name="name" className="input"/></td>
            </tr>

            <tr>
              <td><Form.Label>Email address</Form.Label></td>
              <td><Form.Control type="email"  name="email" className="input" /></td>
            </tr>


            <tr>
              <td> <Form.Label>Subject</Form.Label></td>
              <td>
    <Form.Control type="text"  name="subject" className="input" /></td>
            </tr>

            <tr>
              <td>  <Form.Label>Your Message</Form.Label></td>
              <td>    <Form.Control type="text"   name="message" className="input message" /></td>
            </tr>

            <tr className="last_row" >
              <td className="last_row" colSpan="2">
              <Button variant="primary" type="submit" className="buttonn btn-grad">
                  SEND
                </Button>
                
              </td>
            </tr>

          </table>
          

</Form>
        </div>
    )
}