import * as THREE from "three";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import svgElements from "../helpers/svgElements";

const animationScreen = () => {
  const screenPath = `./img/module-5/scenes-textures/`;

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
  const camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 0.1, 6000);
  const controls = new OrbitControls(camera, renderer.domElement);
  const getMaterial = (texture, uniforms = {}) => {
    const parameters = {
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
        uniform float hueAngle;
        uniform vec2 resolution;
        uniform float density;
        uniform bool bubbles;
        uniform vec2 bubble1;
        uniform vec2 bubble2;
        uniform vec2 bubble3;
        varying vec2 vUv;

        vec3 hueRotate(in vec3 color, in float angle) {
          const mat3 rgb2yiq = mat3(0.299, 0.587, 0.114, 0.595716, -0.274453, -0.321263, 0.211456, -0.522591, 0.311135);
          const mat3 yiq2rgb = mat3(1.0, 0.9563, 0.6210, 1.0, -0.2721, -0.6474, 1.0, -1.1070, 1.7046);
          vec3 yColor = rgb2yiq * color;

          float originalHue = atan(yColor.b, yColor.g);
          float finalHue = originalHue + angle;
          float chroma = sqrt(yColor.b * yColor.b + yColor.g * yColor.g);

          vec3 yFinalColor = vec3(yColor.r, chroma * cos(finalHue), chroma * sin(finalHue));
          vec3 final = yiq2rgb * yFinalColor;
          return final;
        }
        float getRound(in vec2 pos, in float size) {
          float circle = sqrt(pow(pos.x, 2.0) + pow(pos.y, 2.0));
          circle = step(1.0 - size, 1.0 - circle);
          return ceil(circle);
        }
        float getBubble(in vec2 pos, in float size) {
          float bubble = sqrt(pow(pos.x, 2.0) + pow(pos.y, 2.0));
          bubble = smoothstep(size / 2.0, size, bubble);
          return 1.0 - bubble;
        }
        float getCircle(in vec2 pos, in float size) {
          float circle = sqrt(pow(pos.x, 2.0) + pow(pos.y, 2.0));
          circle = step(0.995 - size, 1.0 - circle) - step(1.0 - size, 1.0 - circle);
          return circle;
        }
        float getArc(in vec2 pos, in float size) {
          float circle;
          if ( pos.x > -.1 && pos.x < -.025 && pos.y > .02 ) {
            circle = sqrt(pow(pos.x, 2.0) + pow(pos.y, 2.0));
            circle = step(0.995 - size, 1.0 - circle) - step(1.0 - size, 1.0 - circle);
          }
          return circle;
        }
        void main() {
          vec4 mask = vec4(0.0);
          vec2 uv = vUv;
          vec2 st = gl_FragCoord.xy / resolution.xy;
          float size = 0.05 * density;
          if (bubbles) {
            mask.a += getRound(st - bubble1, size) + getRound(st - bubble2, size) + getRound(st - bubble3, size);
            mask.r += getBubble(st - bubble1, size) + getBubble(st - bubble2, size) + getBubble(st - bubble3, size);
            mask.gb = vec2(0.0);
            vec2 norm;
            if (getRound(st - bubble1, size) > 0.0) { mask.gb += (st - bubble1 + 1.0) / 2.0; }
            if (getRound(st - bubble2, size) > 0.0) { mask.gb += (st - bubble2 + 1.0) / 2.0; }
            if (getRound(st - bubble3, size) > 0.0) { mask.gb += (st - bubble3 + 1.0) / 2.0; }
            uv = uv - mask.r * (mask.gb * 2.0 - 1.0) * 0.2 * mask.a;
          }
          vec4 texel = texture2D(map, uv);
          vec3 color = texel.rgb;
          if(bool (hueAngle != 0.0)) {
            color = hueRotate(color, hueAngle);
          };
          if (bubbles) {
            color += getCircle(st - bubble1, size) * 0.15 + getArc(st - bubble1, size - .015) * 0.15 +
                     getCircle(st - bubble2, size) * 0.15 + getArc(st - bubble2, size - .015) * 0.15 +
                     getCircle(st - bubble3, size) * 0.15 + getArc(st - bubble3, size - .015) * 0.15;
          }
          gl_FragColor = vec4(color, 1.0);
        }`
    };
    Object.entries(uniforms).forEach((param) => {
      parameters.uniforms[param[0]] = {
        value: param[1]
      };
    });
    return new THREE.RawShaderMaterial(parameters);
  };

  const getPlaneLayer = (material, width, height) => {
    const geometry = new THREE.PlaneBufferGeometry(width, height);
    return new THREE.Mesh(geometry, material);
  };

  const getLight = () => {
    const light = new THREE.Group();
    let lightUnit = new THREE.DirectionalLight(new THREE.Color(`rgb(255,255,255)`), 0.84);
    lightUnit.position.set(0, camera.position.z * Math.tan(-15 * THREE.Math.DEG2RAD), camera.position.z);
    light.add(lightUnit);

    lightUnit = new THREE.PointLight(new THREE.Color(`rgb(246,242,255)`), 0.60, 975, 2);
    lightUnit.position.set(-785, -350, 710);
    light.add(lightUnit);

    lightUnit = new THREE.PointLight(new THREE.Color(`rgb(245,254,255)`), 0.95, 975, 2);
    lightUnit.position.set(730, -800, -985);
    light.add(lightUnit);

    return light;
  };

  const getPyramid4 = (sizes, material) => {
    const top = Math.sqrt((sizes.top * sizes.top) / 2);
    const bottom = Math.sqrt((sizes.bottom * sizes.bottom) / 2);
    const geometry = new THREE.CylinderGeometry(top, bottom, sizes.height, 4, 4);
    return new THREE.Mesh(geometry, material);
  };

  const getLantern = () => {
    const lantern = new THREE.Group();
    const lanternMaterial = new THREE.MeshStandardMaterial({ color: 0x387eff });
    let piece = getPyramid4({ top: 45, bottom: 57, height: 6 }, lanternMaterial);
    piece.position.set(0, 300, 0);
    lantern.add(piece);
    piece = getPyramid4({ top: 42, bottom: 34, height: 60 }, new THREE.MeshStandardMaterial({ color: 0x94b4f7 }));
    piece.position.set(0, 270, 0);
    lantern.add(piece);
    piece = getPyramid4({ top: 37, bottom: 37, height: 4 }, lanternMaterial);
    piece.position.set(0, 240, 0);
    lantern.add(piece);
    piece = new THREE.Mesh(new THREE.CylinderGeometry(7, 7, 230, 12, 12), lanternMaterial);
    piece.position.set(0, 125, 0);
    lantern.add(piece);
    piece = new THREE.Mesh(new THREE.SphereGeometry(16, 16, 16), lanternMaterial);
    piece.position.set(0, -5, 0);
    lantern.add(piece);
    piece = new THREE.Mesh(new THREE.CylinderGeometry(16, 16, 120, 12, 12), lanternMaterial);
    piece.position.set(0, -66, 0);
    lantern.add(piece);
    return lantern;
  };

  const getSnowman = () => {
    const snowman = new THREE.Group();
    const snowMaterial = new THREE.MeshStandardMaterial({ color: 0x94a7c0 });
    let piece = new THREE.Mesh(new THREE.SphereGeometry(44, 16, 16), snowMaterial);
    snowman.add(piece);
    piece = new THREE.Mesh(new THREE.SphereGeometry(75, 16, 16), snowMaterial);
    piece.position.set(0, -110, 0);
    snowman.add(piece);
    piece = new THREE.Mesh(new THREE.ConeGeometry(10, 50, 16), new THREE.MeshBasicMaterial({ color: 0xd44d1b }));
    piece.position.set(0, 0, 66);
    piece.rotation.x = (Math.PI / 180) * 90;
    snowman.add(piece);
    return snowman;
  };

  const getSaturnLamp = () => {
    const group = new THREE.Group();

    const ringPoints = [
      new THREE.Vector2(120, -1),
      new THREE.Vector2(120, 1),
      new THREE.Vector2(80, 1),
      new THREE.Vector2(80, -1),
      new THREE.Vector2(120, -1),
    ];
    const ringGeometry = new THREE.LatheGeometry(ringPoints, 36);
    const ringMaterial = new THREE.MeshBasicMaterial({ color: 0x0000ff });
    const ring = new THREE.Mesh(ringGeometry, ringMaterial);
    ring.rotation.z = 18 * (Math.PI / 180);
    group.add(ring);

    const planetGeometry = new THREE.SphereGeometry(60, 16, 16);
    const planetMaterial = new THREE.MeshBasicMaterial({ color: 0xff3333 });
    const planet = new THREE.Mesh(planetGeometry, planetMaterial);
    group.add(planet);

    const satelliteGeometry = new THREE.SphereGeometry(10, 16, 16);
    const satelliteMaterial = new THREE.MeshBasicMaterial({ color: 0x0000ff });
    const satellite = new THREE.Mesh(satelliteGeometry, satelliteMaterial);
    satellite.position.y = 120;
    group.add(satellite);

    const ropeGeometry = new THREE.CylinderGeometry(1, 1, 1000);
    const ropeMaterial = new THREE.MeshBasicMaterial({ color: 0xaaaaff });
    const rope = new THREE.Mesh(ropeGeometry, ropeMaterial);
    rope.position.y = 500;
    group.add(rope);
    return group;
  };

  const getCarpet = () => {
    const carpetPoints = [
      new THREE.Vector2(948, -1),
      new THREE.Vector2(948, 2),
      new THREE.Vector2(763, 2),
      new THREE.Vector2(763, -1),
      new THREE.Vector2(948, -1),
    ];
    const phiStart = 16 * (Math.PI / 180);
    const phiLength = 58 * (Math.PI / 180);
    const carpetGeometry = new THREE.LatheGeometry(carpetPoints, 36, phiStart, phiLength);
    const carpetMaterial = new THREE.MeshBasicMaterial({ color: 0x0000ff });

    return  new THREE.Mesh(carpetGeometry, carpetMaterial);
  };

  const getRoad = () => {
    const roadPoints = [
      new THREE.Vector2(892, -1),
      new THREE.Vector2(732, 2),
      new THREE.Vector2(732, 2),
      new THREE.Vector2(732, -1),
    ];
    const phiLength = 90 * (Math.PI / 180);
    const roadGeometry = new THREE.LatheGeometry(roadPoints, 36, 0, phiLength);
    const roadMaterial = new THREE.MeshBasicMaterial({ color: 0x999999 });

    return new THREE.Mesh(roadGeometry, roadMaterial);
  };

  const cameraZ = 1599;
  camera.position.z = cameraZ + 0.1;
  renderer.render(scene, camera);

  let material;
  let angleModifier = 0;
  const yStart = -10;
  let b1x = 25;
  let b1y = yStart;
  let b2x = 50;
  let b2y = yStart;
  let b3x = 75;
  let b3y = yStart;

  const animateBubble = (x, y, start) => {
    const t = Math.cos(Date.now() / 200);
    if (y < 110) {
      x += t * ((100 - y) / (100 - start));
      y += 1;
    }
    return [x, y];
  };

  const render = (s, c) => {
    renderer.render(s, c);
    if (slideActive === 2) {
      const tHue = Math.cos(Date.now() / 400);
      angleModifier = +tHue.toFixed(1) === 0 ? Math.random() * 5 - 2.5 : angleModifier;
      [b1x, b1y] = animateBubble(b1x, b1y, yStart);
      setTimeout(() => {
        [b2x, b2y] = animateBubble(b2x, b2y, yStart);
      }, 1200);
      setTimeout(() => {
        [b3x, b3y] = animateBubble(b3x, b3y, yStart);
      }, 700);
      material.uniforms.bubble1.value = getBubble(b1x, b1y);
      material.uniforms.bubble2.value = getBubble(b2x, b2y);
      material.uniforms.bubble3.value = getBubble(b3x, b3y);
      material.uniforms.hueAngle.value = 2 * Math.PI + (Math.PI / 180) * ((10 + angleModifier) * tHue);
      material.needsUpdate = true;
    }
    controls.update();
    requestAnimationFrame(() => render(s, c));
  };

  const getBubble = (x, y) => new THREE.Vector2((window.innerWidth / 100 * x) / (window.innerHeight / window.devicePixelRatio), (window.innerHeight / 100 * y) / (window.innerHeight / window.devicePixelRatio));

  requestAnimationFrame(() => render(scene, camera));
  const materials = {};
  Object.entries(screens).forEach((screen) => {
    if (typeof screen[1] === `string`) {
      materials[screen[0]] = getMaterial(new THREE.TextureLoader().load(`${screenPath}${screen[1]}`), { bubbles: false });
    } else if (typeof screen[1] === `object`) {
      Object.entries(screen[1]).forEach((item) => {
        const uniforms = {
          resolution: new THREE.Vector2(window.innerHeight, window.innerHeight),
          hueAngle: 0,
          bubbles: false,
        };
        if (item[0] === `2`) {
          uniforms.hueAngle = Math.PI / 12;
          uniforms.bubbles = true;
          uniforms.bubble1 = getBubble(35, 35);
          uniforms.bubble2 = getBubble(55, 70);
          uniforms.bubble3 = getBubble(65, 28);
          uniforms.density = window.devicePixelRatio;
        }
        materials[item[0]] = getMaterial(new THREE.TextureLoader().load(`${screenPath}${item[1]}`), uniforms);
      });
    }
  });
  let slideActive = 0;
  const pyramidMaterial = new THREE.MeshStandardMaterial({
    color: 0x387eff,
    metalness: 0.05,
    emissive: 0x0,
    roughness: 0.5
  });
  const pyramidGeometry = new THREE.ConeGeometry(Math.sqrt((250 * 250) / 2), 280, 4);
  const pyramid = new THREE.Mesh(pyramidGeometry, pyramidMaterial);
  pyramid.rotation.x = (Math.PI / 180) * 12;
  pyramid.position.set(-20, -58, 0);
  const lantern = getLantern();
  lantern.position.set(400, -150, 0);
  lantern.rotation.x = (Math.PI / 180) * 12;
  lantern.rotation.y = (Math.PI / 180) * -24;
  const snowman = getSnowman();
  snowman.position.set(-140, -20, 0);
  snowman.rotation.x = (Math.PI / 180) * 12;
  snowman.rotation.y = (Math.PI / 180) * 45;
  const snowflake = svgElements().snowflake;
  const question = svgElements().question;
  const leaf = svgElements().leaf;
  const leaf2 = svgElements().leaf2;
  const leaf3 = svgElements().leaf3;
  const flamingo = svgElements().flamingo;
  const keyhole = svgElements().keyhole;
  const flower = svgElements().flower;
  const saturnLamp = getSaturnLamp();
  saturnLamp.position.set(60, 240, 100);
  const carpet = getCarpet();
  carpet.position.set(0, -340, -660);
  carpet.rotation.y = (Math.PI / 180) * -45;
  const road = getRoad();
  road.position.set(0, -340, -660);
  road.rotation.y = (Math.PI / 180) * -45;
  document.body.addEventListener(`screenChanged`, (e) => {
    const name = e.detail.screenName;
    while (scene.children.length > 0) {
      scene.remove(scene.children[0]);
    }
    const light = getLight();
    light.position.z = camera.position.z;
    scene.add(light);
    if (name === `story`) {
      material = materials[+slideActive];
      if (slideActive === 0) {
        scene.add(flower);
        scene.add(saturnLamp);
        scene.add(carpet);
      }
      if (slideActive === 2) {
        scene.add(pyramid);
        scene.add(lantern);
      }
      if (slideActive === 4) {
        scene.add(snowman);
        scene.add(road);
      }
      const geometry = getPlaneLayer(material, window.innerHeight * 2, window.innerHeight);
      scene.add(geometry);
    } else {
      material = materials[name];
      const geometry = getPlaneLayer(material, window.innerHeight * 2, window.innerHeight);
      scene.add(geometry);
      scene.add(snowflake);
      scene.add(question);
      scene.add(leaf);
      scene.add(flamingo);
      scene.add(keyhole);
    }
  });

  document.body.addEventListener(`slideChanged`, (e) => {
    while (scene.children.length > 0) {
      scene.remove(scene.children[0]);
    }
    slideActive = +e.detail.active % 2 === 0 ? +e.detail.active : +e.detail.active - 1;
    material = materials[+slideActive];
    const geometry = getPlaneLayer(material, window.innerHeight * 2, window.innerHeight);
    scene.add(geometry);
    const light = getLight();
    light.position.z = camera.position.z;
    scene.add(light);
    if (slideActive === 0) {
      scene.add(flower);
      scene.add(saturnLamp);
    }
    if (slideActive === 2) {
      scene.add(pyramid);
      scene.add(lantern);
      scene.add(leaf2);
      scene.add(leaf3);
    }
    if (slideActive === 4) {
      scene.add(snowman);
      scene.add(road);
    }
  });
};

export default animationScreen;
