var container=document.getElementById("waves"),vertexHeight=15e3,planeDefinition=100,planeSize=1245e3,totalObjects=1,background="#000000",meshColor="#ffffff",camera=new THREE.PerspectiveCamera(90,window.innerWidth/window.innerHeight,1,4e5);camera.position.z=1e4,camera.position.y=1e4;var scene=new THREE.Scene;scene.fog=new THREE.Fog(background,1,3e5);var planeGeo=new THREE.PlaneGeometry(planeSize,planeSize,planeDefinition,planeDefinition),plane=new THREE.Mesh(planeGeo,new THREE.MeshBasicMaterial({color:meshColor,wireframe:!0}));plane.rotation.x-=.5*Math.PI,scene.add(plane);var renderer=new THREE.WebGLRenderer({alpha:!1});function updatePlane(){for(var e=0;e<planeGeo.vertices.length;e++)planeGeo.vertices[e].z+=Math.random()*vertexHeight-vertexHeight,planeGeo.vertices[e]._myZ=planeGeo.vertices[e].z}renderer.setSize(window.innerWidth,window.innerHeight),renderer.setClearColor(background,1),container.appendChild(renderer.domElement),updatePlane(),render();var count=0;function render(){requestAnimationFrame(render);var e=camera.position.x,n=camera.position.z;camera.position.x=.9999995000000417*e+9999998333333417e-19*n-10,camera.position.z=.9999995000000417*n-9999998333333417e-19*e-10,camera.lookAt(new THREE.Vector3(0,8e3,0));for(var r=0;r<planeGeo.vertices.length;r++){var n=+planeGeo.vertices[r].z;planeGeo.vertices[r].z=Math.sin(r+2e-5*count)*(planeGeo.vertices[r]._myZ-.6*planeGeo.vertices[r]._myZ),plane.geometry.verticesNeedUpdate=!0,count+=.1}renderer.render(scene,camera)}function onWindowResize(){camera.aspect=window.innerWidth/window.innerHeight,camera.updateProjectionMatrix(),renderer.setSize(window.innerWidth,window.innerHeight)}window.addEventListener("resize",onWindowResize,!1);