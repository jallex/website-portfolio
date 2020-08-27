import React, { Component } from 'react';
import { Card, CardDeck, Carousel } from "react-bootstrap";
import './code.css';

class Code extends Component {

state = {
  showMessageSpreadsheet: false,
  showMessageAutoLabel: false
}
onButtonClickHandler(box){
if(box === "spreadsheet"){
 this.setState({showMessageSpreadsheet: !this.state.showMessageSpreadsheet});
}
if(box === "autolabel"){
  this.setState({showMessageAutoLabel: !this.state.showMessageAutoLabel});
}
}

displayText(showMore){
  if(showMore === true){
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
     <Carousel interval = "100000000000000">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={"https://user-images.githubusercontent.com/44556715/91363232-2e096880-e7ca-11ea-8830-abe13dfff70e.png"}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={"https://user-images.githubusercontent.com/44556715/91363259-3c578480-e7ca-11ea-9e96-c32ff6969682.png"}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={"https://user-images.githubusercontent.com/44556715/90033511-8e0df400-dc8d-11ea-883d-ce077dcdc1ec.png"}
      alt="First slide"
    />
  </Carousel.Item>
  </Carousel>
    <Card.Body>
      <Card.Title>Raytracer</Card.Title>
      <Card.Text>
        <ul>
          <li>Renders realistic images through ray tracing techniques on 3D scenes.</li>
          <li>Used C++ to implement space-time raytracing, motion blur, AABBs, BVH volumes, image textures, perlin noise, Vector3 math operations, rays, shaders, lights, geometry in a scene,
normal determination, antialiasing, materials with refraction and reflection, and cameras.</li>
        </ul>
        <a href="https://github.com/jallex/Raytracer" rel="noopener noreferrer" target="_blank">
          See project!
          </a>
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
      src={"https://user-images.githubusercontent.com/44556715/90458262-ebf66d80-e0cb-11ea-8bcd-c47025f13c28.png"}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={"https://user-images.githubusercontent.com/44556715/90645804-662a0d80-e204-11ea-9a15-ef242cf043da.gif"}
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block h-100"
      src={"https://user-images.githubusercontent.com/44556715/90458246-df721500-e0cb-11ea-901b-438f2d121317.gif"}
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
    <Card.Body>
      <Card.Title>Markerless Mocap Data Animation</Card.Title>
      <Card.Text>
      <ul class="my-list-style">
              <li>Tracked human body parts using computer vision and neural networks in markerless mocap system on rgb video and performed 3D reconstruction on 2D video coordinates.</li>
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
        Graphics Programming | Research
      </Card.Text>
    </Card.Footer>
  </Card>
  <Card>
  <Carousel interval = "100000000000000">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={"https://user-images.githubusercontent.com/44556715/90457857-b309c900-e0ca-11ea-9ec1-602af3d1058e.png"}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={"https://user-images.githubusercontent.com/44556715/91449976-c561d080-e849-11ea-809c-4b42e5d14175.gif"}
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
                incorporated force plate data, matched frame rates, rendered out frames </li>   
              
              <li> Calculated vectors and matrices related to position and rotation quaternions in 3D space, performed calibrations, projected rays, manipulated cameras and rigid bodies.</li>
              <li>Wrote post-processing software to create fluid pipeline converting across different data file formats.</li>
              </ul>
              <a href="https://github.com/MatthisLab/Mocap-Cyr-Wheel" rel="noopener noreferrer" target="_blank">
          See project!
          </a>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Card.Text>
        Graphics Programming | Research
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
      src={"https://user-images.githubusercontent.com/44556715/90457756-78079580-e0ca-11ea-867b-bb03d63bd8ef.png"}
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={"https://user-images.githubusercontent.com/44556715/90457742-6faf5a80-e0ca-11ea-808c-2d07be0804f7.gif"}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={"https://user-images.githubusercontent.com/44556715/90457644-1ba47600-e0ca-11ea-9348-8288d707c4a8.gif"}
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="h-50"
      src={"https://user-images.githubusercontent.com/44556715/90457677-3676ea80-e0ca-11ea-83f9-283ce580e79c.gif"}
      alt="Third slide"
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
      src={"https://user-images.githubusercontent.com/44556715/90459185-91124580-e0ce-11ea-9689-bb7cdb551aa4.PNG"}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={"https://user-images.githubusercontent.com/44556715/90459184-9079af00-e0ce-11ea-9077-81814ef633ba.png"}
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={"https://user-images.githubusercontent.com/44556715/90459186-91aadc00-e0ce-11ea-991e-59c94850d4be.png"}
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
      src={"https://user-images.githubusercontent.com/44556715/90459174-8788dd80-e0ce-11ea-9f1c-d7c21e4df6d9.PNG"}
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
