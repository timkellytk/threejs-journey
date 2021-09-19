const scene = new THREE.Scene();
const canvas = document.querySelector('.webgl');

// Red cube
const geometery = new THREE.BoxGeometry(1,1,1);
const material = new THREE.MeshBasicMaterial({ color: 'red' });
const mesh = new THREE.Mesh(geometery, material);
scene.add(mesh);

// Camera - you need a point of view
const sizes = {
	width: 800, height: 600
}
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.x = 2;
camera.position.y = 1;
camera.position.z = 3;
scene.add(camera);

// Renderer
const renderer = new THREE.WebGLRenderer({
	canvas
})

renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera,);