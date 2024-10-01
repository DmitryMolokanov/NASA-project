import React, { useEffect, useRef } from 'react'
import * as THREE from 'three';
import img from '../../../public/assets/img/earth.jpeg'
import cls from './FirstPage.module.scss'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import AppLink from '../../components/Link/AppLink';




const FirstPage = () => {
    const mountRef = useRef(null)

    useEffect(() => {
        const scene = new THREE.Scene()
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 4;
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        const geometry = new THREE.SphereGeometry(1, 32, 32);
        const texture = new THREE.TextureLoader().load(img);
        const material = new THREE.MeshBasicMaterial({ map: texture });
        const earth = new THREE.Mesh(geometry, material);
        renderer.setClearColor('#0C2340')
        scene.add(earth);
        mountRef.current.appendChild(renderer.domElement);

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.update();


        function animate() {
            requestAnimationFrame(animate);
            earth.rotation.y += 0.005;
            renderer.render(scene, camera);
        }
        animate();

        return () => {
            console.log(mountRef)
            if (mountRef.current) mountRef.current.removeChild(renderer.domElement);
        };
    }, [])
    return (
        <div className={cls.canvas} ref={mountRef}>
            <AppLink className={cls.link} to={'/main_page'}>NASA PROJECT</AppLink>
        </div>
    )
};

export default FirstPage
