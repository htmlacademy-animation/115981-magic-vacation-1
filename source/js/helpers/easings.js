function easeLinear(x) {
  return x;
}

function easeInQuad(x) {
  return x * x;
}

function easeInCubic(x) {
  return x * x * x;
}


function easeOutCubic(x) {
  return 1 - Math.pow(1 - x, 3);
}


function easeInOutSine(x) {
  return -(Math.cos(Math.PI * x) - 1) / 2;
}


function easeInExpo(x) {
  if (x === 0) {
    return 0;
  } else {
    return Math.pow(2, 10 * x - 10);
  }
}


function easeOutExpo(x) {
  if (x === 1) {
    return 1;
  } else {
    return 1 - Math.pow(2, -10 * x);
  }
}


function easeInElastic(x) {
  const c4 = (2 * Math.PI) / 3;

  if (x === 0) {
    return 0;
  } else if (x === 1) {
    return 1;
  } else {
    return Math.pow(2, 10 * x - 10) * Math.sin((x * 10 - 10.75) * c4);
  }
}


function easeOutElastic(x) {
  const c4 = (2 * Math.PI) / 3;
  if (x === 0) {
    return 0;
  } else if (x === 1) {
    return 1;
  } else {
    return Math.pow(2, -10 * x) * Math.sin((x * 10 - 0.75) * c4) + 1;
  }
}


const _ = Object.freeze({
  easeLinear,
  easeInQuad,
  easeInCubic,
  easeOutCubic,
  easeInOutSine,
  easeInExpo,
  easeOutExpo,
  easeInElastic,
  easeOutElastic
});


export default _;
