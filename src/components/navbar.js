import React, { Component } from "react";
import { Link } from "react-scroll";
import './navbar.css';

class Navbar extends Component {
    state = {};
    render(){
        return (
    <div className="navbar">
        <Link
    activeClass="active"
    to="home"
    smooth={true}
    duration= {500}
>Home</Link>

<Link
    activeClass="active"
    to="about"
    smooth={true}
    duration= {500}
>About</Link>

<Link
    activeClass="active"
    to="demo-reel"
    smooth={true}
    duration= {500}
>Demo Reel</Link>

<Link
    activeClass="active"
    to="code"
    smooth={true}
    duration= {500}
>Code</Link>

<Link
    activeClass="active"
    to="work3D"
    smooth={true}
    duration= {500}
>3D Modeling and Animation</Link>

<Link
    activeClass="active"
    to="artwork"
    smooth={true}
    duration= {500}
>Artwork</Link>

<Link
    activeClass="active"
    to="contact"
    smooth={true}
    duration= {500}
>Contact</Link>
    </div>
    );
    }
}

export default Navbar;
