import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './landingPage';
import DemoReel from './demoReel';
import Contact from './contact';
import Code from './code';
import work3D from './work3D.js';
import Artwork from './artwork';
import About from './about';


const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/demoReel" component={DemoReel} />
    <Route path="/contact" component={Contact} />
    <Route path="/code" component={Code} />
    <Route path="/work3D" component={work3D} />
    <Route path="/artwork" component={Artwork} />
    <Route path="/about" component={About} />
  </Switch>
)

export default Main;
