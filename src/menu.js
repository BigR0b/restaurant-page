import { main, newDiv } from './homepage';
//Title
const storeName = newDiv();
storeName.setAttribute('id', 'title');
const title = document.createElement('h1');
title.textContent = 'Menu';

storeName.appendChild(title);

//Item 1
const item1 = newDiv();
item1.classList.add('item');
item1.textContent = 'Classic Pancake';

//Item 2
const item2 = newDiv();
item2.classList.add('item');
item2.textContent = 'Japanese Pancake';

//Item 3
const item3 = newDiv();
item3.classList.add('item');
item3.textContent = 'Crêpe';

const mainMenu = () => {
  main.appendChild(storeName);
  main.appendChild(item1);
  main.appendChild(item2);
  main.appendChild(item3);
};
export default mainMenu;
