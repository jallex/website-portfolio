import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import './home.css';

class Home extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 0, padding: 0}} className="homeText" id="home" alignItems="center">
          <div className="home-grid">
            <div className="image">
            <img
              src="https://p7.hiclipart.com/preview/961/21/288/low-poly-fruit-art-rendering-3d-modeling-diamond-perspective-mango.jpg"
              alt="3dModel"
              className="model-img"
              />
              </div>
            <div className="banner-text">
              <h1>Jackie Allex</h1>
              <div className="social-links">
              <div className="linked-in">
              <a href="https://www.linkedin.com/in/jacquelineallex" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>
          </div>
          <div className="github">
          <a href="http://www.github.com/jallex" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>
          </div>
          </div>
              </div>

              </div>
            </div>
            
    )
  }
}

export default Home;
