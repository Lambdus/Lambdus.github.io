// Find the latest version by visiting https://unpkg.com/three. The URL will
// redirect to the newest stable release.
import * as THREE from 'https://unpkg.com/three/build/three.module.js';


const canvas = document.querySelector("#threedcanvas")
const renderer = new THREE.WebGLRenderer({canvas});
//renderer.setSize(window.innerWidth, window.innerHeight)


const fov = 75;
const aspect = 2;  // the canvas default
const near = 0.1;
const far = 100;
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.z = 2;

const scene = new THREE.Scene();

{
    const color = 0xFFFFFF;
    const intensity = 1;
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(-1, 2, 4);
    scene.add(light);
}

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshPhongMaterial( { color: 0x8844a } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

// const color = 0xFFFFFF;
// const intensity = 1;
// const light = new THREE.DirectionalLight(color, intensity);
// light.position.set(-1, 2, 4);
// scene.add(light);

camera.position.z = 5;


function animate() {
    requestAnimationFrame( animate );
    const canvas = renderer.domElement;
    renderer.setSize(canvas.clientWidth, canvas.clientHeight, false)
    camera.aspect = canvas.clientWidth / canvas.clientHeight;
    
    camera.updateProjectionMatrix();

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

	renderer.render( scene, camera );

    
}
animate();


