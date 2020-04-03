import React, { Component } from 'react';

import './home.css';
import * as THREE from "three";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

class Home extends Component {
  
  componentDidMount() {
      var scene = new THREE.Scene();
      scene.background = new THREE.Color(0xC9886D);
      var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
  
      var width = 100;
      var height = 100;
      var intensity = 1.4;
      var rectLight = new THREE.RectAreaLight( 0xffffff, intensity,  width, height );
      rectLight.position.set( 1, 1, 10 );
      rectLight.lookAt( 1, 1, 3 );
      scene.add( rectLight )
  
      let renderer = new THREE.WebGLRenderer({antialias: true});
      renderer.setSize( window.innerWidth, window.innerHeight );
      document.getElementsByClassName("image")[0].appendChild( renderer.domElement );
  
  
      camera.position.z = 5;
      var animate = function () {
        requestAnimationFrame( animate );
        renderer.render( scene, camera );
      };
  
      let loader = new GLTFLoader();
      loader.load(
        "/orange-model.glb",
        ( gltf ) => {
            // called when the resource is loaded
          console.log(gltf.scene)
          scene.add(gltf.scene);
        },
        ( xhr ) => {
          console.log(xhr);
          // called while loading is progressing
          // console.log("The xhr warning isL ",xhr.srcElement.responseText);
      }
        );
  
      animate();
  
  }

  render() {
    return(
      <div style={{width: '100%', margin: 0, padding: 0}} className="homeText" id="home" alignitems="center">
          <div className="home-grid">
            <div className="image">
            <div ref={ref => (this.mount = ref)} />
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
