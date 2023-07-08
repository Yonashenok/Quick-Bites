// import renderMeals from './modules/renderMeals.js';
import './style/index.css';
import logo from './images/logo.png';
import landBg from './images/LandingBg.jpg';
import office from './images/office.jpg';
import slimming from './images/slimming.jpg';
import vegetarian from './images/Vegetarian.jpg';
import healthy from './images/healthy.jpg';

// renderMeals();
const closeBtn = document.querySelector('.close-btn');
const overly = document.querySelector('.overly');
const headerLogo = document.querySelector('.logo');
const homeOverly = document.querySelector('.land-overly');
const cardImg = document.querySelector('.card-img');
cardImg.style = ` background-image : url(${healthy})`;
homeOverly.style = ` background-image :linear-gradient(
  to bottom,
  rgba(3, 61, 25, 0.6),
  rgba(3, 61, 25, 0.5)
), url(${landBg})`;

const menuData = [
  {
    img: vegetarian,
    info: 'Vegetarian Menu',
    ele: document.querySelector('.vegetarian'),
  },
  {
    img: slimming,
    info: 'Slimming Menu',
    ele: document.querySelector('.slimming'),
  },
  {
    img: office,
    info: 'Office Menu',
    ele: document.querySelector('.office'),
  },
];
// const menuOption = document.querySelector('.vegetarian');
// menuOption.style = ` background-image :linear-gradient(
//   to bottom,
//   rgba(255, 255, 255, 1) 30%,
//   rgba(3, 61, 25, 0.5)
// ), url(${landBg})`;

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
