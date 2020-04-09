import React, { Component } from 'react';
import './home.css';
import * as THREE from "three";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import { Interaction } from 'three.interaction';
import pic from "../images/CLICK3.png";
class Home extends Component {

  // to do: add button that allows wireframe, add orbit controls

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
      renderer.autoClear = false;

      camera.position.z = 5;

      var mesh;

      let loader = new GLTFLoader();
      loader.load(
        "/orange-model2.glb",
        ( gltf ) => {
            // called when the resource is loaded
          console.log(gltf.scene);
          mesh = gltf.scene.children[0];
          mesh.cursor = 'pointer';
          mesh.on('touchstart', function(ev) {mesh.material.wireframe = !mesh.material.wireframe });
          scene.add(gltf.scene);
          if (mesh) mesh.rotation.x += .8;
          mesh.addEventListener(`mousedown`, function () {
            if (mesh2) {
              mesh.material.wireframe = !mesh.material.wireframe;
            }
        })
          gltf.scene.traverse( function ( object ) {

						if ( object.isMesh ) object.castShadow = true;

          } );
        },
        function ( error ) {
          console.log( 'An error happened' );
      },
        ( xhr ) => {
          console.log(xhr);
          // called while loading is progressing
          // console.log("The xhr warning isL ",xhr.srcElement.responseText);
      }
        );

        const interaction = new Interaction(renderer, scene, camera);

        var scene2 = new THREE.Scene();
        // Create a texture loader so we can load our image file
var loader2 = new THREE.TextureLoader();

// Load an image file into a custom material
var material = new THREE.MeshBasicMaterial({
  map: loader2.load(pic)
});
material.anisotropy = renderer.getMaxAnisotropy();
material.map.minFilter = THREE.LinearFilter;

// create a plane geometry for the image with a width of 10
// and a height that preserves the image's aspect ratio
var geometry = new THREE.PlaneGeometry(10, 10*.75);

// combine our image geometry and material into a mesh
var mesh2 = new THREE.Mesh(geometry, material);
mesh2.cursor = 'pointer';
mesh2.on('touchstart', function(ev) {mesh.material.wireframe = !mesh.material.wireframe });

// set the position of the image mesh in the x,y,z dimensions
mesh2.position.set(1, -.5, 2.4)
mesh2.scale.set(0.13, 0.07, 0.2)

// add the image to the scene
//scene.add(mesh2);


      var animate = function () {
        requestAnimationFrame( animate );
        if (mesh) mesh.rotation.y += 0.02;
        renderer.clear();
        renderer.render( scene, camera );
        renderer.render( scene2, camera );
      };

      mesh2.addEventListener(`mousedown`, function () {
        if (mesh2) {
          mesh.material.wireframe = !mesh.material.wireframe;
        }
    })

      animate();

      window.addEventListener( 'resize', onWindowResize, false );

function onWindowResize(){
  
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth / 3.5, window.innerHeight / 3.5 );
}
  }


  render() {
    var mesh;
    return(
      <div style={{width: '100%', margin: 0, padding: 0}} className="homeText" id="home" alignitems="center">
          <div className="home-grid">
            <div className="image">
            <img src = {pic} className="fishes"/>
            <div ref={ref => (this.mount = ref)} />
            </div>
            <div className="banner-text">
              <div className="cont">
              <h1>Jackie Allex</h1>
              </div>
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
