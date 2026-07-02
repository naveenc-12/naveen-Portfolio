import * as THREE from "three";

let scene, camera, renderer;
let cube;
let frame;
let container;

let mouse = { x: 0, y: 0 };

export function initThree() {

    container = document.getElementById("cube-container");

    if (!container) return;

    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(
        45,
        container.clientWidth / container.clientHeight,
        0.1,
        100
    );

    camera.position.set(0,0,6);

    renderer = new THREE.WebGLRenderer({
        antialias:true,
        alpha:true
    });

    renderer.setPixelRatio(Math.min(window.devicePixelRatio,2));

    renderer.setSize(
        container.clientWidth,
        container.clientHeight
    );

    container.innerHTML = "";
    container.appendChild(renderer.domElement);

    //-------------------------------------
    // Main Cube
    //-------------------------------------

    const geometry = new THREE.BoxGeometry(
        2,
        2,
        2,
        6,
        6,
        6
    );

    const material = new THREE.MeshPhysicalMaterial({

        color:0x8E00FB,

        metalness:1,

        roughness:.08,

        transmission:.35,

        thickness:1,

        clearcoat:1,

        clearcoatRoughness:0,

        emissive:0x3b008a,

        emissiveIntensity:.55

    });

    cube = new THREE.Mesh(
        geometry,
        material
    );

    scene.add(cube);

    //-------------------------------------
    // Wireframe
    //-------------------------------------

    const edges = new THREE.EdgesGeometry(geometry);

    frame = new THREE.LineSegments(

        edges,

        new THREE.LineBasicMaterial({

            color:0xffffff

        })

    );

    cube.add(frame);

    //-------------------------------------
    // Lights
    //-------------------------------------

    scene.add(new THREE.AmbientLight(
        0xffffff,
        1.8
    ));

    const light1 = new THREE.PointLight(
        0xffffff,
        30
    );

    light1.position.set(5,5,5);

    scene.add(light1);

    const light2 = new THREE.PointLight(
        0x8E00FB,
        45
    );

    light2.position.set(-5,-3,5);

    scene.add(light2);

    //-------------------------------------

    window.addEventListener(
        "mousemove",
        onMouse
    );

    window.addEventListener(
        "resize",
        resize
    );

    animate();

}

function animate(){

    requestAnimationFrame(animate);

    cube.rotation.x += .002;

    cube.rotation.y += .004;

    cube.position.y = Math.sin(
        performance.now()*0.001
    ) * .18;

    camera.position.x += (
        mouse.x*0.45-camera.position.x
    )*.05;

    camera.position.y += (
        -mouse.y*0.45-camera.position.y
    )*.05;

    camera.lookAt(scene.position);

    renderer.render(scene,camera);

}

function onMouse(e){

    mouse.x =
    (e.clientX/window.innerWidth)*2-1;

    mouse.y =
    (e.clientY/window.innerHeight)*2-1;

}

function resize(){

    camera.aspect =
    container.clientWidth /
    container.clientHeight;

    camera.updateProjectionMatrix();

    renderer.setSize(
        container.clientWidth,
        container.clientHeight
    );

}