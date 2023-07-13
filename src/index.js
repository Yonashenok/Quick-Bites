import './style/index.scss';
import getLocalStorage from './modules/getLocalStorage.js';
import delivery from './images/express-delivery.png';
import renderMeals from './modules/renderMeals.js';
import vegetable from './images/vegetable.png';
import { menuData } from './modules/config.js';
import landBg from './images/LandingBg.jpg';
import healthy from './images/healthy.jpg';
import family from './images/family.jpg';
import dishes from './images/dishes.png';
import logo from './images/logo.png';
import pan from './images/pan.png';

renderMeals();
const navContainer = document.querySelector('.nav-menu-links');
const contactImg = document.querySelector('.contact-header');
const homeOverly = document.querySelector('.land-overly');
const aboutImg = document.querySelector('.about-header');
const Container = document.querySelectorAll('.content');
const closeBtn = document.querySelector('.close-btn');
const cartBtn = document.querySelector('.cart-pop');
const headerLogo = document.querySelector('.logo');
const overly = document.querySelector('.overly');
const cardImg = document.querySelector('.card-img');
const cartList = document.querySelector('.cart-list');
const menuImg = document.querySelector('.menu-header');
const callAction = document.querySelectorAll('.menu-btn');
const familyImg = document.querySelector('.card-img-about');

const vegetableImg = document.querySelector('.img-4');
const dishesImg = document.querySelector('.img-1');
const panImg = document.querySelector('.img-3');
const deliveryImg = document.querySelector('.img-2');

vegetableImg.style = ` background-image : url(${vegetable})`;
deliveryImg.style = ` background-image : url(${delivery})`;
familyImg.style = ` background-image : url(${family})`;
dishesImg.style = ` background-image : url(${dishes})`;
cardImg.style = ` background-image : url(${healthy})`;
panImg.style = ` background-image : url(${pan})`;

aboutImg.style = ` background-image :linear-gradient(
  to bottom,
  rgba(3, 61, 25, 0.6),
  rgba(3, 61, 25, 0.5)
), url(${landBg})`;
contactImg.style = ` background-image :linear-gradient(
  to bottom,
  rgba(3, 61, 25, 0.6),
  rgba(3, 61, 25, 0.5)
), url(${landBg})`;
menuImg.style = ` background-image :linear-gradient(
  to bottom,
  rgba(3, 61, 25, 0.6),
  rgba(3, 61, 25, 0.5)
), url(${landBg})`;
homeOverly.style = ` background-image :linear-gradient(
  to bottom,
  rgba(3, 61, 25, 0.6),
  rgba(3, 61, 25, 0.5)
), url(${landBg})`;

menuData.forEach((menu) => {
  menu.ele.style = ` background-image :linear-gradient(
    to bottom,
    rgba(255, 255, 255, 1) 40%,
    rgba(3, 61, 25, 0.5)
  ), url(${menu.img})`;
});

const logoImage = document.createElement('img');
logoImage.src = logo;
logoImage.className = 'logo-img';
headerLogo.prepend(logoImage);

closeBtn.addEventListener('click', (e) => {
  e.preventDefault();
  overly.classList.toggle('hidden');
});
cartBtn.addEventListener('click', (e) => {
  e.preventDefault();
  overly.classList.toggle('hidden');
});

cartList.textContent = getLocalStorage().length;

const toMenuBtn = (e) => {
  e.preventDefault();
  const id = e.target.dataset.tap;
  Container.forEach((sect) => {
    sect.classList.add('hidden');
  });
  if (!document.querySelector(`.section-${id}`)) return;
  document.querySelector(`.section-${id}`).classList.remove('hidden');
};

callAction.forEach((btn) => btn.addEventListener('click', toMenuBtn));
navContainer.addEventListener('click', (e) => {
  e.preventDefault();
  const id = e.target.closest('.nav-item')?.dataset.tap;
  Container.forEach((sect) => {
    sect.classList.add('hidden');
  });
  if (!document.querySelector(`.section-${id}`)) return;
  document.querySelector(`.section-${id}`).classList.remove('hidden');
});
