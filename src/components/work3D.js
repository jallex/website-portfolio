import React, { Component } from 'react';
import './work3D.css';
import { Card, CardDeck, Carousel } from "react-bootstrap";

class Work3D extends Component {
  
  render() {
    
    return(
      <div className="work3D-page" id="work3D"><h1>3D Modeling and Animation</h1>

<CardDeck className="deck1">
           <Card>
           <Carousel interval = "100000000000000">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={"https://user-images.githubusercontent.com/44556715/99191394-73d72c80-273a-11eb-8c71-954fc65aefc9.jpg"}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={"https://user-images.githubusercontent.com/44556715/102714720-7fb89000-429e-11eb-9308-cbf302f9b0d8.jpg"}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={"https://user-images.githubusercontent.com/44556715/99191401-76398680-273a-11eb-9a0c-766886960023.jpg"}
      alt="First slide"
    />
  </Carousel.Item>
  </Carousel>
    <Card.Body>
      <Card.Title>Kitchen Environment Modeling</Card.Title>
      <Card.Text>
       I modeled my kitchen from scratch using real-life reference, done in Maya. Technical execution included utilizing holding edges, and keeping realistic proportions and forms. Shaded with natural surfacing so that metallic objects are more specular, and others are more diffuse.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Card.Text>
        3D Modeling | Maya | Shading | Environments
      </Card.Text>
    </Card.Footer>
  </Card>
  <Card>
           <Carousel interval = "100000000000000">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={"https://user-images.githubusercontent.com/44556715/102714901-d96d8a00-429f-11eb-9d2a-ca3db882abb2.png"}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={"https://user-images.githubusercontent.com/44556715/102714927-028e1a80-42a0-11eb-8f44-b7db428f704c.png"}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={"https://user-images.githubusercontent.com/44556715/99191401-76398680-273a-11eb-9a0c-766886960023.jpg"}
      alt="First slide"
    />
  </Carousel.Item>
  </Carousel>
    <Card.Body>
      <Card.Title>Character Model</Card.Title>
      <Card.Text>
       Character modeled from scratch, done in Maya, and textures created with Substance Painter and Photoshop. I took video game concept art of a character from Horizon Zero Dawn as reference, and modeled as well as textured the body, face, hands, clothes, and entire model. 
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Card.Text>
        3D Modeling | Maya | Substance Painter | Shading | Character Art
      </Card.Text>
    </Card.Footer>
  </Card>
  </CardDeck>
  <CardDeck className="deck1">
           <Card>
           <Card.Img variant="top" src={"https://user-images.githubusercontent.com/44556715/99191831-79824180-273d-11eb-9d95-1856838e3ae3.png"} />
    <Card.Body>
      <Card.Title>Game Animations </Card.Title>
      <Card.Text>
        Walkcycle, Idle cycle, 
        Character assets taken from Mixamo. 
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Card.Text>
        Maya | Animation | Game Development  
      </Card.Text>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={"https://user-images.githubusercontent.com/44556715/90456909-1cd4a380-e0c8-11ea-9953-5100731ec972.png"} />
    <Card.Body>
      <Card.Title>Moon Game </Card.Title>
      <Card.Text>
        Moon Game created using Unreal Engine 4, Maya, Substance Painter, and ZBrush in collaboration with 2 other artists for our Animation for Games course. 
        <a href="https://vimeo.com/user107311947/review/448719019/c05bef5d2b" rel="noopener noreferrer" target="_blank">
          See project!
          </a>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Card.Text>
        Unreal Engine 4 | Game Development | Maya | Substance Painter | ZBrush
      </Card.Text>
    </Card.Footer>
  </Card>
  </CardDeck>


           <CardDeck className="deck1">
           <Card>
    <Card.Img variant="top" src={"https://user-images.githubusercontent.com/44556715/90456843-f6af0380-e0c7-11ea-86c5-20096f24363f.png"} />
    <Card.Body>
      <Card.Title>Chair 3D model for AR</Card.Title>
      <Card.Text>
        Chair 3D asset modeled from scratch based on photo reference for furniture company's AR feature, allowing customers to see the furniture with completely accurate size, textures, and colors in their room before purchasing.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Card.Text>
        3D Modeling | Blender | Shading | UV unwrap | Bake 
      </Card.Text>
    </Card.Footer>
  </Card>
           <Card>
           <Card.Img variant="top" src={"https://user-images.githubusercontent.com/44556715/90457038-750ba580-e0c8-11ea-889b-40087c6dbdc4.png"} />
    <Card.Body>
      <Card.Title>Talent Show </Card.Title>
      <Card.Text>
        Animation created based on the prompt "One act in a talent show" -
        Character animation, modeling, rigging, UVs, props, materials, lighting all done in Maya. 
      </Card.Text>
      <a href="https://vimeo.com/user107311947/review/448719019/c05bef5d2b" rel="noopener noreferrer" target="_blank">
          See project!
          </a>
    </Card.Body>
    <Card.Footer>
    <Card.Text>
        Animation | Maya | Character Design | Modeling 
      </Card.Text>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={"https://user-images.githubusercontent.com/44556715/90456909-1cd4a380-e0c8-11ea-9953-5100731ec972.png"} />
    <Card.Body>
      <Card.Title>Shiba Character Asset</Card.Title>
      <Card.Text>
        Shiba character asset created for the Talent Show animation.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Card.Text>
        3D Modeling | Maya | Shading | UV unwrap | Bake
      </Card.Text>
    </Card.Footer>
  </Card>
</CardDeck>
</div>
    )
  }
}

export default Work3D;