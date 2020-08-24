export default class PerLetterAnim {
  constructor(
    elementSelector,
    timer,
    classForActivate,
    property
  ) {
    this._TIME_SPACE = 100;

    this._elementSelector = elementSelector;
    this._timer = timer;
    this._classForActivate = classForActivate;
    this._property = property;
    this._element = document.querySelector(this._elementSelector);
    this._timeOffset = 0;
    
    this.prePareText();
  }
  
  offsetGenerator(offset, index) {
    let res = offset;
    if ((index+1) % 3 === 1) {
      res +=80;
    }
    if ((index+1) % 3 === 2) {
      res -= 40;
    }
    if ((index+1) % 3 === 0) {
      res += 60;
    }
    return res;
  }
  
  createElement(letter, index) {
    const span = document.createElement(`span`);
    span.textContent = letter;
    span.style.transition = `${this._property} ${this._timer}ms ease ${this._timeOffset}ms`;
    this._timeOffset = this.offsetGenerator(this._timeOffset, index);
    return span;
  }
  
  prePareText() {
    if (!this._element) {
      return;
    }
    const text = this._element.textContent.trim().split(` `).filter((latter)=>latter !== '');

    const content = text.reduce((fragmentParent, word, index) => {
      const wordElement = Array.from(word).reduce((fragment, latter, i) => {
        fragment.appendChild(this.createElement(latter, i));
        return fragment;
      }, document.createDocumentFragment());
      const wordContainer = document.createElement(`span`);
      wordContainer.classList.add(`per-letter-anim__word`);
      wordContainer.appendChild(wordElement);
      fragmentParent.appendChild(wordContainer);
      if (index !== text.length - 1) {
        const space = document.createTextNode(' ')
        fragmentParent.appendChild(space)
      };
      return fragmentParent;
    }, document.createDocumentFragment());

    this._element.innerHTML = ``;
    this._element.appendChild(content);
  }
  
  runAnimation() {
    if (!this._element) {
      return;
    }
    this._element.classList.add(this._classForActivate);
  }

  destroyAnimation() {
    this._element.classList.remove(this._classForActivate);
  }
}
