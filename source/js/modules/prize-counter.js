export default (itemMod, from = 1, to = 1) => {
  const count = document.querySelector(`.prizes__item--${itemMod} .prizes__desc b`);
  let start = false;
  let now;
  let then = Date.now();
  let elapsed;
  const step = (to - from) / 12;
  let current = from;

  const tick = () => {
    const raf = requestAnimationFrame(tick);
    now = Date.now();
    elapsed = now - then;
    if (current < to && elapsed > 1000 / 12) {
      then = now - (elapsed % (1000 / 12));
      draw(current);
      current += step;
    }
    if (current >= to) {
      draw(to);
      cancelAnimationFrame(raf);
    }
  };

  const draw = (cur) => {
    count.innerHTML = `${Math.floor(cur)}`;
  };
  document.body.addEventListener(`screenChanged`, (e) => {
    if (e.detail.screenName === `prizes` && start === false) {
      start = true;
      draw(current);
      tick();
    }
  });
};
