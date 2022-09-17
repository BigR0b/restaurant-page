import './style.css';
const content = document.querySelector('#content');
const navbar = document.createElement('nav');
const footer = document.createElement('footer');

const newDiv = () => document.createElement('div');

const main = newDiv();
main.setAttribute('id', 'main');

//Title
const storeName = newDiv();
storeName.setAttribute('id', 'title');
const title = document.createElement('h1');
title.textContent = "Big Rob's Pancake Place";

storeName.appendChild(title);

//Quote
const quoteContainer = newDiv();
quoteContainer.setAttribute('id', 'quote');

const quote = newDiv();
quote.textContent = "Best Pancakes I've ever had.";
const quoter = newDiv();
quoter.textContent = '-Person';

quoteContainer.appendChild(quote);
quoteContainer.appendChild(quoter);

//Hours
const hours = newDiv();
hours.setAttribute('id', 'hours');
hours.textContent = '7AM - 2PM Daily';

//Location
const location = newDiv();
location.setAttribute('id', 'location');
location.textContent = '1234 Made Up Street, Somewhere, NY';

main.appendChild(storeName);
main.appendChild(quoteContainer);
main.appendChild(hours);
main.appendChild(location);
content.appendChild(navbar);
content.appendChild(main);
content.appendChild(footer);
