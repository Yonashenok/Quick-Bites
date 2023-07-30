import fetchPro from './fetchPro.js';
import getLike from './getLike.js';
import card from './mealCard.js';
import popAction from './popAction.js';
import likeAction from './likeAction.js';
import { API_URL_MEALS, selectedMeals, priceData } from './config.js';

const mealContainer = document.querySelector('.menu-section-container');

const renderMeals = async () => {
  const { meals } = await fetchPro(API_URL_MEALS);

  const bestMeals = meals.filter((meal) => selectedMeals.includes(meal.strMeal));

  const addPrice = bestMeals.map((meal, i) => ({
    id: meal.idMeal,
    title: meal.strMeal,
    image: meal.strMealThumb,
    price: priceData[i],
  }));

  mealContainer.innerHTML = '';
  addPrice.forEach((meal) => {
    const markUp = card(meal);
    mealContainer.insertAdjacentHTML('afterbegin', markUp);
  });

  const likeData = await getLike();
  likeData.slice(37).forEach((like) => {
    document.querySelector(
      `.like-${like.item_id}`,
    ).textContent = `${Number.parseFloat(+like.likes * 0.1).toFixed(1)}/5`;
  });
  const likeBtn = document.querySelectorAll('.like-btn');

  mealContainer.addEventListener('click', (e) => {
    popAction(e, addPrice);
  });

  likeBtn.forEach((btn) => {
    btn.addEventListener('click', likeAction);
  });
};

export default renderMeals;
