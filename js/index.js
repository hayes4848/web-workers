
let rot1 = 0;
let rot2 = 0;
let rot3 = 0;

let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.z = 50;
scene.background = new THREE.Color( 0x201747 );
scene.fog = new THREE.Fog( 0x000000, 250, 1400 );

var dirLight = new THREE.DirectionalLight( 0xffffff, 0.125 );
dirLight.position.set( 0, 0, 10 ).normalize();
scene.add( dirLight );

var pointLight = new THREE.PointLight( 0xffffff, 1.5 );
pointLight.position.set( 0, 100, 90 );
scene.add( pointLight );

let renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// Circle 1
let geometry = new THREE.TorusGeometry( 5, 0.5, 50, 50 );
let material = new THREE.MeshPhongMaterial( { color: 0x00d0ff, flatShading: false } );
let circle1 = new THREE.Mesh( geometry, material );
circle1.position.set(-12, 12, 0);
scene.add( circle1 );

// Circle 3
let circle3 = new THREE.Mesh( geometry, material );
circle3.position.set(12, -12, 0);
scene.add( circle3 );

// Circle 2
let materialWhite = new THREE.MeshPhongMaterial( { color: 0xffffff, flatShading: false } );
let circle2 = new THREE.Mesh( geometry, materialWhite );
circle2.position.set(0, 0, 0);
scene.add( circle2 );

// Cylinder 1
let cylinder = new THREE.CylinderGeometry( 5, 5, 2, 50 );
let cylinder1 = new THREE.Mesh( cylinder, material );
cylinder1.position.set(0, 12, 0);
cylinder1.rotation.x = THREE.Math.degToRad(90);
scene.add( cylinder1 );

// Cylinder 2
let cylinder2 = new THREE.Mesh( cylinder, material );
cylinder2.position.set(12, 12, 0);
cylinder2.rotation.x = THREE.Math.degToRad(90);
scene.add( cylinder2 );

// Cylinder 3
let cylinder3 = new THREE.Mesh( cylinder, material );
cylinder3.position.set(-12, 0, 0);
cylinder3.rotation.x = THREE.Math.degToRad(90);
scene.add( cylinder3 );

// Cylinder 4
let cylinder4 = new THREE.Mesh( cylinder, material );
cylinder4.position.set(12, 0, 0);
cylinder4.rotation.x = THREE.Math.degToRad(90);
scene.add( cylinder4 );

// Cylinder 5
let cylinder5 = new THREE.Mesh( cylinder, material );
cylinder5.position.set(-12, -12, 0);
cylinder5.rotation.x = THREE.Math.degToRad(90);
scene.add( cylinder5 );

// Cylinder 6
let cylinder6 = new THREE.Mesh( cylinder, material );
cylinder6.position.set(0, -12, 0);
cylinder6.rotation.x = THREE.Math.degToRad(90);
scene.add( cylinder6 );

const animate = () => {
  
  requestAnimationFrame( animate );
  
  setTimeout(() => {
    rot1 += 0.02;
    circle1.rotation.y = Math.cos(rot1) * 10;
  }, 1000);

  setTimeout(() => {
    rot2 += 0.02;
    circle2.rotation.y = Math.cos(rot2) * 10;
  }, 2000);

  setTimeout(() => {
    rot3 += 0.02;
    circle3.rotation.y = Math.cos(rot3) * 10;
  }, 3000);


  renderer.render( scene, camera );

};