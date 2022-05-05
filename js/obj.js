import * as THREE from "../node_modules/three/build/three.module.js"
//import {GLTFLoader} from "../node_modules/three/examples/jsm/loaders/GLTFLoader.js"

const section = document.querySelector("section.obj")
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setClearColor( 0x000000, 0 );
renderer.setSize( window.innerWidth, window.innerHeight );
section.appendChild( renderer.domElement );

const textureLoader = new THREE.TextureLoader();
const rockBase = textureLoader.load('assets/rock.png');
const rockNormal = textureLoader.load('assets/rocknormal.png');
const rockDisplacement = textureLoader.load('assets/rockdisplacement.png');

// const loader = new GLTFLoader();
// let geometry;
// loader.load('assets/cube.gltf', function(gltf) {
//     geometry = gltf.scene;
//     scene.add(gltf.scene);
// });
const geometry = new THREE.BoxGeometry(1.5, 1.5, 1.5, 50, 50, 50);
//const geometry = new THREE.DodecahedronGeometry(1, 1);
//const geometry = new THREE.TorusKnotGeometry(1, 1,1,1,10);
const material = new THREE.MeshPhongMaterial( { 
    wireframe: true,
    map: rockBase,
    normalMap: rockNormal,
    displacementMap: rockDisplacement,
    displacementScale: .2
    
} );
const cube = new THREE.Mesh( geometry, material );

const outerGeometry = new THREE.BoxGeometry(1.5, 1.5, 1.5, 50, 50, 50);
const outerMaterial = new THREE.MeshPhongMaterial( { 
    wireframe: true,
    map: rockBase,
    normalMap: rockNormal,
    
} );
const outer = new THREE.Mesh( outerGeometry, outerMaterial );

const light = new THREE.AmbientLight( 0x404040 );
const directionalLight = new THREE.DirectionalLight( 0xffffff, .9 );
scene.add( outer, cube, light, directionalLight );
scene.background = null;


camera.position.z = 5;

function animate() {
	requestAnimationFrame( animate );
    const currentTimeline = window.scrollY/3000;
    const rx = currentTimeline * Math.PI * 2;
    const ry = currentTimeline * Math.PI * 2;
    cube.rotation.set(rx, ry, 0);
    cube.material.displacementScale = currentTimeline/4;
    outer.rotation.set(rx, ry, 0);
	renderer.render( scene, camera );
}
animate();