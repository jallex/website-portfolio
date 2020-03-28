import React, { Component } from 'react';
import './App.css';
import { Header, Layout, Navigation, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';
import About from './components/about';
import DemoReel from './components/demoReel';
import Code from './components/code';
import Work3D from './components/work3D';
import Artwork from './components/artwork';
import Contact from './components/contact';
import Home from './components/home';


const App = () => {
  return (
    <div className="content">
        <Layout>
    <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">Home</Link>} scroll >
    <Navigation>
        <Link style={{textDecoration: 'none', color: 'white'}} to="/about">About</Link>
        <Link style={{textDecoration: 'none', color: 'white'}} to="/demoReel">Demo Reel</Link>
        <Link style={{textDecoration: 'none', color: 'white'}} to="/code">Code</Link>
        <Link style={{textDecoration: 'none', color: 'white'}} to="/work3D">3D Modeling and Animation</Link>
        <Link style={{textDecoration: 'none', color: 'white'}} to="/artwork">Artwork</Link>
        <Link style={{textDecoration: 'none', color: 'white'}} to="/contact">Contact</Link>
    </Navigation>
    </Header>
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
  </Layout>
</div> 
  )
};

export default App;