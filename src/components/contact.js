import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import './contact.css';
import pic from '../images/ornge.png';

class Contact extends Component {
  render() {
    return(
      <div className="contact-page" id="contact"><h1>Contact</h1>
      <img className= "img" src={pic}/>
      <div className = "contact-info">Email: jackieallex@gmail.com</div>
      </div>
    )
  }
}

export default Contact;
