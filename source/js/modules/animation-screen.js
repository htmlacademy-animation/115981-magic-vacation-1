import * as THREE from "three";

const animationScreen = () => {
  const screenPath = `/img/module-5/scenes-textures/`;

  const screens = {
    top: `scene-0.png`,
    story: {
      0: `scene-1.png`,
      2: `scene-2.png`,
      4: `scene-3.png`,
      6: `scene-4.png`,
    },
  };

  const container = document.querySelector(`.animation-screen`);
  const renderer = new THREE.WebGLRenderer({
    alpha: true,
  });

  renderer.setClearColor(0xff0000, 0);
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);

  container.appendChild(renderer.domElement);
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);

  const getMaterial = (texture) => new THREE.RawShaderMaterial({
    uniforms: {
      map: {
        value: texture,
      },
    },
    vertexShader: `
      uniform mat4 projectionMatrix;
      uniform mat4 modelMatrix;
      uniform mat4 viewMatrix;

      attribute vec3 position;
      attribute vec3 normal;
      attribute vec2 uv;

      varying vec2 vUv;

      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4( position, 1.0 );
      }`,

    fragmentShader: `
      precision mediump float;
      uniform sampler2D map;
      varying vec2 vUv;
      void main() {
        vec4 texel = texture2D( map, vUv );
        gl_FragColor = texel;
      }`
  });

  const getPlaneLayer = (material, width, height) => {
    const geometry = new THREE.PlaneBufferGeometry(width, height);
    return new THREE.Mesh(geometry, material);
  };

  const cameraZ = Math.sqrt(window.innerHeight * window.innerHeight - (window.innerHeight * window.innerHeight) / 4);
  camera.position.z = cameraZ + 0.1;
  renderer.render(scene, camera);

  const render = (s, c) => {
    renderer.render(s, c);
    requestAnimationFrame(() => render(s, c));
  };

  requestAnimationFrame(() => render(scene, camera));
  const materials = {};
  Object.entries(screens).forEach((screen) => {
    if (typeof screen[1] === `string`) {
      materials[screen[0]] = getMaterial(new THREE.TextureLoader().load(`${screenPath}${screen[1]}`));
    } else if (typeof screen[1] === `object`) {
      Object.entries(screen[1]).forEach((item) => {
        materials[item[0]] = getMaterial(new THREE.TextureLoader().load(`${screenPath}${item[1]}`));
      });
    }
  });
  let slideActive = 0;

  document.body.addEventListener(`screenChanged`, (e) => {
    const name = e.detail.screenName;
    while (scene.children.length > 0) {
      scene.remove(scene.children[0]);
    }
    if (name === `story`) {
      const geometry = getPlaneLayer(materials[+slideActive], window.innerHeight * 2, window.innerHeight);
      scene.add(geometry);
    } else {
      const geometry = getPlaneLayer(materials[name], window.innerHeight * 2, window.innerHeight);
      scene.add(geometry);
    }
  });

  document.body.addEventListener(`slideChanged`, (e) => {
    while (scene.children.length > 0) {
      scene.remove(scene.children[0]);
    }
    slideActive = +e.detail.active % 2 === 0 ? +e.detail.active : +e.detail.active - 1;
    const geometry = getPlaneLayer(materials[+slideActive], window.innerHeight * 2, window.innerHeight);
    scene.add(geometry);
  });
};

export default animationScreen;
