import React, { Component, useState } from 'react';
import { Card, CardDeck, Carousel } from "react-bootstrap";
import { Player } from 'video-react';
import './code.css';
import skelly from '../images/code/labeling/dot-skelly.gif';
import mocap from '../images/code/labeling/mocap-clean.gif';
import mocap2 from '../images/code/labeling/mocap-blender.gif';
import screenshot from '../images/code/labeling/screenshot.png';
import skelmesh from '../images/code/labeling/skel-mesh.png';
import demovideo from '../images/code/labeling/DEMO.mp4';
import comp2 from '../images/code/labeling/Comp2.gif';
import sheet1 from '../images/code/spreadsheets/Triangular.PNG';
import sheet2 from '../images/code/spreadsheets/ScrollExample.png';
import sheet3 from '../images/code/spreadsheets/WorkingInputFile1.png';
import solitaire from '../images/code/solitaire.PNG';
import markerless1 from '../images/code/markerless/markerless1.png';
import markerless2 from '../images/code/markerless/markerless2.gif';
import markerless3 from '../images/code/markerless/markerless3.gif';
import marker1 from '../images/code/marker/marker1.png';
import marker2 from '../images/code/marker/marker3.gif';
import "../../node_modules/video-react/dist/video-react.css"; // import css


class Code extends Component {

state = {
  showMessageSpreadsheet: false,
  showMessageAutoLabel: false
}
onButtonClickHandler(box){
if(box == "spreadsheet"){
 this.setState({showMessageSpreadsheet: !this.state.showMessageSpreadsheet});
}
if(box == "autolabel"){
  this.setState({showMessageAutoLabel: !this.state.showMessageAutoLabel});
}
}

displayText(showMore){
  if(showMore == true){
    return "Show less";
  }
  else {
    return "Show more";
  }
}
render() {
    return(
      <div className="code-page" id="code">
        <h1>Coding Projects</h1>
     <CardDeck className="deck1">
     <Card>
    <Card.Body>
      <Card.Title>Raytracer</Card.Title>
      <Card.Text>
        <ul>
          <li>Renders realistic images through ray tracing techniques on 3D scenes.</li>
          <li>Used C++ to implement Vector3 math operations, rays, shaders, lights, geometry in a scene,
normal determination, antialiasing, materials with refraction and reflection, and cameras.</li>
        </ul>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Card.Text>
    Graphics Programming
      </Card.Text>
    </Card.Footer>
  </Card>
  <Card>
  <Carousel interval = "100000000000000">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={markerless1}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={markerless2}
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block h-100"
      src={markerless3}
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
    <Card.Body>
      <Card.Title>Markerless Mocap Data Animation</Card.Title>
      <Card.Text>
      <ul class="my-list-style">
              <li>Tracked human body parts using markerless mocap system on rgb video and performed 3D reconstruction on 2D video coordinates.</li>
              <li>Created 3D animation of human skeleton and objects such as juggling balls using Python and Blender API</li>   </ul>
              {this.state.showMessageAutoLabel && <ul class="my-list-style">
              <li>Using API, created empties at each marker location, connected them with bones, rigged armature to custom mesh, added materials, lighting 
                cameras.</li>
              </ul>}
              <i onClick={() => this.onButtonClickHandler('autolabel')} className = "more-button" aria-hidden="true">{this.displayText(this.state.showMessageAutoLabel)}</i>
              <a href="https://github.com/MatthisLab/VisualizationGoProMocap" rel="noopener noreferrer" target="_blank">
          See project!
          </a>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Card.Text>
        Graphics Programming | Animation
      </Card.Text>
    </Card.Footer>
  </Card>
  <Card>
  <Carousel interval = "100000000000000">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={marker1}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={marker2}
      alt="Second slide"
    />
  </Carousel.Item>
</Carousel>
    <Card.Body>
      <Card.Title>Marker Mocap Data Animation</Card.Title>
      <Card.Text>
      <ul class="my-list-style">
              <li>Using Python and the Blender API, translated marker mocap data into 3D environment with animated human skeleton.</li>
              <li>Using API, created an animated armature with keyframed data for each bone, created mesh and parented to armature, applied material and lighting to scene, 
                incorporated force plate data, matched frame rates, rendered out frames </li>   </ul>
              {this.state.showMessageAutoLabel && <ul class="my-list-style">
              <li> Calculated vectors and matrices related to position and rotation quaternions in 3D space, performed calibrations, projected rays, manipulated cameras and rigid bodies.</li>
              <li>Wrote post-processing software to create fluid pipeline converting across different data file formats.</li>
              </ul>}
              <i onClick={() => this.onButtonClickHandler('autolabel')} className = "more-button" aria-hidden="true">{this.displayText(this.state.showMessageAutoLabel)}</i>
              <a href="https://github.com/MatthisLab/Mocap-Cyr-Wheel" rel="noopener noreferrer" target="_blank">
          See project!
          </a>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Card.Text>
        Graphics Programming | Animation
      </Card.Text>
    </Card.Footer>
  </Card>
</CardDeck>

<CardDeck className="deck1">
  <Card>
  <Carousel interval ="100000000000000">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={screenshot}
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={skelly}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={mocap}
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="h-50"
      src={mocap2}
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item>
  <Player
      playsInline
      // poster={dog2}
      src={demovideo}
    />
    </Carousel.Item>
</Carousel>
    <Card.Body>
      <Card.Title>Mocap Data clean-up:</Card.Title>
      <Card.Title>Autolabel Unlabeled Trajectories</Card.Title>
      <Card.Text>
      <ul class="my-list-style">
              <li>Created a system to identify unlabeled trajectories that belong to the same marker during mocap data collection session, and combine them into a single labeled trajectory.</li>
              <li>Pinpoint same marker trajectories using rgb camera frustum information such as far and near planes</li>
              </ul>
              {this.state.showMessageAutoLabel && <ul class="my-list-style">
              <li>Add mesh and armature to mocap data via Python script and Blender to create visualization</li>
              <li>Use Unity 3D environment and C# to cast an expanding ray, detect collision, and label desired trajectory</li>
              </ul>}
              <i onClick={() => this.onButtonClickHandler('autolabel')} className = "more-button" aria-hidden="true">{this.displayText(this.state.showMessageAutoLabel)}</i>
          <div className="Automated-Label">
          <a href="https://github.com/jallex/Automated-Labeling-Unlabeled-Trajectories" rel="noopener noreferrer" target="_blank">
          See project!
          </a>
          </div>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Card.Text>
        Graphics Programming | Animation
      </Card.Text>
    </Card.Footer>
  </Card>
  <Card>
  <Carousel interval = "100000000000000">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={sheet1}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={sheet2}
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={sheet3}
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
    <Card.Body>
      <Card.Title>Spreadsheet (Mini Excel)</Card.Title>
      <Card.Text>
       <ul class="my-list-style">
<li>Using Java and Swing and the MVC design pattern, I created a working spreadsheet similar to Microsoft Excel and  Google Sheets."
Able to open saved sheets or create a new one. </li>
<li>Allows for infinite scrolling.</li>
<li>GoF patterns used: Composition, Visitor, Builder, Command, Observor</li></ul>
{this.state.showMessageSpreadsheet && <ul class="my-list-style"><li>If a value is edited, all cells that reference this cell will also be updated. </li>
<li>Cells that contain formulas may be functions of a fixed number of arguments, or of a range of values; they can contain conditionals to select among options; by creating a bunch of similar, consecutive rows they can even simulate fixed-length iteration. Formulas are only restricted to not contain cyclic references. </li>
<li>Ability to create a group of spreadsheets and reference between them.</li>
<li>The spreadsheet has user mouse, key, and event listeners. For example, the user is able to navigate using the keyboard arrow keys, and click buttons to change selected cells and their contents.</li>
<li>Extensive unit testing.</li></ul>}
<i onClick={() => this.onButtonClickHandler('spreadsheet')} className = "more-button" aria-hidden="true">{this.displayText(this.state.showMessageSpreadsheet)}</i>

        Project code available upon request.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Card.Text>
        Object-Oriented Programming | Model-View-Controller 

      </Card.Text>
    </Card.Footer>
  </Card>
  <Card>
  <img
      className="d-block w-100"
      src={solitaire}
      alt="First slide"
    />
    <Card.Body>
      <Card.Title>Pyramid Solitaire (3 models)</Card.Title>
      <Card.Text>
      <ul>
              <li>Using Java and the MVC design pattern, I created a solitaire game with 3 different models with different rules- basic, relaxed, and tripeaks.</li>
              <li>Textual view of game displayed in terminal.</li>
              <li>Created Mock models for extensive unit testing.</li>
              </ul> 
              Project Code available upon request.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Card.Text>
        Object-Oriented Programming | Model-View-Controller 
      </Card.Text>
    </Card.Footer>
  </Card>
</CardDeck>
</div>
    )
}
}
export default Code;
