import './style.css';
import homepage, { main, mainHomepage } from './homepage';
import mainMenu from './menu';
import mainContact from './contact';
homepage();
mainHomepage();

const homeTab = document.querySelector('#home');
const menuTab = document.querySelector('#menu');
const contactTab = document.querySelector('#contact');

const removeChildren = main => {
  while (main.firstChild) {
    main.removeChild(main.firstChild);
  }
};

homeTab.addEventListener('click', function () {
  removeChildren(main);
  mainHomepage();
});

menuTab.addEventListener('click', function () {
  removeChildren(main);
  mainMenu();
});
contactTab.addEventListener('click', function () {
  removeChildren(main);
  mainContact();
});
