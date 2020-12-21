import React, { Component } from 'react';
import './artwork.css';
import { PopupboxManager, PopupboxContainer } from 'react-popupbox';
import "react-popupbox/dist/react-popupbox.css"


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

  openPopupbox(img) {
    const content = (
      <div>
       <img className="modal-img" alt="" src={img} />
      </div>
    )
    PopupboxManager.open({ content })
    this.setState({
      open: false
  });
  }

  render() {

    let tileStyle = {};
    // When tile clicked
        tileStyle = {
          width: 'auto',
          height: '100%'
        };


      return (
          <div className="tile">
            {this.state.open && 
              <img
                  onMouseEnter={this._mouseEnter}
                  onMouseLeave={this._mouseLeave}
                  src={this.props.data.image}
                  onClick={this._clickHandler}
                  alt={this.props.data.name}
                  style={tileStyle}
              /> && this.openPopupbox(this.props.data.image)}
            {!this.state.open &&  <img
                  onMouseEnter={this._mouseEnter}
                  onMouseLeave={this._mouseLeave}
                  src={this.props.data.image}
                  onClick={this._clickHandler}
                  alt={this.props.data.name}
                  style={tileStyle}
            /> }
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
    const popupboxConfig = {
      titleBar: {
        enable: true,
      },
      fadeIn: true,
      fadeInSpeed: 500
    }
    const data = [ {
      id: 2,
      name: "Forest",
      image: "https://user-images.githubusercontent.com/44556715/90457269-13980680-e0c9-11ea-8a00-366dae248570.jpg"
    }, {
      id: 3,
      name: "Bottles",
      image: "https://user-images.githubusercontent.com/44556715/90457270-13980680-e0c9-11ea-8eb7-6a731c506df7.jpg"
    },
    {
      id: 1,
      name: "Ballet",
      image: "https://user-images.githubusercontent.com/44556715/90457265-1266d980-e0c9-11ea-896a-1ad1f15c09d3.png"
    },
    {
      id: 4,
      name: "Dog",
      image: "https://user-images.githubusercontent.com/44556715/90457271-13980680-e0c9-11ea-9b35-f6cb875ac530.JPG"
    }, {
      id: 5,
      name: "Fire",
      image: "https://user-images.githubusercontent.com/44556715/90457272-14309d00-e0c9-11ea-8611-9a53a58086e7.JPG"
    }, {
      id: 6,
      name: "Water",
      image: "https://user-images.githubusercontent.com/44556715/90457274-14309d00-e0c9-11ea-976f-c7e58748c066.JPG"
    }, {
      id: 7,
      name: "Earth",
      image: "https://user-images.githubusercontent.com/44556715/90457276-14309d00-e0c9-11ea-9bec-f8ed95268745.JPG"
    }, {
      id: 8,
      name: "Wind",
      image:"https://user-images.githubusercontent.com/44556715/90457277-14c93380-e0c9-11ea-8a59-476ec3ef5116.JPG"
    }, {
      id: 9,
      name: "Eye fire",
      image: "https://user-images.githubusercontent.com/44556715/90457278-14c93380-e0c9-11ea-85c6-26cd6da189e5.JPG"
    }, {
      id: 10,
      name: "Eye water",
      image: "https://user-images.githubusercontent.com/44556715/90457281-1561ca00-e0c9-11ea-9a79-a1cb6bb99a5a.JPG"
    }, {
      id: 12,
      name: "Watch",
      image: "https://user-images.githubusercontent.com/44556715/90457282-15fa6080-e0c9-11ea-9480-dcb243ce4c19.jpeg"
    }, 
    {
      id: 17,
      name: "Skeleton",
      image: "https://user-images.githubusercontent.com/44556715/90457291-198de780-e0c9-11ea-8d31-01398b290543.jpg"
    },
    {
      id: 16,
      name: "Eggs",
      image: "https://user-images.githubusercontent.com/44556715/90457290-18f55100-e0c9-11ea-9478-c803d83f7b43.JPG"
    },{
      id: 13,
      name: "Astro red",
      image: "https://user-images.githubusercontent.com/44556715/90457283-15fa6080-e0c9-11ea-90e0-2244e940300d.gif"
    }, {
      id: 14,
      name: "Astro blue",
      image: "https://user-images.githubusercontent.com/44556715/90457284-1692f700-e0c9-11ea-9e3d-41e919305763.gif"
    }, {
      id: 15,
      name: "Hand animated",
      image: "https://user-images.githubusercontent.com/44556715/90457285-1692f700-e0c9-11ea-900b-24937e305571.gif"
    },  {
      id: 18,
      name: "Hand pencil",
      image: "https://user-images.githubusercontent.com/44556715/90457293-198de780-e0c9-11ea-8db8-e5873807ab90.JPG"
    }];
    return(
      <div className="artwork-page" id="artwork"><h1>Artwork and Illustration</h1>
      <Thing data = {data} />
      <PopupboxContainer { ...popupboxConfig } />
      </div>
    )
  }
}

export default Artwork;
