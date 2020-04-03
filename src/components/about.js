import React, { Component, useEffect, useState } from 'react';
import ReactDOM from "react-dom";
import { Grid, Cell } from 'react-mdl';
import './about.css';
import Flexbox from 'flexbox-react';
import { Element } from 'react-scroll'
import pic from '../images/about/about.jpg';

class About extends Component {
  render() {
    return(
      <section className="aboutText"  id="about" alignItems="center">
         <div className="logo">
          <img src={pic}/>
        </div>
          <h3>Hi! I'm Jackie Allex and I'm a developer and animator. </h3>
          </section>
    )
}
}

export default About;
