import React, { Component, useEffect, useState } from 'react';
import ReactDOM from "react-dom";
import { Grid, Cell } from 'react-mdl';
import './about.css';
import Flexbox from 'flexbox-react';
import { Element } from 'react-scroll'

class About extends Component {
  render() {
    return(
      <section className="aboutText"  id="about" alignItems="center">
          <Grid className="about-grid">
            <Cell col={12}></Cell>
          </Grid>
          <h3>Hi! I'm Jackie Allex and I'm a developer and animator. </h3>
          </section>
    )
}
}

export default About;
