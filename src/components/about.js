import React, { Component, useEffect, useState } from 'react';
import ReactDOM from "react-dom";
import { Grid, Cell } from 'react-mdl';
import './about.css';
import Flexbox from 'flexbox-react';
import { Element } from 'react-scroll'

class About extends Component {
  render() {
    return(
      <section className="aboutText"  id="about" style={{  
        backgroundImage: "url(" + "https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" + ")",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }} alignItems="center">
          <h3>Hi! I'm Jackie Allex and I'm a developer and animator. </h3>
          </section>
    )
}
}

export default About;
