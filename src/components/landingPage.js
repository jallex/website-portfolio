import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
           {/*
            <img
              src=""
              alt="avatar"
              className="avatar-img"
              />
           */}
            <div className="banner-text">
              <h1>Jackie Allex</h1>

            <hr/>


        <div className="social-links">

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/jacquelineallex" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          {/* Github */}
          <a href="http://www.github.com/jallex" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>

        </div>
        <p>website personally developed with ♥️</p>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
