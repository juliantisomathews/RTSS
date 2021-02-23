function createEnvironment(scene) {
  console.log("Adding environment");
  loadModel(scene);
  loadObject(scene)
  loadObj(scene)
  Particles(scene)

  // White directional light at half intensity shining from the top.
  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
  scene.add(directionalLight);
  
// Skybox
  
  var geo = new THREE.CubeGeometry(5000, 5000, 5000);
    var cubeMaterials = [
      new THREE.MeshBasicMaterial({
        map: new THREE.TextureLoader().load(
          "https://cdn.glitch.com/f84069d1-608f-4fa2-ad11-8b4f6ddfcd7d%2Fposx.jpg?v=1613927534663"
        ),
        side: THREE.DoubleSide
      }),
      new THREE.MeshBasicMaterial({
        map: new THREE.TextureLoader().load(
          "https://cdn.glitch.com/f84069d1-608f-4fa2-ad11-8b4f6ddfcd7d%2Fnegx.jpg?v=1613927534433"
        ),
        side: THREE.DoubleSide
      }),
      new THREE.MeshBasicMaterial({
        map: new THREE.TextureLoader().load(
          "https://cdn.glitch.com/f84069d1-608f-4fa2-ad11-8b4f6ddfcd7d%2Fposy.jpg?v=1613927534088"
        ),
        side: THREE.DoubleSide
      }),
      new THREE.MeshBasicMaterial({
        map: new THREE.TextureLoader().load(
          "https://cdn.glitch.com/f84069d1-608f-4fa2-ad11-8b4f6ddfcd7d%2Fnegy.jpg?v=1613927534017"
        ),
        side: THREE.DoubleSide
      }),
      new THREE.MeshBasicMaterial({
        map: new THREE.TextureLoader().load(
          "https://cdn.glitch.com/f84069d1-608f-4fa2-ad11-8b4f6ddfcd7d%2Fposz.jpg?v=1613927534119"
        ),
        side: THREE.DoubleSide
      }),
      new THREE.MeshBasicMaterial({
        map: new THREE.TextureLoader().load(
          "https://cdn.glitch.com/f84069d1-608f-4fa2-ad11-8b4f6ddfcd7d%2Fnegz.jpg?v=1613927534614"
        ),
        side: THREE.DoubleSide
      })
    ];

    var cubeMaterial = new THREE.MeshFaceMaterial(cubeMaterials);
    var skybox = new THREE.Mesh(geo, cubeMaterial);
    scene.add(skybox);
  
  
}



function updateEnvironment(scene) {
  // you can update the environment here
  
 
  
}

function loadModel(scene) {
  // model
  const onProgress = function (xhr) {
    if (xhr.lengthComputable) {
      const percentComplete = (xhr.loaded / xhr.total) * 100;
      console.log(Math.round(percentComplete, 2) + "% downloaded");
    }
  };

  const onError = function () {};

  const manager = new THREE.LoadingManager();

  new THREE.MTLLoader(manager)
    .setPath("../assets/haus/")
    .load("haus.mtl", function (materials) {
      materials.preload();

      new THREE.OBJLoader(manager)
        .setMaterials(materials)
        .setPath("../assets/haus/")
        .load(
          "haus.obj",
          
          function (object) {

            // object.scale.set(0.25,0.25,0.25);
            object.position.set(0,0,-10);

            const gui = new dat.GUI({
              width: 350
            })
            // gui.addColor('blue')
            const sizeFolder = gui.addFolder("Oakland: Median home price from 2010 to 2020 in $100k")
            sizeFolder.add(object.scale, "y" , .39, .79, .05)
            sizeFolder.open();

            scene.add(object);
          },
          onProgress,
          onError
        );
    });
   
}

