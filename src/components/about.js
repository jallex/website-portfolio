import React, { Component, useEffect, useState } from 'react';
import './about.css';
import pic from '../images/about-back2.png';


class About extends Component {
  render() {
    return(
 
      <section className="aboutText"  id="about" alignItems="center">
          <img className="background-img" src={pic}/>
          <div className = "me">
          <h1>Hello! My name is Jackie, and I'm a developer and animator. </h1>
          <h4>I am an undergrad at Northeastern University studying Computer Science and Media Arts, 
            a computer graphics major under the Computer and Information Sciences Department.</h4>
            <h4>I love exploring topics relating graphics, animation, and code! In my freetime I 
              enjoy drawing, playing guitar, traveling, skating, and spending time outdoors.
            </h4>
            <h4> My intern experiences: 
              <ul>
              <li><b>Human Movement Lab</b>  spring 2020 (Python, C#, Blender, Unity)</li>
              <li><b>Scout</b>  fall 2019 (React.js) </li>
              <li><b>Bank of America</b> summer 2019 (React.js, Node.js)</li>
              </ul> 
          </h4> 
          </div>
          </section>
    )
}
}

export default About;
