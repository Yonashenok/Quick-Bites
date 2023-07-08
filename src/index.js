// import renderMeals from './modules/renderMeals.js';
import './style/index.scss';
import logo from './images/logo.png';
import landBg from './images/LandingBg.jpg';
import office from './images/office.jpg';
import slimming from './images/slimming.jpg';
import vegetarian from './images/Vegetarian.jpg';
import healthy from './images/healthy.jpg';
import family from './images/family.jpg';
import dishes from './images/dishes.png';
import delivery from './images/express-delivery.png';
import pan from './images/pan.png';
import vegetable from './images/vegetable.png';

// renderMeals();
const closeBtn = document.querySelector('.close-btn');
const overly = document.querySelector('.overly');
const headerLogo = document.querySelector('.logo');
const homeOverly = document.querySelector('.land-overly');
const cardImg = document.querySelector('.card-img');
const aboutImg = document.querySelector('.about-header');
const familyImg = document.querySelector('.card-img-about');

const dishesImg = document.querySelector('.img-1');
const deliveryImg = document.querySelector('.img-2');
const panImg = document.querySelector('.img-3');
const vegetableImg = document.querySelector('.img-4');

familyImg.style = ` background-image : url(${family})`;
dishesImg.style = ` background-image : url(${dishes})`;
deliveryImg.style = ` background-image : url(${delivery})`;
vegetableImg.style = ` background-image : url(${vegetable})`;
panImg.style = ` background-image : url(${pan})`;

cardImg.style = ` background-image : url(${healthy})`;
aboutImg.style = ` background-image :linear-gradient(
  to bottom,
  rgba(3, 61, 25, 0.6),
  rgba(3, 61, 25, 0.5)
), url(${landBg})`;
homeOverly.style = ` background-image :linear-gradient(
  to bottom,
  rgba(3, 61, 25, 0.6),
  rgba(3, 61, 25, 0.5)
), url(${landBg})`;

const menuData = [
  {
    img: vegetarian,
    ele: document.querySelector('.vegetarian'),
  },
  {
    img: slimming,
    ele: document.querySelector('.slimming'),
  },
  {
    img: office,
    ele: document.querySelector('.office'),
  },
];

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
