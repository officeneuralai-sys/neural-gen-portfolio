import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const NeuralBackground = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current || mountRef.current.childElementCount > 0) return;

    let scene: THREE.Scene, 
        camera: THREE.PerspectiveCamera, 
        renderer: THREE.WebGLRenderer, 
        brainParticles: THREE.Points, 
        lines: THREE.LineSegments;
    let mouseX = 0, mouseY = 0;
    let windowHalfX = window.innerWidth / 2;
    let windowHalfY = window.innerHeight / 2;
    let animationFrameId: number;

    function init() {
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.z = 300;

      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setClearColor(0x000000, 0);
      mountRef.current?.appendChild(renderer.domElement);

      const particleCount = 2000;
      const positions = new Float32Array(particleCount * 3);
      const particleGeometry = new THREE.BufferGeometry();

      for (let i = 0; i < particleCount; i++) {
          const i3 = i * 3;
          const theta = Math.random() * Math.PI * 2;
          const phi = Math.acos(Math.random() * 2 - 1);
          const radius = 100 + Math.random() * 50;
          positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
          positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
          positions[i3 + 2] = radius * Math.cos(phi);
      }
      particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      
      const particleMaterial = new THREE.PointsMaterial({
          color: 0x00ffb2,
          size: 1.2,
          transparent: true,
          opacity: 0.8,
          blending: THREE.AdditiveBlending
      });
      brainParticles = new THREE.Points(particleGeometry, particleMaterial);
      scene.add(brainParticles);

      const lineGeometry = new THREE.BufferGeometry();
      const linePositions = [];
      const connections = 3000;
      for (let i = 0; i < connections; i++) {
          const p1 = Math.floor(Math.random() * particleCount);
          const p2 = Math.floor(Math.random() * particleCount);
          linePositions.push(positions[p1 * 3], positions[p1 * 3 + 1], positions[p1 * 3 + 2]);
          linePositions.push(positions[p2 * 3], positions[p2 * 3 + 1], positions[p2 * 3 + 2]);
      }
      lineGeometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
      
      const lineMaterial = new THREE.LineBasicMaterial({
          color: 0x00ffb2,
          transparent: true,
          opacity: 0.05
      });
      lines = new THREE.LineSegments(lineGeometry, lineMaterial);
      scene.add(lines);

      document.addEventListener('mousemove', onDocumentMouseMove, false);
      window.addEventListener('resize', onWindowResize, false);
    }

    function onWindowResize() {
        windowHalfX = window.innerWidth / 2;
        windowHalfY = window.innerHeight / 2;
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    }

    function onDocumentMouseMove(event: MouseEvent) {
        mouseX = (event.clientX - windowHalfX);
        mouseY = (event.clientY - windowHalfY);
    }

    function animate() {
        animationFrameId = requestAnimationFrame(animate);
        render();
    }

    function render() {
        const time = Date.now() * 0.0001;
        
        camera.position.x += (mouseX * 0.2 - camera.position.x) * 0.02;
        camera.position.y += (-mouseY * 0.2 - camera.position.y) * 0.02;
        camera.lookAt(scene.position);

        brainParticles.rotation.y = time;
        lines.rotation.y = time;

        renderer.render(scene, camera);
    }

    init();
    animate();

    return () => {
        cancelAnimationFrame(animationFrameId);
        window.removeEventListener('resize', onWindowResize);
        document.removeEventListener('mousemove', onDocumentMouseMove);
        mountRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return <div id="hero-canvas" ref={mountRef} />;
};

export default NeuralBackground;
