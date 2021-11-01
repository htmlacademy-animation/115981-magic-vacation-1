import scene2d from "../helpers/scene2d";
import _ from "../helpers/easings";

const pathToFiles = `/img/module-4/win-primary-images`;

const files = {
  airplane: `airplane.png`,
  tree: `tree.png`,
  ice: `ice.png`,
  walrus: `sea-calf-2.png`,
  snowflake: `snowflake.png`,
};

const walrusAnim = [
  {
    type: `transform`,
    transformType: `translateY`,
    from: 30,
    to: 0,
    duration: 2000,
    delay: 800,
    easing: _.easeOutElastic,
  },
  {
    type: `transform`,
    transformType: `rotate`,
    from: -30,
    to: 0,
    duration: 2000,
    delay: 800,
    easing: _.easeOutElastic,
  },
  {
    type: `opacity`,
    form: 0,
    to: 1,
    duration: 300,
    delay: 800,
  }
];

const winPrimaryScene = {
  sceneId: `win-primary-scene`,
  objects: {
    airplane: {
      image: `${pathToFiles}/${files.airplane}`,
      x: 85,
      y: 45,
      w: 10,
      opacity: 0,
      animation: [
        {
          type: `transform`,
          transformType: `translateY`,
          from: 0,
          to: 1,
          duration: 500,
          delay: 1200,
          easing: (p) => 5 * Math.sin(Math.PI * (1 - p)) - 15 * (1 - p),
        },
        {
          type: `transform`,
          transformType: `translateX`,
          from: -20,
          to: 0,
          duration: 500,
          delay: 1200,
        },
        {
          type: `transform`,
          transformType: `rotate`,
          from: 0,
          to: 1,
          duration: 500,
          delay: 1200,
          easing: (p) => 45 * Math.sin(Math.PI * (1 - p)) + 45 * (1 - p),
        },
        {
          type: `opacity`,
          from: 0,
          to: 1,
          duration: 300,
          delay: 1200,
        },
      ],
    },
    tree: {
      image: `${pathToFiles}/${files.tree}`,
      x: 65,
      y: 52,
      w: 5,
      opacity: 0,
      animation: [
        {
          type: `opacity`,
          from: 0,
          to: 1,
          duration: 500,
          delay: 1200,
          easing: _.easeInQuad
        },
        {
          type: `transform`,
          transformType: `translateY`,
          from: 30,
          to: 0,
          duration: 500,
          delay: 1200,
          easing: _.easeInQuad,
        },
      ],
    },
    tree2: {
      image: `${pathToFiles}/${files.tree}`,
      x: 60,
      y: 55,
      w: 5,
      opacity: 0,
      transforms: {
        translateY: 30
      },
      animation: [
        {
          type: `opacity`,
          from: 0,
          to: 1,
          duration: 500,
          delay: 1500,
          easing: _.easeInQuad
        },
        {
          type: `transform`,
          transformType: `translateY`,
          from: 30,
          to: 0,
          duration: 500,
          delay: 1500,
          easing: _.easeInQuad,
        },
      ],
    },
    ice: {
      image: `${pathToFiles}/${files.ice}`,
      w: 50,
      x: 25,
      y: 60,
      opacity: 0,
      transform: {
        translateY: 30,
      },
      animation: walrusAnim,
    },
    walrus: {
      image: `${pathToFiles}/${files.walrus}`,
      w: 50,
      x: 25,
      y: 35,
      opacity: 0,
      transform: {
        translateY: 30,
      },
      animation: walrusAnim,
    },
    snowflake1: {
      image: `${pathToFiles}/${files.snowflake}`,
      w: 20,
      x: 20,
      y: 45,
      opacity: 0,
      animation: [
        {
          type: `transform`,
          transformType: `translateY`,
          from: -4,
          to: 4,
          duration: 3000,
          repeat: `infinite`,
          alternate: true,
          delay: 800,
          easing: _.easeInOutSine,
        },
        {
          type: `opacity`,
          from: 0,
          to: 1,
          duration: 500,
          delay: 1500,
        }
      ],
    },
    snowflake2: {
      image: `${pathToFiles}/${files.snowflake}`,
      w: 10,
      x: 65,
      y: 60,
      opacity: 0,
      transform: {
        translateY: 4,
      },
      animation: [
        {
          type: `transform`,
          transformType: `translateY`,
          from: 4,
          to: 0,
          duration: 3000,
          repeat: `infinite`,
          alternate: true,
          delay: 800,
          easing: _.easeInOutSine,
        },
        {
          type: `opacity`,
          from: 0,
          to: 1,
          duration: 500,
          delay: 1500,
        }
      ]
    },
  },
  primitives: {
    trail: {
      centerX: 45,
      centerY: 55,
      radius: 15,
      endX: 87,
      endY: 53,
      angle: 45,
      deltasLength: 10,
      draw: (ctx, s) => {
        const t = winPrimaryScene.primitives.trail;
        const angle = t.angle * Math.PI / 180;
        ctx.globalAlpha = t.opacity;
        ctx.fillStyle = `#acc3ff`;
        ctx.arc(t.centerX * s, t.centerY * s, t.radius * s, Math.PI / 2, Math.PI * 3 / 2);
        ctx.bezierCurveTo((t.centerX + 10) * s, (t.centerY - t.radius) * s, (t.endX - t.deltasLength * Math.sin(angle)) * s, (t.endY + t.deltasLength * Math.cos(angle)) * s, t.endX * s, t.endY * s);
        ctx.bezierCurveTo((t.endX - t.deltasLength * Math.sin(angle)) * s, (t.endY + t.deltasLength * Math.cos(angle)) * s, (t.centerX + 10) * s, (t.centerY + t.radius) * s, t.centerX * s, (t.centerY + t.radius) * s);
      },
      opacity: 0,
      animation: [
        {type: `radius`, from: 0, to: 15, duration: 500, delay: 1200},
        {type: `centerY`, from: 40, to: 55, duration: 500, delay: 1200},
        {type: `endX`, from: 52, to: 87, duration: 500, delay: 1200},
        {type: `endY`, from: 41, to: 53, duration: 500, delay: 1200},
        {type: `angle`, from: 160, to: 40, duration: 500, delay: 1200},
        {type: `deltasLength`, from: 0, to: 10, duration: 500, delay: 1200},
        {type: `opacity`, from: 0, to: 1, duration: 300, delay: 1200},
      ],
    },
  },
  query: [
    `primitives: trail`,
    `objects: airplane`,
    `objects: tree`,
    `objects: tree2`,
    `objects: ice`,
    `objects: walrus`,
    `objects: snowflake1`,
    `objects: snowflake2`,
  ]
};

const winPrimary = () => scene2d(winPrimaryScene);

export default winPrimary;
