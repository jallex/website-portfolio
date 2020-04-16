import React, { Component } from "react";
import { Link } from "react-scroll";
import './navbar.css';
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

class Navbarg extends Component {
    state = {};
    render(){
        return (
            <div className="nav" id="navbar">
                <Navbar expand="md" className = "navv">
                
        <div className="home">
        <Link
        style={{textDecoration: 'none', color: 'white'}}
    activeClass="active"
    to="home"
    spy={true}
    smooth={true}
    duration= {500}
>Home</Link>
</div>
<Nav className="ml-auto">
         <ul className="nav-items">
<li className="nav-item">
<Link
style={{textDecoration: 'none', color: 'white'}}
    activeClass="active"
    to="about"
    spy={true}
    smooth={true}
    offset={-50}
    duration= {500}
>About</Link>
</li>
<li className="nav-item">
<Link
style={{textDecoration: 'none', color: 'white'}}
    activeClass="active"
    to="demo-reel"
    spy={true}
    smooth={true}
    offset={-50}
    duration= {500}
>Demo Reel</Link>
</li>
<li className="nav-item">
<Link
style={{textDecoration: 'none', color: 'white'}}
    activeClass="active"
    to="code"
    spy={true}
    smooth={true}
    offset={-50}
    duration= {500}
>Code</Link>
</li>
<li className="nav-item">
<Link
style={{textDecoration: 'none', color: 'white'}}
    activeClass="active"
    to="work3D"
    spy={true}
    smooth={true}
    offset={-50}
    duration= {500}
>3D Modeling and Animation</Link>
</li>
<li className="nav-item">
<Link
style={{textDecoration: 'none', color: 'white'}}
    activeClass="active"
    to="artwork"
    spy={true}
    smooth={true}
    offset={-50}
    duration= {500}
>Artwork</Link>
</li>
<li className="nav-item">
<Link
style={{textDecoration: 'none', color: 'white'}}
    activeClass="active"
    to="contact"
    spy={true}
    smooth={true}
    offset={-50}
    duration= {500}
>Contact</Link>
</li>
<li className="nav-item">
<Link
style={{textDecoration: 'none', color: 'white'}}
>Resume</Link>
</li>
    </ul>
    </Nav>
    </Navbar>
    </div>

    );
    }
}

export default Navbarg;
