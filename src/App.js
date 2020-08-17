import React from 'react';
import './App.css';
import About from './components/about';
import DemoReel from './components/demoReel';
import Code from './components/code';
import Work3D from './components/work3D';
import Artwork from './components/artwork';
import Contact from './components/contact';
import Home from './components/home';
import Navbar from './components/navbar';
import Fade from 'react-reveal/Fade';

const App = () => {
      return(
<div className="content">
      <div className="navbar">
        <Navbar/>
        </div><div className = "sections">
        <div className="div1"> <Home/> </div>
<div style=
  {{width: '100%', margin: 0}} className="div2"><Fade><About/></Fade>
      </div> 
      <div style=
  {{width: '100%', margin: 0}} className="div3">
  <DemoReel/>
      </div>
      <div style=
  {{width: '100%', margin: 0}} className="div4">
      <Code/>
      </div>
      <div style=
  {{width: '100%', margin: 0}} className="div5">
      <Work3D/>
      </div>
      <div style=
  {{width: '100%', margin: 0}} className="div6">
      <Artwork/>
      </div>
      <div style=
  {{width: '100%', margin: 0}} className="div7">
      <Contact/>
      </div>
      </div>
</div> 
      );
}

export default App;