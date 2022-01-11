import * as THREE from "three";

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
  const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);

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

  const cameraZ = Math.sqrt(window.innerHeight * window.innerHeight - (window.innerHeight * window.innerHeight) / 4);
  camera.position.z = cameraZ + 0.1;
  renderer.render(scene, camera);

  const render = (s, c) => {
    renderer.render(s, c);
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
