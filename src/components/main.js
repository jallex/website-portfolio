import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import DemoReel from './demoReel';
import Contact from './contact';
import Code from './code';
import work3D from './work3D.js';
import Artwork from './artwork';
import About from './about';
import Home from './home';


const Main = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/demoReel" component={DemoReel} />
    <Route path="/contact" component={Contact} />
    <Route path="/code" component={Code} />
    <Route path="/work3D" component={work3D} />
    <Route path="/artwork" component={Artwork} />
    <Route path="/about" component={About} />
  </Switch>
)

export default Main;
