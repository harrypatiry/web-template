const section = document.querySelector("section.obj")
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setClearColor( 0x000000, 0 );
renderer.setSize( window.innerWidth, window.innerHeight );
section.appendChild( renderer.domElement );
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshLambertMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
const light = new THREE.AmbientLight( 0x404040 );
const directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
scene.add( cube, light, directionalLight );
scene.background = null;
camera.position.z = 5;


function animate() {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}
animate();