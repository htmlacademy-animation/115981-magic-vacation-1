// modules
import mobileHeight from './modules/mobile-height-adjust.js';
import slider from './modules/slider.js';
import menu from './modules/menu.js';
import footer from './modules/footer.js';
import chat from './modules/chat.js';
import result from './modules/result.js';
import form from './modules/form.js';
import social from './modules/social.js';
import body from './modules/body.js';
import rules from './modules/rules.js';
import FullPageScroll from './modules/full-page-scroll';
import PerLetterAnim from './modules/per-letter-anim';
import prizeAnimation from './modules/prize-animation';

// init modules
mobileHeight();
slider();
menu();
footer();
chat();
result();
form();
social();
body();
rules();
prizeAnimation(`primaryAwardBegin`, `secondaryAwardBegin`, `additionalAwardBegin`);

const fullPageScroll = new FullPageScroll();
fullPageScroll.init();

const animationIntroTitle = new PerLetterAnim(`.intro__title`, 500, `per-letter-anim--active`, `transform`);
setTimeout(()=>{
  animationIntroTitle.runAnimation();
}, 800);

const animationIntroDate = new PerLetterAnim(`.intro__date`, 500, `per-letter-anim--active`, `transform`);
setTimeout(()=>{
  animationIntroDate.runAnimation();
}, 1400);
