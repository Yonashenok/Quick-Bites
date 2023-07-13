import renderPopComment from './renderPopComment.js';
import { API_URL_MEALS, selectedMeals, priceData } from './config.js';
import sendLikes from './sendLikes.js';
import fetchPro from './fetchPro.js';
import getLike from './getLike.js';
import card from './mealCard.js';

const mealContainer = document.querySelector('.menu-section-container');
const overly = document.querySelector('.overly');

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
    e.preventDefault();
    const id = e.target.dataset.tap;
    if (id) {
      overly.classList.toggle('hidden');
      renderPopComment(addPrice, id);
    }
  });

  likeBtn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const idLike = e.target.dataset.show;
      if (idLike) {
        const likeCount = +document
          .querySelector(`.like-${idLike}`)
          .textContent.slice(0, 3);
        document.querySelector(
          `.like-${idLike}`,
        ).textContent = `${Number.parseFloat(likeCount + 0.1).toFixed(1)}/5`;
        sendLikes({ item_id: `${idLike}` });
      }
    });
  });
};

export default renderMeals;
