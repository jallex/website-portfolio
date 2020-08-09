import React, { Component } from 'react';
import './work3D.css';
import dog2 from '../images/3D/dog2.png';
import { Player } from 'video-react';
import "../../node_modules/video-react/dist/video-react.css"; // import css
import video from '../images/3D/talent_show.mp4';
import { Card, CardDeck, Carousel } from "react-bootstrap";
import chair from '../images/3D/chair_model.png';
import dog from '../images/3D/dog_model.png';

class Work3D extends Component {
  
  render() {
    
    return(
      <div className="work3D-page" id="work3D"><h1>3D Modeling and Animation</h1>
           <CardDeck className="deck1">
           <Card>
    <Card.Img variant="top" src={chair} />
    <Card.Body>
      <Card.Title>Chair 3D model for AR</Card.Title>
      <Card.Text>
        Chair 3D asset modeled from scratch based on photo reference for furniture company's AR feature, allowing customers to see the furniture with completely accurate size, textures, and colors in their room before purchasing.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Card.Text>
        3D Model | Shade | UV unwrap | Bake 
      </Card.Text>
    </Card.Footer>
  </Card>
           <Card>
  <Player
      playsInline
      poster={dog2}
      src={video}
    />
    <Card.Body>
      <Card.Title>Talent Show </Card.Title>
      <Card.Text>
        Animation created based on the prompt "One act in a talent show" -
        Character animation, modeling, rigging, UVs, props, materials, lighting all done in Maya.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Card.Text>
        Animation | Character Design | Modeling 
      </Card.Text>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={dog} />
    <Card.Body>
      <Card.Title>Shiba Character Asset</Card.Title>
      <Card.Text>
        Shiba character asset created for the Talent Show animation.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Card.Text>
        3D Model | Shade | UV unwrap | Bake
      </Card.Text>
    </Card.Footer>
  </Card>
</CardDeck>
</div>
    )
  }
}

export default Work3D;