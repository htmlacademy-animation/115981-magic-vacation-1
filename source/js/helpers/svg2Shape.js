import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader";
import * as THREE from "three";

const svg2Shape = (svg) => {
  const loader = new SVGLoader();
  const group = new THREE.Group();
  loader.load(
      svg.file,
      (data) => {
        data.paths.forEach((path) => {
          const material = new THREE.MeshBasicMaterial({ color: new THREE.Color(svg.color) });
          const shapes = path.toShapes(false);
          shapes.forEach((shape) => {
            const geometry = new THREE.ExtrudeBufferGeometry(shape, {
              depth: svg.depth,
              bevelThickness: svg.cap
            });
            const mesh = new THREE.Mesh(geometry, material);
            group.add(mesh);
          });
        });
      });
  return group;
};

export default svg2Shape;
