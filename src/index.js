// import renderMeals from './modules/renderMeals.js';
import './style/index.css';
import logo from './images/logo.png';
import landBg from './images/LandingBg.jpg';

// renderMeals();
const closeBtn = document.querySelector('.close-btn');
const overly = document.querySelector('.overly');
const headerLogo = document.querySelector('.logo');
const homeOverly = document.querySelector('.land-overly');
homeOverly.style = ` background-image :linear-gradient(
  to bottom,
  rgba(3, 61, 25, 0.6),
  rgba(3, 61, 25, 0.5)
), url(${landBg})`;
const logoImage = document.createElement('img');
logoImage.src = logo;
logoImage.className = 'logo-img';
headerLogo.prepend(logoImage);

closeBtn.addEventListener('click', (e) => {
  e.preventDefault();
  overly.classList.toggle('hidden');
});