function loadObject(scene) {
  // model
  const onProgress = function (xhr) {
    if (xhr.lengthComputable) {
      const percentComplete = (xhr.loaded / xhr.total) * 100;
      console.log(Math.round(percentComplete, 2) + "% downloaded");
    }
  };

  const onError = function () {};

  const manager = new THREE.LoadingManager();

  new THREE.MTLLoader(manager)
    .setPath("../assets/haus/")
    .load("haus.mtl", function (materials) {
      materials.preload();

      new THREE.OBJLoader(manager)
        .setMaterials(materials)
        .setPath("../assets/haus/")
        .load(
          "haus.obj",
          
          function (object) {

            // object.scale.set(0.25,0.25,0.25);
            object.position.set(3,0,-10);

            const gui = new dat.GUI({
              width: 350
            })
            // gui.addColor('blue')
            const sizeFolder = gui.addFolder("Detroit: Median home price from 2010 to 2020 in $100k")
            sizeFolder.add(object.scale, "y" , .19, .38, .05)
            sizeFolder.open();

            scene.add(object);
          },
          onProgress,
          onError
        );
    });
   
}


function loadObj(scene) {
  // model
  const onProgress = function (xhr) {
    if (xhr.lengthComputable) {
      const percentComplete = (xhr.loaded / xhr.total) * 100;
      console.log(Math.round(percentComplete, 2) + "% downloaded");
    }
  };

  const onError = function () {};

  const manager = new THREE.LoadingManager();

  new THREE.MTLLoader(manager)
    .setPath("../assets/haus/")
    .load("haus.mtl", function (materials) {
      materials.preload();

      new THREE.OBJLoader(manager)
        .setMaterials(materials)
        .setPath("../assets/haus/")
        .load(
          "haus.obj",
          
          function (object) {

            // object.scale.set(0.25,0.25,0.25);
            object.position.set(-3,0,-10);

            const gui = new dat.GUI({
              width: 350
            })
            // gui.addColor('blue')
            const sizeFolder = gui.addFolder("Phoenix: Median home price from 2010 to 2020 in $100k")
            sizeFolder.add(object.scale, "y" , 1.37, 1.74, .05)
            sizeFolder.open();

            scene.add(object);
          },
          onProgress,
          onError
        );
    });
   
}


function Particles(scene) {
  
  
  var geometry = new THREE.SphereGeometry( .1, 32, 32 );
  var material = new THREE.MeshBasicMaterial( {color: 'white', opacity: 0.8, transparent: true} );
  
  for (let i = 0; i < 100; i++) {
  var mesh = new THREE.Mesh( geometry, material );
  mesh.position.x = ( Math.random() - .45) * 30;
  mesh.position.y =  Math.random()  * 10;
  mesh.position.z = ( Math.random() - .45) * 30;
    
//   const gui = new dat.GUI({
//               width: 350
//             })
//             // gui.addColor('blue')
//             const pFolder = gui.addFolder("Air Quality")
//             pFolder.add(mesh.add, i , 1, 1000, 5)
//             pFolder.open(); 
    
    
  scene.add( mesh );
    
  }
  
}


function loadExhibit(scene) {
  // model
  const onProgress = function (xhr) {
    if (xhr.lengthComputable) {
      const percentComplete = (xhr.loaded / xhr.total) * 100;
      console.log(Math.round(percentComplete, 2) + "% downloaded");
    }
  };

  const onError = function () {};

  const manager = new THREE.LoadingManager();

  new THREE.MTLLoader(manager)
    .setPath("../assets/haus/")
    .load("haus.mtl", function (materials) {
      materials.preload();

      new THREE.OBJLoader(manager)
        .setMaterials(materials)
        .setPath("../assets/haus/")
        .load(
          "haus.obj",
          
          function (object) {

            // object.scale.set(0.25,0.25,0.25);
            object.position.set(-3,0,-10);

            const gui = new dat.GUI({
              width: 350
            })
            // gui.addColor('blue')
            const sizeFolder = gui.addFolder("Phoenix: Median home price from 2010 to 2020 in $100k")
            sizeFolder.add(object.scale, "y" , 1.37, 1.74, .05)
            sizeFolder.open();

            scene.add(object);
          },
          onProgress,
          onError
        );
    });
   
}






