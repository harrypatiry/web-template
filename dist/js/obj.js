import * as THREE from "https://unpkg.com/three@0.127.0/build/three.module.js";
//import * as THREE from "three/build/three.module"
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
const rockDisplacement = textureLoader.load('assets/rockdisplacement.png');

const geometry = new THREE.BoxGeometry(1.7, 1.7, 1.7, 50, 50, 50);
const material = new THREE.MeshPhongMaterial( { 
    wireframe: false,
    map: rockBase,
    displacementMap: rockDisplacement,
    displacementScale: .2
    
} );
const cube = new THREE.Mesh( geometry, material );

const outerGeometry = new THREE.BoxGeometry(2, 2, 2, 50, 50, 50);
const outerMaterial = new THREE.MeshPhongMaterial( { 
    wireframe: false,
    map: rockBase,
    
} );
const outer = new THREE.Mesh( outerGeometry, outerMaterial );

const innerGeometry = new THREE.DodecahedronGeometry(.7, 1);
const innerMaterial = new THREE.MeshPhongMaterial( { 
    wireframe: false,
    map: rockBase,
    displacementMap: rockDisplacement,
    
} );
const inner = new THREE.Mesh( innerGeometry, innerMaterial );

const light = new THREE.AmbientLight( 0x404040 );
const directionalLight = new THREE.DirectionalLight( 0xffffff, 1 );
scene.add( outer, inner, cube, light, directionalLight );
scene.background = null;


camera.position.z = 5;

function animate() {
    window.addEventListener( 'resize', onWindowResize, false );
    function onWindowResize(){

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
    
        renderer.setSize( window.innerWidth, window.innerHeight );
    
    }
    const currentTimeline = window.scrollY/3000;
    const rx = currentTimeline * Math.PI * 2;
    const ry = currentTimeline * Math.PI * 2;
    cube.rotation.set(rx, ry, 0);
    cube.material.displacementScale = currentTimeline;
    inner.material.displacementScale = currentTimeline * 2;
    outer.rotation.set(rx, ry, 0);
    inner.rotation.set(rx, ry, 0);
    //shard.rotation.set(-rx, ry/4, 0);
    requestAnimationFrame( animate );
	renderer.render( scene, camera );
}
animate();