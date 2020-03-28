import React, { Component, useEffect, useState } from 'react';
import ReactDOM from "react-dom";
import { Grid, Cell } from 'react-mdl';
import useWindowDimensions from '../hooks/useWindowDimensions';
import './about.css';
import Flexbox from 'flexbox-react';

const About = () => {
    return(
      <div className="aboutText" alignItems="center">
          <Grid className="about-grid">
            <Cell col={12}></Cell>
          </Grid>
          <h3>Hi! I'm Jackie Allex and I'm a developer and animator. </h3>
          <div>
    </div>
          </div>
    )
};

export default About;
