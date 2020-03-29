import React, { Component } from 'react';
import './App.css';
import { Header, Layout, Navigation, Content } from 'react-mdl';
import { Link } from 'react-router-dom';
import About from './components/about';
import DemoReel from './components/demoReel';
import Code from './components/code';
import Work3D from './components/work3D';
import Artwork from './components/artwork';
import Contact from './components/contact';
import Home from './components/home';
import Navbar from './components/navbar';


const App = () => {
  return (
    <div className="content">
        <Navbar/>
  <div className = "sections">
  <div className="div1">
    <Home/>
      <hr/>  
      </div>
  <div style=
  {{width: '100%', margin: 'auto'}} className="div2">
      <About/>
      <hr/>  
      </div>
    <Content>
      </Content>
      <div style=
  {{width: '100%', margin: 'auto'}} className="div3">
      <DemoReel/>
      <hr/>  
      </div>
      <div style=
  {{width: '100%', margin: 'auto'}} className="div4">
      <Code/>
      <hr/>  
      </div>
      <div style=
  {{width: '100%', margin: 'auto'}} className="div5">
      <Work3D/>
      <hr/>  
      </div>
      <div style=
  {{width: '100%', margin: 'auto'}} className="div6">
      <Artwork/>
      <hr/>  
      </div>
      <div style=
  {{width: '100%', margin: 'auto'}} className="div7">
      <Contact/>
      <hr/>  
      </div>
      </div>
</div> 
  )
};

export default App;