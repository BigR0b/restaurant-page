import { main, newDiv } from './homepage';

//Title
const storeName = newDiv();
storeName.setAttribute('id', 'title');
const title = document.createElement('h1');
title.textContent = 'Contact Me';

storeName.appendChild(title);

// Phone Number
const phone = newDiv();
const phoneTitle = document.createElement('h3');
phoneTitle.textContent = 'Phone';
const phoneNumber = newDiv();
phoneNumber.textContent = '(123) 456-7890';
phone.appendChild(phoneTitle);
phone.appendChild(phoneNumber);

const mainContact = () => {
  main.appendChild(storeName);
  main.appendChild(phone);
};

export default mainContact;
