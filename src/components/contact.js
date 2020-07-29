import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import './contact.css';
import pic from '../images/ornge.png';

class Contact extends Component {
  state = {
    showMessage: false
  }
  onButtonClickHandler = () => {
   this.setState({showMessage: !this.state.showMessage});
  };

  render() {
    return(
      <div className="contact-page" id="contact">
        <img className= "img" src={pic}/>
        <h1>Contact</h1>
        {this.state.showMessage && <p>jackieallex@gmail.com</p>}
                    <div className="social-links">
                    <div className="email">
      <i onClick={this.onButtonClickHandler} className="fa fa-envelope" aria-hidden="true" />
    </div>
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
    )
  }
}

export default Contact;
