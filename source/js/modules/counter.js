export default (dur) => {
  const c = document.querySelector(`.game__counter`);
  const minSpan = Array.from(c.querySelectorAll(`span`))[0];
  const secSpan = Array.from(c.querySelectorAll(`span`))[1];

  let start = false;
  let startTime;
  let now;
  let then = 60;
  let elapsed;

  const draw = (s, min = dur, sec = 0) => {
    minSpan.innerHTML = `0${min}`.slice(-2);
    secSpan.innerHTML = `0${sec}`.slice(-2);
  };

  const tick = (s) => {
    requestAnimationFrame(() => tick(s));

    const totalSeconds = Math.floor(((dur * 60000) - (new Date(Date.now() - s).getTime())) / 1000);

    const minutes = Math.floor(totalSeconds / 60);
    const seconds = Math.floor(totalSeconds % 60);

    now = Date.now();
    elapsed = now - then;

    if (minutes >= 0 && elapsed > 1000) {
      then = now - (elapsed % 1000);
      draw(s, minutes, seconds);
    }
  };

  document.body.addEventListener(`screenChanged`, (e) => {
    if (e.detail.screenName === `game` && start === false) {
      startTime = Date.now();
      start = true;
      draw();
      tick(startTime);
    }
  });
};
