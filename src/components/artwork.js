import React, { Component } from 'react';
import './artwork.css';
import { Card, CardDeck } from "react-bootstrap";
import image1 from '../images/My artwork/1.png';
import image2 from '../images/My artwork/2.jpg';
import image3 from '../images/My artwork/3.jpg';
import image4 from '../images/My artwork/4.JPG';
import image5 from '../images/My artwork/5.JPG';
import image6 from '../images/My artwork/6.JPG';
import image7 from '../images/My artwork/7.JPG';
import image8 from '../images/My artwork/8.JPG';
import image9 from '../images/My artwork/9.JPG';
import image10 from '../images/My artwork/10.JPG';
import image12 from '../images/My artwork/12.JPG';
import image13 from '../images/My artwork/13.gif';
import image14 from '../images/My artwork/14.gif';
import image15 from '../images/My artwork/15.gif';
import image16 from '../images/My artwork/16.JPG';
import image17 from '../images/My artwork/17.jpg';
import image18 from '../images/My artwork/18.JPG';


class Tiles extends React.Component {
  render() {
      // Create tile for each item in data array
      // Pass data to each tile and assign a key
      return (
          <div className="tiles">
              {this.props.data.map((data) => {
                  return <Tile data={data} key={data.id} />
              })}
          </div>
      );
  }
}

class Tile extends React.Component {
  constructor(props) {
          super(props);
          this.state = {
              open: false,
              mouseOver: false
          };
          // Bind properties to class instance
          this._clickHandler = this._clickHandler.bind(this);
          this._mouseEnter = this._mouseEnter.bind(this);
          this._mouseLeave = this._mouseLeave.bind(this);
      }
      // Event handlers to modify state values
  _mouseEnter(e) {
      e.preventDefault();
      if (this.state.mouseOver === false) {
          console.log(this.props.data.name);
          this.setState({
              mouseOver: true
          })
      }
  }
  _mouseLeave(e) {
      e.preventDefault();
      if (this.state.mouseOver === true) {
          this.setState({
              mouseOver: false
          })
      }
  }
  _clickHandler(e) {
      e.preventDefault();
      if (this.state.open === false) {
          this.setState({
              open: true
          });
      } else {
          this.setState({
              open: false
          });
      }
  }

  render() {
      // Modify styles based on state values
      let tileStyle = {};
      let headerStyle = {};
      let zoom = {};
      // When tile clicked
      if (this.state.open) {
          tileStyle = {
              position: 'absolute',
              top: '50%',
              left: '50%',
              margin: '0',
              boxShadow: '0 0 40px 5px rgba(0, 0, 0, 0.3)',
              transform: 'none'
          };
      } else {
          tileStyle = {
            width: 'auto',
            height: '100%'
          };
      }

      return (
          <div className="tile">
              <img
                  onMouseEnter={this._mouseEnter}
                  onMouseLeave={this._mouseLeave}
                  onClick={this._clickHandler}
                  src={this.props.data.image}
                  alt={this.props.data.name}
                  style={tileStyle}
              />
          </div>
      );
  }
}

class Thing extends React.Component {
  render() {
      return (
          <Tiles data={this.props.data} />
      );
  }
}

class Artwork extends Component {
  render() {
    const data = [{
      id: 1,
      name: "Ballet",
      image: image1
    }, {
      id: 2,
      name: "Forest",
      image: image2
    }, {
      id: 3,
      name: "Whale",
      image: image3
    },
    {
      id: 4,
      name: "Mountain",
      image: image4
    }, {
      id: 5,
      name: "Boat",
      image: image5
    }, {
      id: 6,
      name: "Flowers",
      image: image6
    }, {
      id: 7,
      name: "Fire",
      image: image7
    }, {
      id: 8,
      name: "Garden",
      image:image8
    }, {
      id: 9,
      name: "Bridge",
      image: image9
    }, {
      id: 10,
      name: "Bridge",
      image: image10
    }, {
      id: 12,
      name: "Bridge",
      image: image12
    }, {
      id: 13,
      name: "Bridge",
      image: image13
    }, {
      id: 14,
      name: "Bridge",
      image: image14
    }, {
      id: 15,
      name: "Bridge",
      image: image15
    }, {
      id: 16,
      name: "Bridge",
      image: image16
    }, {
      id: 17,
      name: "Bridge",
      image: image17
    }, {
      id: 18,
      name: "Bridge",
      image: image18
    }];
    return(
      <div className="artwork-page" id="artwork"><h1>Artwork</h1>
       <Thing data = {data} />
</div>
    )
  }
}

export default Artwork;
