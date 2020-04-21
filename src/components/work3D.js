import React, { Component } from 'react';
import { Card, CardDeck } from "react-bootstrap";
import './work3D.css';
import dog from '../images/3D/dog.png';
import dog2 from '../images/3D/dog2.png';
import { Player } from 'video-react';
import "../../node_modules/video-react/dist/video-react.css"; // import css
import video from '../images/3D/final_video.mp4';

class Work3D extends Component {
  render() {
    return(
      <div className="work3D-page" id="work3D"><h1>3D Modeling and Animation</h1>
           <CardDeck className="deck1">
           <Card>
           <Player
      playsInline
      poster={dog2}
      src={video}
    />
    <Card.Img variant="top" src={dog} />
    <Card.Body>
      <Card.Title>Talent Show </Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Card.Text>
        Animation | Character Design | Modeling 
      </Card.Text>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Chair 3D model for AR</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
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