import { useRef, useEffect } from 'react'
import * as THREE from 'three'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'


const Scene = () => {

    const station1 =  {
        nameStation: 'S11',
        latitude: 0.67416,
        longitude: 23.473146,
        startTime: '1969-07-21',
        endTime: '1969-08-26'
    }      
    
    const station2 =   {
        nameStation: 'S12',
        latitude: -3.01084,
        longitude: -23.42456,
        startTime: '1969-11-19',
        endTime: '1977-09-30'
    }

    const station3 =    {
        nameStation: 'S14',
        latitude: -3.6445,
        longitude: -17.47753,
        startTime: '1971-02-05',
        endTime: '1977-09-30'
    }

    const station4 =  {
        nameStation: 'S15',
        latitude: 26.13407,
        longitude: 3.62981,
        startTime: '1971-07-31',
        endTime: '1977-09-30'
    }

    const station5 = {
        nameStation: 'S16',
        latitude: -8.97577,
        longitude: 23.473146,
        startTime: '1972-04-21',
        endTime: '1977-09-30'
    }


    //Moonquakes
    const moonquake1969 = {
        latitude: -3.94,
        longitude: -21.2,
        startTime: 1969
    }
    const moonquake1970 = {
        latitude: -2.75,
        longitude: -27.86,
        startTime: 1970
    }
    
    const moonquake1971 = {
        latitude: 26.36,
        longitude: 0.25,
        startTime: 1971
    }
    
    const moonquake1972 = {
        latitude: 23.42,
        longitude: 7.23,
        startTime: 1972
    }
    
    const moonquake1973 = {
        latitude: -17.94,
        longitude: -20.74,
        startTime: 1973
    }
    
    const moonquake1974 = {
        latitude: 2.44,
        longitude: -8.07,
        startTime: 1974
    }
    
    const moonquake1975 = {
        latitude: -49.93,
        longitude: 3.42,
        startTime: 1975
    }
    
    const moonquake1976 = {
        latitude: 47.22,
        longitude: 47.57,
        startTime: 1976
    }
    
    const moonquake1977 = {
        latitude: -37.8,
        longitude: -30.8,
        startTime: 1977
    }
    
    
    //Function coordinates
    function to_xyz(lat_ori, lon_ori) {
        let lat;
        let lon;
        // Transforms the angles given from the geographical coordinates to angles used in spherical coordinates.
        lat = (90 - lat_ori) * Math.PI / 180;
        if (lon_ori < 0) {
            lon = (360 + lon_ori) * Math.PI / 180;
        } else {
            lon = lon_ori * Math.PI / 180;
        }
    
        // Transforms from spherical coordinates to rectangular coordiantes.
        let x = Math.sin(lat) * Math.cos(lon);
        let y = Math.sin(lat) * Math.sin(lon);
        let z = Math.cos(lat);
        
        let aux = y;
        y=z
        z=-aux
        
        // Returns an array with each cartesian coordinate.
        return [x, y, z];
    }

   //Coordinates
    let s11Coordinates = to_xyz(station1.latitude,station1.longitude);
    let s12Coordinates = to_xyz(station2.latitude,station2.longitude);
    let s14Coordinates = to_xyz(station3.latitude,station3.longitude);
    let s15Coordinates = to_xyz(station4.latitude,station4.longitude);
    let s16Coordinates = to_xyz(station5.latitude,station5.longitude);

    //Moonquakes coordinates
    let y69Coordinates = to_xyz(moonquake1969.latitude,moonquake1969.longitude)
    let y70Coordinates = to_xyz(moonquake1970.latitude,moonquake1970.longitude)
    let y71Coordinates = to_xyz(moonquake1971.latitude,moonquake1971.longitude)
    let y72Coordinates = to_xyz(moonquake1972.latitude,moonquake1972.longitude)
    let y73Coordinates = to_xyz(moonquake1973.latitude,moonquake1973.longitude)
    let y74Coordinates = to_xyz(moonquake1974.latitude,moonquake1974.longitude)
    let y75Coordinates = to_xyz(moonquake1975.latitude,moonquake1975.longitude)
    let y76Coordinates = to_xyz(moonquake1976.latitude,moonquake1976.longitude)
    let y77Coordinates = to_xyz(moonquake1977.latitude,moonquake1977.longitude)





    


    let ceroAbsoluto = to_xyz(0,0);


    //Stations size
    let stationSize = 0.03;






    






   const mountRef = useRef(null)
    useEffect(() => {

        //fondo
        const loader = new THREE.TextureLoader();
        loader.load('https://images.pexels.com/photos/1205301/pexels-photo-1205301.jpeg', function (texture) {
            scene.background = texture;
        });

        const currentMount = mountRef.current
        //Scene
        const scene = new THREE.Scene()
        const camera = new THREE.PerspectiveCamera(
            25, currentMount.clientWidth / currentMount.clientHeight,
            0.1,
            1000
        )
           camera.position.z = 6
            
            scene.add(camera)

            //Rendered
            const renderer = new THREE.WebGLRenderer()
            renderer.setSize(currentMount.clientWidth, currentMount.clientHeight)
            currentMount.appendChild(renderer.domElement)


            //Controls 
            const controls = new OrbitControls(camera, renderer.domElement)


            //Sphere test
            var radius = 1;
            var latSegments = 18;  // 10° increments
            var longSegments = 36; // 10° increments

            var geometry = new THREE.SphereBufferGeometry( radius, longSegments, latSegments);
            var material = new THREE.MeshBasicMaterial({
           color: 0x8afbff,
              wireframe: true
           });

           
            var sphere = new THREE.Mesh( geometry, material );
            scene.add( sphere );
            
            sphere.visible = true;
            document.getElementById("showMesh").addEventListener("click", function(){
                sphere.visible = !sphere.visible;
            });
             

           //Station 1 
            let pointInTheMap1 = new THREE.Mesh(
                new THREE.SphereBufferGeometry(stationSize,20,20),
                new THREE.MeshBasicMaterial({color:0xFFF69F})
            )
            pointInTheMap1.position.set(s11Coordinates[0],s11Coordinates[1],s11Coordinates[2])
            scene.add(pointInTheMap1)  
            //Station 2
            let pointInTheMap2 = new THREE.Mesh(
                new THREE.SphereBufferGeometry(stationSize,20,20),
                new THREE.MeshBasicMaterial({color:0xF6538A})
            )
            pointInTheMap2.position.set(s12Coordinates[0],s12Coordinates[1],s12Coordinates[2])
            scene.add(pointInTheMap2)
            //Station 3
            let pointInTheMap3 = new THREE.Mesh(
                new THREE.SphereBufferGeometry(stationSize,20,20),
                new THREE.MeshBasicMaterial({color:0x05D9E8})
            )
            pointInTheMap3.position.set(s14Coordinates[0],s14Coordinates[1],s14Coordinates[2])
            scene.add(pointInTheMap3)
            //Station 4
            let pointInTheMap4 = new THREE.Mesh(
                new THREE.SphereBufferGeometry(stationSize,20,20),
                new THREE.MeshBasicMaterial({color:0x0398B0})
            )
            pointInTheMap4.position.set(s15Coordinates[0],s15Coordinates[1],s15Coordinates[2])
            scene.add(pointInTheMap4)
            //Station 5
            let pointInTheMap5 = new THREE.Mesh(
                new THREE.SphereBufferGeometry(stationSize,20,20),
                new THREE.MeshBasicMaterial({color:0x65DC98})
            )
            pointInTheMap5.position.set(s16Coordinates[0],s16Coordinates[1],s16Coordinates[2])
            scene.add(pointInTheMap5)

            let zeroPosition = new THREE.Mesh(
                new THREE.SphereBufferGeometry(0.015,20,20),
                new THREE.MeshBasicMaterial({color:0x8AFBFF})
            )
            zeroPosition.position.set(ceroAbsoluto[0],ceroAbsoluto[1],ceroAbsoluto[2])
            scene.add(zeroPosition)
            zeroPosition.visible = true;
            document.getElementById("showStation").addEventListener("click", function(){
                zeroPosition.visible = !zeroPosition.visible;
            });

            pointInTheMap1.visible = true;
            document.getElementById("showStation").addEventListener("click", function(){
                pointInTheMap1.visible = !pointInTheMap1.visible;
            });
            pointInTheMap2.visible = true;
            document.getElementById("showStation").addEventListener("click", function(){
                pointInTheMap2.visible = !pointInTheMap2.visible;
            });
            pointInTheMap3.visible = true;
            document.getElementById("showStation").addEventListener("click", function(){
                pointInTheMap3.visible = !pointInTheMap3.visible;
            });
            pointInTheMap4.visible = true;
            document.getElementById("showStation").addEventListener("click", function(){
                pointInTheMap4.visible = !pointInTheMap4.visible;
            });
            pointInTheMap5.visible = true;
            document.getElementById("showStation").addEventListener("click", function(){
                pointInTheMap5.visible = !pointInTheMap5.visible;
            });


            
            
            let moonquake1969representation = new THREE.Mesh(
                new THREE.SphereBufferGeometry(stationSize,20,20),
                new THREE.MeshBasicMaterial({color:0xFFA500})
            )
            moonquake1969representation.position.set(y69Coordinates[0],y69Coordinates[1],y69Coordinates[2])
            scene.add(moonquake1969representation) 
            


            let moonquake1970representation = new THREE.Mesh(
                new THREE.SphereBufferGeometry(stationSize,20,20),
                new THREE.MeshBasicMaterial({color:0xFFA500})
            )
            moonquake1970representation.position.set(y70Coordinates[0],y70Coordinates[1],y70Coordinates[2])
            scene.add(moonquake1970representation) 

            let moonquake1971representation = new THREE.Mesh(
                new THREE.SphereBufferGeometry(stationSize,20,20),
                new THREE.MeshBasicMaterial({color:0xFFA500})
            )
            moonquake1971representation.position.set(y71Coordinates[0],y71Coordinates[1],y71Coordinates[2])
            scene.add(moonquake1971representation) 

            let moonquake1972representation = new THREE.Mesh(
                new THREE.SphereBufferGeometry(stationSize,20,20),
                new THREE.MeshBasicMaterial({color:0xFFA500})
            )
            moonquake1972representation.position.set(y72Coordinates[0],y72Coordinates[1],y72Coordinates[2])
            scene.add(moonquake1972representation) 

            let moonquake1973representation = new THREE.Mesh(
                new THREE.SphereBufferGeometry(stationSize,20,20),
                new THREE.MeshBasicMaterial({color:0xFFA500})
            )
            moonquake1973representation.position.set(y73Coordinates[0],y73Coordinates[1],y73Coordinates[2])
            scene.add(moonquake1973representation) 

            let moonquake1974representation = new THREE.Mesh(
                new THREE.SphereBufferGeometry(stationSize,20,20),
                new THREE.MeshBasicMaterial({color:0xFFA500})
            )
            moonquake1974representation.position.set(y74Coordinates[0],y74Coordinates[1],y74Coordinates[2])
            scene.add(moonquake1974representation) 

            let moonquake1975representation = new THREE.Mesh(
                new THREE.SphereBufferGeometry(stationSize,20,20),
                new THREE.MeshBasicMaterial({color:0xFFA500})
            )
            moonquake1975representation.position.set(y75Coordinates[0],y75Coordinates[1],y75Coordinates[2])
            scene.add(moonquake1975representation) 

            let moonquake1976representation = new THREE.Mesh(
                new THREE.SphereBufferGeometry(stationSize,20,20),
                new THREE.MeshBasicMaterial({color:0xFFA500})
            )
            moonquake1976representation.position.set(y76Coordinates[0],y76Coordinates[1],y76Coordinates[2])
            scene.add(moonquake1976representation) 

            let moonquake1977representation = new THREE.Mesh(
                new THREE.SphereBufferGeometry(stationSize,20,20),
                new THREE.MeshBasicMaterial({color:0xFFA500})
            )
            moonquake1977representation.position.set(y77Coordinates[0],y77Coordinates[1],y77Coordinates[2])
            scene.add(moonquake1977representation) 

            

            


            moonquake1969representation.visible = false;
            document.getElementById("1969").addEventListener("click", function(){
                moonquake1969representation.visible = !moonquake1969representation.visible;
            });

            

            moonquake1970representation.visible = false;
            document.getElementById("1970").addEventListener("click", function(){
                moonquake1970representation.visible = !moonquake1970representation.visible;
            });

            moonquake1971representation.visible = false;
            document.getElementById("1971").addEventListener("click", function(){
                moonquake1971representation.visible = !moonquake1971representation.visible;
            });

            moonquake1972representation.visible = false;
            document.getElementById("1972").addEventListener("click", function(){
                moonquake1972representation.visible = !moonquake1972representation.visible;
            });

            moonquake1973representation.visible = false;
            document.getElementById("1973").addEventListener("click", function(){
                moonquake1973representation.visible = !moonquake1973representation.visible;
            });

            moonquake1974representation.visible = false;
            document.getElementById("1974").addEventListener("click", function(){
                moonquake1974representation.visible = !moonquake1974representation.visible;
            });

            moonquake1975representation.visible = false;
            document.getElementById("1975").addEventListener("click", function(){
                moonquake1975representation.visible = !moonquake1975representation.visible;
            });

            moonquake1976representation.visible = false;
            document.getElementById("1976").addEventListener("click", function(){
                moonquake1976representation.visible = !moonquake1976representation.visible;
            });

           moonquake1977representation.visible = false;
            document.getElementById("1977").addEventListener("click", function(){
                moonquake1977representation.visible = !moonquake1977representation.visible;
            });

            //Moon
            const moon = new THREE.Group()
            const gltfLoader = new GLTFLoader()
            gltfLoader.load('./model/moonv2.glb',
            (gltf)=>{
                gltf.scene.scale.set(0.0019779,0.0019779,0.0019779)
                moon.add(gltf.scene)
                moon.rotation.y = Math.PI;
                scene.add(moon)  
            },
            ()=>{
            },
            ()=>{
            }
            )
            /*
            //Station1
            const stationA11= new THREE.Group()
            const stationA11Loader = new GLTFLoader()
            stationA11Loader.load('./model/stationA11.glb',
            (gltf)=>{
                gltf.scene.scale.set(1,1,1)
                stationA11.add(gltf.scene)
               // moon.rotation.y = Math.PI;
                scene.add(stationA11)  
            },
            ()=>{
            },
            ()=>{
            }
            )
            */




            //Lights
            const ambientLight = new THREE.AmbientLight(0xffffff, 4)
            scene.add(ambientLight)




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
        ></div>

    )
}


export default Scene