import { useRef, useEffect } from 'react'
import * as THREE from 'three'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'


const Scene = () => {
   const mountRef = useRef(null)
    useEffect(() => {

        const currentMount = mountRef.current
        //Scene
        const scene = new THREE.Scene()
        const camera = new THREE.PerspectiveCamera(
            10, currentMount.clientWidth / currentMount.clientHeight,
            800,
            50000
        )

            camera.position.z = 8000
            scene.add(camera)

            //Rendered
            const renderer = new THREE.WebGLRenderer()
            renderer.setSize(currentMount.clientWidth, currentMount.clientHeight)
            currentMount.appendChild(renderer.domElement)


            //Controls 
            const controls = new OrbitControls(camera, renderer.domElement)

            //Loadaer
            const gltfLoader = new GLTFLoader()
            gltfLoader.load('./model/moonv2.glb',
            (gltf)=>{
                scene.add(gltf.scene)
            },
            ()=>{
                
            },
            ()=>{
                
            }
            
            )

            //Lights
            const light1 = new THREE.DirectionalLight(0xffffff, 1)
            light1.position.set(333,333,333)
            scene.add(light1)

            const light2 = new THREE.DirectionalLight(0xffffff, 1)
            light2.position.set(666,666,666)
            scene.add(light2)

            const light3 = new THREE.DirectionalLight(0xffffff, 1)
            light2.position.set(666,666,66666)
            scene.add(light3)




            //Cube
            const cube = new THREE.Mesh(
                new THREE.BoxBufferGeometry(1,1,1,),
                new THREE.MeshBasicMaterial()
            )

          //  scene.add(cube)
            console.log("object")

            //Render the scene
            
            const animate = () => {
                renderer.render(scene, camera)
                requestAnimationFrame(animate)
            }
            animate()
            

            //Clean up scene
            return () => {
                currentMount.removeChild(renderer.domElement)
            }

    }, [])


    return (
        <div
        className='Contenedor3D'
        ref = {mountRef}
        style= {{width: '100%', height: '100vh'}}
        >
        </div>
    )
}


export default Scene