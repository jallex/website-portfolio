import React, { Component } from 'react';
import './demoReel.css';
import pic from '../images/demo-reel/wip.gif';

class DemoReel extends Component {
  render() {
    return(
      <div className="demo-reel-page" id="demo-reel"><h1>Demo Reel</h1>
      <img className= "img" src={pic}/>
      </div>
    )
  }
}

export default DemoReel;
