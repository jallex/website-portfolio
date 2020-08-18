import React, { Component } from 'react';
import './contact.css';

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
          <img className= "img" src={"https://user-images.githubusercontent.com/44556715/90457110-ad12e880-e0c8-11ea-807e-bb61444e60c6.png"} alt=""/> <div className="visiting"><p>Thanks for visiting!</p></div>
      </div>
    )
  }
}

export default Contact;
