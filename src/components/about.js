import React from 'react';
import './about.css';

function About() {
      return(
        <section className="aboutText"  id="about" alignItems="center">
            
            <div className = "me">
            <div className = "wrapper">
            <img className="background-img" alt="" src={"https://user-images.githubusercontent.com/44556715/90456642-7ee0d900-e0c7-11ea-819d-5522d9baf8d5.png"}/>
            <h1>Hello! My name is Jackie, and I'm a computer graphics developer. </h1>
            </div>
            <h4>I am an undergrad at Northeastern University studying Computer Science and Media Arts, 
              a computer graphics major under the Computer and Information Sciences Department.</h4>
              <h4>Topics that excite me are animation tools, digital simulation, VFX, R&D, virtual reality, and game development! In my freetime I 
                enjoy drawing, playing guitar, traveling, skateboarding, and spending time outdoors.
              </h4>
              <h4> My intern experiences: 
                <ul>
                <li><b>Electronic Arts</b> incoming summer 2021 (Tech Art Internship)</li>
                <li><b>Lucasfilm, ILM</b>  spring 2021 (Core Pipeline Software Co-op)</li>
                <li><b>Human Movement Lab</b> all of 2020 (Motion Capture engineering, VR, Computer Graphics, Python, Blender)</li>
                <li><b>Scout Studio</b>  fall 2019 (React.js, web development, design) </li>
                <li><b>Bank of America</b> summer 2019 (React.js, Node.js, web development)</li>
                </ul> 
            </h4> 
            </div>
            </section>
      )
    }

export default About;
