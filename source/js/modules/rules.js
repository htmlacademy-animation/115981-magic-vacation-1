export default () => {
  const rulesList = document.querySelector('.rules__list');
  const rulesLink = document.querySelector('.rules__link');
  rulesList.lastElementChild.lastElementChild.addEventListener('animationend', () => {
    rulesLink.style.setProperty('--animation-state', 'running');
  });
  rulesLink.lastElementChild.addEventListener('animationend', () => {
    rulesLink.style.removeProperty('--animation-state');
  })
};
