import React from 'react';
import './about.css';

function About() {
      return(
        <section className="aboutText"  id="about" alignItems="center">
            <img className="background-img" alt="" src={"https://user-images.githubusercontent.com/44556715/90456642-7ee0d900-e0c7-11ea-819d-5522d9baf8d5.png"}/>
            <div className = "me">
            <h1>Hello! My name is Jackie, and I'm a developer and animator. </h1>
            <h4>I am an undergrad at Northeastern University studying Computer Science and Media Arts, 
              a computer graphics major under the Computer and Information Sciences Department.</h4>
              <h4>I love exploring topics relating graphics, animation, and code! In my freetime I 
                enjoy drawing (I'm currently working on a comic!), playing guitar, traveling, skating, and spending time outdoors.
              </h4>
              <h4> My intern experiences: 
                <ul>
                <li><b>Electronic Arts</b> summer 2021 (Tech Art, assist game engineers and artists by building tools)</li>
                <li><b>Lucasfilm, ILM</b>  spring 2021 (Core Pipeline Software)</li>
                <li><b>Human Movement Lab</b>  spring, summer, fall 2020 (Motion Capture engineering, Computer Graphics, Python, C#)</li>
                <li><b>Scout Studio</b>  fall 2019 (React.js, web development, design) </li>
                <li><b>Bank of America</b> summer 2019 (React.js, Node.js)</li>
                </ul> 
            </h4> 
            </div>
            </section>
      )
    }

export default About;
