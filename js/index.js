import * as THREE from 'three';

document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('container');

    // Set up the scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.5, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    // Load the texture (logo)
    const loader = new THREE.TextureLoader();
    const texture = loader.load('img/logoBlanc.png');

    // Create materials for each face with white background and the logo texture
    const materials = [];
    for (let i = 0; i < 6; i++) {
        materials.push(new THREE.MeshBasicMaterial({
            map: texture,
            color: 0xffffff, // White background color
            opacity: 1
        }));
    }

    // Create a cube with the materials
    const geometry = new THREE.BoxGeometry();
    const cube = new THREE.Mesh(geometry, materials);
    scene.add(cube);

    camera.position.z = 5;

    // Animation loop
    function animate() {
        requestAnimationFrame(animate);
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        renderer.render(scene, camera);
    }
    animate();

    // Redirect after 3 seconds (if needed)
    setTimeout(function () {
        window.location.href = 'home.html';
    }, 3000);
});