import React, { Component } from 'react';

import './home.css';
import * as THREE from "three";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";

class Home extends Component {

  // to do: make size of model reactive to changes in screen size, add button that allows wireframe

  componentDidMount() {
      var scene = new THREE.Scene();
      scene.background = new THREE.Color(0xC9886D);
      var camera = new THREE.PerspectiveCamera( 35, window.innerWidth/window.innerHeight, 0.1, 1000 );
      camera.rotation.x = .05;
  
      var width = 100;
      var height = 100;
      var intensity = 3.7;
      var rectLight = new THREE.RectAreaLight( 0xffffff, intensity,  width, height );
      rectLight.position.set( 1, 1, 10 );
      rectLight.lookAt( 1, 1, 3 );
      scene.add( rectLight )
      
      var light = new THREE.PointLight( 0x00D8FF, 30, 100 );
      light.position.set( 50, 50, 50 );
      scene.add( light );

      let renderer = new THREE.WebGLRenderer({antialias: true});
      renderer.setSize( window.innerWidth / 3.5, window.innerHeight / 3.5 );
      document.getElementsByClassName("image")[0].appendChild( renderer.domElement );


      camera.position.z = 5;

      var mesh;

      let loader = new GLTFLoader();
      loader.load(
        "/orange-model2.glb",
        ( gltf ) => {
            // called when the resource is loaded
          console.log(gltf.scene);
          scene.add(gltf.scene);
          mesh = gltf.scene.children[0];
          if (mesh) mesh.rotation.x += .8;
          gltf.scene.traverse( function ( object ) {

						if ( object.isMesh ) object.castShadow = true;

          } );
        },
        ( xhr ) => {
          console.log(xhr);
          // called while loading is progressing
          // console.log("The xhr warning isL ",xhr.srcElement.responseText);
      }
        );

      var animate = function () {
        requestAnimationFrame( animate );
        if (mesh) mesh.rotation.y += 0.02;
        renderer.render( scene, camera );
      };

  
      animate();
  }

  handleWindowResize = () => {
    const width = this.el.clientWidth;
    const height = this.el.clientHeight;

    this.renderer.setSize(width, height);
    this.camera.aspect = width / height;

    // Note that after making changes to most of camera properties you have to call
    // .updateProjectionMatrix for the changes to take effect.
    this.camera.updateProjectionMatrix();
  };

  myfunction() {
      // mesh.material.wireframe = true;
  }


  render() {
    var mesh;
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
