import React, { Component } from 'react';
import './home.css';
import * as THREE from "three";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import { Interaction } from 'three.interaction';

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
      
      var light = new THREE.PointLight( 0xffffff, 30, 100 );
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

        const interaction = new Interaction(renderer, scene, camera);


        // Create a texture loader so we can load our image file
var loader2 = new THREE.TextureLoader();

// Load an image file into a custom material
var material = new THREE.MeshLambertMaterial({
  map: loader2.load('https://t4.ftcdn.net/jpg/00/89/00/95/240_F_89009515_8ZOWFnUMhYynhDCXWHNGkgg0X7EbmcOl.jpg')
});

// create a plane geometry for the image with a width of 10
// and a height that preserves the image's aspect ratio
var geometry = new THREE.PlaneGeometry(10, 10*.75);

// combine our image geometry and material into a mesh
var mesh2 = new THREE.Mesh(geometry, material);
mesh2.cursor = 'pointer';
mesh2.on('touchstart', function(ev) {if(mesh.material.wireframe){
  mesh.material.wireframe = false;
}
  else {
    mesh.material.wireframe = true;
  }});

// set the position of the image mesh in the x,y,z dimensions
mesh2.position.set(1, 1, 2 )
mesh2.scale.set(0.04, 0.04, 0.04)

// add the image to the scene
scene.add(mesh2);


      var animate = function () {
        requestAnimationFrame( animate );
        if (mesh) mesh.rotation.y += 0.02;
        renderer.render( scene, camera );
      };

      mesh2.addEventListener(`mousedown`, function () {
        if (mesh2) {
          if(mesh.material.wireframe)
          mesh.material.wireframe = false;
          else {
            mesh.material.wireframe = true;
          }
        }
    })



  
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
