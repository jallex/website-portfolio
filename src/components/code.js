import React, { Component, useState } from 'react';
import { Card, CardDeck, Carousel } from "react-bootstrap";
import './code.css';
import skelly from '../images/code/dot-skelly.gif';
import mocap from '../images/code/mocap-clean.gif';
import mocap2 from '../images/code/mocap-blender.gif';
import screenshot from '../images/code/screenshot.png';
import skelmesh from '../images/code/skel-mesh.png';
import comp2 from '../images/code/Comp2.gif';
import sheet1 from '../images/code/spreadsheets/Triangular.PNG';
import sheet2 from '../images/code/spreadsheets/ScrollExample.png';
import sheet3 from '../images/code/spreadsheets/WorkingInputFile1.png';
import solitaire from '../images/code/solitaire.PNG';

/* put image carousel with images and gifs inside of image place
also make a button -> see project! lead to github or other source.. vimeo? 
*/


class Code extends Component {
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
      src={skelmesh}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block h-80"
      src={comp2}
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Third slide&bg=20232a"
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
    <Card.Body>
      <Card.Title>3D Armature Animation from NumPy Data</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Card.Text>
        Graphics Programming | Animation
      </Card.Text>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Body>
      <Card.Title>Raytracer</Card.Title>
      <Card.Text>
        WIP
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Card.Text>
    Graphics Programming
      </Card.Text>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Body>
      <Card.Title>Personal Project coming soon???</Card.Title>
      <Card.Text>
        WIP
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
</Carousel>
    <Card.Body>
      <Card.Title>Mocap Data clean-up:</Card.Title>
      <Card.Title>Autolabel Unlabeled Trajectories</Card.Title>
      <Card.Text>
      <ul>
              <li>During the motion capture tracking session, when the cameras lose track of a marker, even for a single frame, the system creates a whole new trajectory for the marker once it is visible again. The system cannot identify that the previous trajectory and the new one belong to the same marker, and these trajectories need to be connected, and I have done so utilizing the mocap data and rgb camera frustum information such as far and near planes.</li>
              <li>Add mesh and armature to mocap data via Python script and Blender</li>
              <li>Use Unity 3D environment and C# to cast an expanding ray and detect collision and label desired trajectory</li>
              </ul> 
              See demo / see project
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
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
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
      <Card.Title>Pyramid Solitaire (3 versions of models)</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
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
