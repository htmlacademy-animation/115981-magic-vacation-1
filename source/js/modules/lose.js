import scene2d from "../helpers/scene2d";
import _ from "../helpers/easings";

const pathToFiles = `/img/module-4/lose-images`;

const files = {
  crocodile: `crocodile.png`,
  drop: `drop.png`,
  flamingo: `flamingo.png`,
  key: `key.png`,
  leaf: `leaf.png`,
  saturn: `saturn.png`,
  snowflake: `snowflake.png`,
  watermelon: `watermelon.png`,
};

const loseScene = {
  sceneId: `lose-scene`,
  objects: {
    crocodile: {
      image: `${pathToFiles}/${files.crocodile}`,
      x: -3,
      y: 7,
      w: 100,
      opacity: 0,
      animation: [
        {
          type: `transform`,
          transformType: `translateX`,
          from: 30,
          to: 0,
          duration: 600,
          delay: 800,
        },
        {
          type: `transform`,
          transformType: `translateY`,
          from: -20,
          to: 0,
          duration: 600,
          delay: 800,
        },
        {
          type: `opacity`,
          from: 0,
          to: 1,
          duration: 200,
          delay: 800,
        },
      ]
    },
    drop: {
      image: `${pathToFiles}/${files.drop}`,
      x: 42,
      y: 58,
      w: 4,
      opacity: 0,
      animation: [
        {
          type: `opacity`,
          from: 0,
          to: 1,
          duration: 2000,
          delay: 1300,
          repeat: true,
          easing: (p) => {
            if (p <= 0.2) {
              return _.easeInCubic(p * 5);
            } else if (p > 0.2 && p < 0.9) {
              return 1;
            } else {
              return 1 - _.easeInCubic(((p - 0.1) / 90) * 100);
            }
          },
        },
        {
          type: `transform`,
          transformType: `scaleX`,
          from: 0,
          to: 1,
          duration: 2000,
          delay: 1300,
          repeat: true,
          easing: (p) => {
            if (p <= 0.2) {
              return _.easeOutCubic(p * 5);
            } else {
              return 1;
            }
          },
        },
        {
          type: `transform`,
          transformType: `scaleY`,
          from: 0,
          to: 1,
          duration: 2000,
          delay: 1300,
          repeat: true,
          easing: (p) => {
            if (p <= 0.2) {
              return _.easeOutCubic(p * 5);
            } else {
              return 1;
            }
          },
        },
        {
          type: `transform`,
          transformType: `translateX`,
          from: 1,
          to: 0,
          duration: 2000,
          delay: 1300,
          repeat: true,
          easing: (p) => {
            if (p <= 0.2) {
              return _.easeOutCubic(p * 5);
            } else {
              return 1;
            }
          },
        },
        {
          type: `transform`,
          transformType: `translateY`,
          from: 0,
          to: 8,
          duration: 2000,
          delay: 1300,
          repeat: true,
          easing: (p) => {
            if (p <= 0.3) {
              return 0;
            } else {
              return _.easeInCubic(((p - 0.3) / 70) * 100);
            }
          },
        }
      ]
    },
    flamingo: {
      image: `${pathToFiles}/${files.flamingo}`,
      x: 16,
      y: 34,
      w: 16,
      opacity: 0,
      animation: [
        {
          type: `opacity`,
          from: 0,
          to: 1,
          duration: 200,
          delay: 200,
        },
        {
          type: `transform`,
          transformType: `scale`,
          from: 0,
          to: 1,
          duration: 400,
          delay: 200,
          easing: _.easeOutCubic,
        },
        {
          type: `transform`,
          transformType: `translateY`,
          from: 7,
          to: 0,
          duration: 800,
          delay: 200,
          easing: _.easeOutCubic,
        },
        {
          type: `transform`,
          transformType: `translateX`,
          from: 10,
          to: 0,
          duration: 800,
          delay: 200,
          easing: _.easeOutCubic,
        },
        {
          type: `transform`,
          transformType: `rotate`,
          from: 30,
          to: 0,
          duration: 1000,
          delay: 200,
          easing: _.easeOutCubic,
        },
        {
          type: `transform`,
          transformType: `translateY`,
          from: 0,
          to: 80,
          duration: 800,
          delay: 1000,
          easing: _.easeInCubic,
        },
        {
          type: `opacity`,
          from: 1,
          to: 0,
          duration: 100,
          delay: 1600,
        },
      ],
    },
    key: {
      image: `${pathToFiles}/${files.key}`,
      x: 40,
      y: 35,
      w: 20,
      opacity: 0,
      animation: [
        {
          type: `opacity`,
          from: 0,
          to: 1,
          duration: 200,
        },
      ]
    },
    leaf: {
      image: `${pathToFiles}/${files.leaf}`,
      x: 84,
      y: 30,
      w: 18,
      opacity: 0,
      animation: [
        {
          type: `opacity`,
          from: 0,
          to: 1,
          duration: 200,
          delay: 200,
        },
        {
          type: `transform`,
          transformType: `scale`,
          from: 0,
          to: 1,
          duration: 400,
          delay: 200,
          easing: _.easeOutCubic,
        },
        {
          type: `transform`,
          transformType: `translateY`,
          from: 7,
          to: 0,
          duration: 900,
          delay: 200,
          easing: _.easeOutCubic,
        },
        {
          type: `transform`,
          transformType: `translateX`,
          from: -20,
          to: 0,
          duration: 900,
          delay: 200,
          easing: _.easeOutCubic,
        },
        {
          type: `transform`,
          transformType: `rotate`,
          from: -35,
          to: 0,
          duration: 1100,
          delay: 200,
          easing: _.easeOutCubic,
        },
        {
          type: `transform`,
          transformType: `translateY`,
          from: 0,
          to: 80,
          duration: 800,
          delay: 1100,
          easing: _.easeInCubic,
        },
        {
          type: `opacity`,
          from: 1,
          to: 0,
          duration: 100,
          delay: 1700,
        },
      ],
    },
    saturn: {
      image: `${pathToFiles}/${files.saturn}`,
      x: 84,
      y: 66,
      w: 12,
      opacity: 0,
      animation: [
        {
          type: `opacity`,
          from: 0,
          to: 1,
          duration: 200,
          delay: 300,
        },
        {
          type: `transform`,
          transformType: `scale`,
          from: 0,
          to: 1,
          duration: 700,
          delay: 300,
          easing: _.easeOutCubic,
        },
        {
          type: `transform`,
          transformType: `translateY`,
          from: -10,
          to: 0,
          duration: 700,
          delay: 300,
          easing: _.easeOutCubic,
        },
        {
          type: `transform`,
          transformType: `translateX`,
          from: -14,
          to: 0,
          duration: 700,
          delay: 300,
          easing: _.easeOutCubic,
        },
        {
          type: `transform`,
          transformType: `rotate`,
          from: -15,
          to: 0,
          duration: 900,
          delay: 300,
          easing: _.easeOutCubic,
        },
        {
          type: `transform`,
          transformType: `translateY`,
          from: 0,
          to: 80,
          duration: 800,
          delay: 1000,
          easing: _.easeInCubic,
        },
        {
          type: `opacity`,
          from: 1,
          to: 0,
          duration: 100,
          delay: 1600,
        },
      ],
    },
    snowflake: {
      image: `${pathToFiles}/${files.snowflake}`,
      x: 66,
      y: 50,
      w: 10,
      opacity: 0,
      animation: [
        {
          type: `opacity`,
          from: 0,
          to: 1,
          duration: 200,
          delay: 200,
        },
        {
          type: `transform`,
          transformType: `scale`,
          from: 0,
          to: 1,
          duration: 400,
          delay: 200,
          easing: _.easeOutCubic,
        },
        {
          type: `transform`,
          transformType: `translateX`,
          from: -6,
          to: 0,
          duration: 600,
          delay: 200,
          easing: _.easeOutCubic,
        },
        {
          type: `transform`,
          transformType: `rotate`,
          from: -15,
          to: 0,
          duration: 900,
          delay: 300,
          easing: _.easeOutCubic,
        },
        {
          type: `transform`,
          transformType: `translateY`,
          from: 0,
          to: 80,
          duration: 800,
          delay: 800,
          easing: _.easeInCubic,
        },
        {
          type: `opacity`,
          from: 1,
          to: 0,
          duration: 100,
          delay: 1400,
        },
      ],
    },
    watermelon: {
      image: `${pathToFiles}/${files.watermelon}`,
      x: 6,
      y: 60,
      w: 12,
      opacity: 0,
      animation: [
        {
          type: `opacity`,
          from: 0,
          to: 1,
          duration: 200,
          delay: 300,
        },
        {
          type: `transform`,
          transformType: `scale`,
          from: 0,
          to: 1,
          duration: 800,
          delay: 300,
          easing: _.easeOutCubic,
        },
        {
          type: `transform`,
          transformType: `translateY`,
          from: -10,
          to: 0,
          duration: 800,
          delay: 300,
          easing: _.easeOutCubic,
        },
        {
          type: `transform`,
          transformType: `translateX`,
          from: 20,
          to: 0,
          duration: 800,
          delay: 300,
          easing: _.easeOutCubic,
        },
        {
          type: `transform`,
          transformType: `rotate`,
          from: -15,
          to: 0,
          duration: 1000,
          delay: 300,
          easing: _.easeOutCubic,
        },
        {
          type: `transform`,
          transformType: `translateY`,
          from: 0,
          to: 80,
          duration: 800,
          delay: 1100,
          easing: _.easeInCubic,
        },
        {
          type: `opacity`,
          from: 1,
          to: 0,
          duration: 100,
          delay: 1700,
        },
      ],
    },
  },
  primitives: {
    mask: {
      draw: (ctx, s) => {
        ctx.fillStyle = `#5f458c`;
        ctx.arc(50 * s, 45 * s, 10 * s, -2, 0.875);
        ctx.lineTo(60 * s, 75 * s);
        ctx.lineTo(100 * s, 75 * s);
        ctx.lineTo(100 * s, 25 * s);
        ctx.lineTo(50 * s, 25 * s);
      },
    },
  },
  query: [
    `objects: key`,
    `objects: crocodile`,
    `primitives: mask`,
    `objects: drop`,
    `objects: flamingo`,
    `objects: watermelon`,
    `objects: leaf`,
    `objects: snowflake`,
    `objects: saturn`,
  ]
};

const lose = () => scene2d(loseScene);

export default lose;
