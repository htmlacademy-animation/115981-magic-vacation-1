import svg2Shape from "./svg2Shape";

const svgElements = () => {
  const svgList = {
    snowflake: {
      file: `../img/module-6/svg-forms/snowflake.svg`,
      color: `#3b7bf2`,
      depth: 8,
      cap: 2,
    },
    flamingo: {
      file: `../img/module-6/svg-forms/flamingo.svg`,
      color: `#fe6183`,
      depth: 8,
      cap: 2,
    },
    flower: {
      file: `../img/module-6/svg-forms/flower.svg`,
      color: `#3b7bf2`,
      depth: 8,
      cap: 2,
    },
    keyhole: {
      file: `../img/module-6/svg-forms/keyhole.svg`,
      color: `#a67ee5`,
      depth: 20,
      cap: 2,
    },
    leaf: {
      file: `../img/module-6/svg-forms/leaf.svg`,
      color: `#34df96`,
      depth: 8,
      cap: 3,
    },
    question: {
      file: `../img/module-6/svg-forms/question.svg`,
      color: `#3b7bf2`,
      depth: 8,
      cap: 2,
    },
  };

  const elements = {};

  elements.snowflake = svg2Shape(svgList.snowflake);
  elements.snowflake.position.set(-310, -10, 600);
  elements.snowflake.rotation.x = -10 * (Math.PI / 180);
  elements.snowflake.rotation.y = 50 * (Math.PI / 180);
  elements.snowflake.rotation.z = 20 * (Math.PI / 180);

  elements.question = svg2Shape(svgList.question);
  elements.question.position.set(80, -230, 600);
  elements.question.scale.y = -1;
  elements.question.rotation.x = -20 * (Math.PI / 180);
  elements.question.rotation.z = 20 * (Math.PI / 180);

  elements.leaf = svg2Shape(svgList.leaf);
  elements.leaf.position.set(430, 220, 690);
  elements.leaf.scale.y = -1;
  elements.leaf.rotation.x = -30 * (Math.PI / 180);
  elements.leaf.rotation.y = -30 * (Math.PI / 180);
  elements.leaf.rotation.z = -60 * (Math.PI / 180);

  elements.leaf2 = svg2Shape(svgList.leaf);
  elements.leaf2.position.set(-280, 90, 0);
  elements.leaf2.scale.set(2.5, -2.5, 2.5);

  elements.leaf3 = svg2Shape(svgList.leaf);
  elements.leaf3.position.set(-300, -140, 0);
  elements.leaf3.scale.set(1.5, -1.5, 1.5);
  elements.leaf3.rotation.z = 40 * (Math.PI / 180);

  elements.flamingo = svg2Shape(svgList.flamingo);
  elements.flamingo.position.set(-230, 190, 860);
  elements.flamingo.scale.set(-1, -1, 1);
  elements.flamingo.rotation.x = 30 * (Math.PI / 180);
  elements.flamingo.rotation.y = 20 * (Math.PI / 180);
  elements.flamingo.rotation.z = 10 * (Math.PI / 180);

  elements.keyhole = svg2Shape(svgList.keyhole);
  elements.keyhole.position.set(-1500, 1500, 20);
  elements.keyhole.scale.set(1.5, -1.5, 1.5);

  elements.flower = svg2Shape(svgList.flower);
  elements.flower.scale.set(0.75, -0.75, 0.75);
  elements.flower.position.set(-260, 190, 200);
  elements.flower.rotation.y = 20 * (Math.PI / 180);

  return elements;
};

export default svgElements;
