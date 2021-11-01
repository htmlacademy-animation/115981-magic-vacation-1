import _ from '../helpers/easings';

const scene2d = (scene) => {
  const ww = window.innerWidth;
  const wh = window.innerHeight;
  const canvas = document.getElementById(scene.sceneId);
  const ctx = canvas.getContext(`2d`);
  const images = {};
  const size = Math.min(ww, wh);
  const objects = scene.objects;
  const primitives = scene.primitives;
  canvas.width = size;
  canvas.height = size;

  const urls = {};
  Object.keys(objects).forEach(function (key) {
    urls[key] = objects[key].image;
  });

  const load = (src) => {
    Object.keys(src).forEach((key) => {
      const img = new Image();
      img.addEventListener(`load`, () => drawImages(objects));
      img.src = src[key];
      images[key] = img;
    });
  };

  const drawImage = (image, settings) => {
    let x = (size / 100) * settings.x;
    let y = (size / 100) * settings.y;
    let width = (size / 100) * settings.w;
    let height = (size / 100) * settings.w * (image.height / image.width);
    const opacity = settings.opacity;
    const transform = settings.transform;
    const isContextTransforming = opacity || (transform && (transform.rotate || transform.scaleX || transform.scaleY));
    if (opacity === 0) {
      return;
    }

    if (transform && (transform.scaleX === 0 || transform.scaleY === 0)) {
      return;
    }
    if (isContextTransforming) {
      ctx.save();
    }

    if (transform) {
      if (transform.translateX) {
        x += (ww / 100) * (transform.translateX);
      }

      if (transform.translateY) {
        y += (wh / 100) * (transform.translateY);
      }

      if (transform.rotate) {
        ctx.translate(x + width / 2, y + height / 2);
        ctx.rotate(transform.rotate * Math.PI / 180);
      }

      if (transform.scaleX) {
        width *= transform.scaleX;

        if (transform.scaleX < 0) {
          ctx.scale(-1, 1);
          x = -x;
        }
      }

      if (transform.scaleY) {
        height *= transform.scaleY;
        if (transform.scaleY < 0) {
          ctx.scale(1, -1);
          y = -y;
        }
      }
      if (transform.rotate) {
        ctx.translate(-x - width / 2, -y - height / 2);
      }
    }

    if (opacity) {
      ctx.globalAlpha = opacity;
    }

    ctx.drawImage(image, x, y, width, height);

    if (isContextTransforming) {
      ctx.restore();
    }
  };

  const animate = (object = {}) => {
    object.animation.forEach((animation) => {
      const type = animation.type;
      const transformType = animation.transformType || undefined;
      const from = animation.from;
      const to = animation.to;
      const easing = animation.easing || _.easeLinear;
      const duration = animation.duration || 1000;
      const delay = animation.delay || 0;
      const repeat = animation.repeat || false;
      const fps = animation.fps || 60;
      const alternate = animation.alternate || false;
      let requestId;
      setTimeout(() => {
        let startTime = performance.now();
        const interval = 1000 / fps;
        let lastFrameTime = startTime;

        let animateFrame = (currentTime) => {
          requestId = requestAnimationFrame(animateFrame);
          const delta = currentTime - lastFrameTime;

          if (delta > interval) {
            let timeFraction = (currentTime - startTime) / duration;
            if (timeFraction <= 1) {
              const progress = easing(timeFraction);
              if (type === `transform`) {
                object.transform = object.transform || {};
                object.transform[transformType] = (from + ((to - from) * progress));
              } else {
                object[type] = (from + ((to - from) * progress));
              }
              lastFrameTime = currentTime - delta % interval;
            } else if (alternate && timeFraction <= 2) {
              const timeFractionReverse = timeFraction - 1;
              const progress = easing(timeFractionReverse);
              if (type === `transform`) {
                object.transform = object.transform || {};
                object.transform[transformType] = (to - ((to - from) * progress));
              } else {
                object[type] = (to - ((to - from) * progress));
              }
              lastFrameTime = currentTime - delta % interval;
            } else if (repeat) {
              startTime = performance.now();
            } else {
              cancelAnimationFrame(requestId);
            }
          }
        };
        animateFrame(performance.now());
      }, delay);
    });
  };

  const clear = () => ctx.clearRect(0, 0, canvas.width, canvas.height);

  const animateScene = () => {
    const animateMain = () => {
      clear();
      draw(scene);
      requestAnimationFrame(animateMain);
    };
    animateMain();
    Object.values(objects).forEach((object) => {
      if (object.animation) {
        animate(object);
      }
    });
    Object.values(primitives).forEach((primitive) => {
      if (primitive.animation) {
        animate(primitive);
      }
    });
  };

  const drawPrimitive = (primitive) => {

    if (primitive.opacity === 0) {
      return;
    }

    const s = canvas.width / 100;
    ctx.save();
    ctx.beginPath();
    primitive.draw(ctx, s);
    ctx.fill();
    ctx.restore();
  };

  const draw = (obj) => {
    if (!obj.query) {
      return;
    }
    const query = obj.query.map((item) => item.split(`: `));
    query.forEach((item) => {
      if (item[0] === `primitives`) {
        drawPrimitive(obj.primitives[item[1]]);
      } else if (item[0] === `objects`) {
        drawImage(images[item[1]], obj.objects[item[1]]);
      }
    });
  };

  const drawImages = (obj) => {
    Object.keys(obj).forEach((key) => drawImage(images[key], objects[key]));
  };

  const drawScene = new Promise((res) => {
    load(urls);
    res();
  });
  drawScene.then(() => animateScene());
};

export default scene2d;
