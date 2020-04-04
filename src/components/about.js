import React, { Component, useEffect, useState } from 'react';
import ReactDOM from "react-dom";
import { Grid, Cell } from 'react-mdl';
import './about.css';
import Flexbox from 'flexbox-react';
import { Element } from 'react-scroll'
import pic from '../images/about-back2.png';

class About extends Component {
  render() {
    return(
      <section className="aboutText"  id="about" alignItems="center">
          <h3>Hi! I'm Jackie, and I'm a developer and animator. </h3>
          <h4>I am an undergrad at Northeastern University studying Computer Science and Media Arts, 
            a computer graphics major under the Computer and Information Sciences Department.</h4>
            <h4>I love exploring topics relating graphics, animation, and code! In my freetime I 
              enjoy drawing, playing guitar, traveling, skating, and spending time outdoors.
            </h4>
            <h4> My interning experiences: 
              <ul>
              <li>incoming <b>Lucasfilm</b>  intern summer 2020 </li>
              <li><b>Human Movement Lab</b>  spring 2020 (Python, C#, Blender, Unity)</li>
              <li><b>Scout</b>  fall 2019 (React.js) </li>
              <li><b>Bank of America</b> summer 2019 (React.js, Node.js)</li>
              </ul> 
          </h4> 
          <img className="background-img" src={pic}/></section>
    )
}
}

export default About;
