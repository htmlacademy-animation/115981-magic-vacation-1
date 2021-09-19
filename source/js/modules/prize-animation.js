export default (...ids) => {
  const items = ids.map((item) => document.getElementById(item));
  let done = false;
  document.body.addEventListener(`screenChanged`, (e) => {
    if (e.detail.screenName === `prizes` && !done) {
      items.forEach((i) => i.beginElement());
      done = true;
    }
  });
};
