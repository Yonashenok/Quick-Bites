import getLocalStorage from './getLocalStorage.js';
import setLocalStorage from './setLocalStorage.js';
import cartItem from './cartItem.js';

const model = document.querySelector('.cart-container');

const removeHandler = (id) => {
  const cartData = getLocalStorage();
  const newCartData = cartData.filter((item) => item.id !== id);
  model.innerHTML = '';
  newCartData.forEach((meal) => {
    const markUp = cartItem(meal);
    model.insertAdjacentHTML('afterbegin', markUp);
  });
  setLocalStorage(newCartData);
};
export default removeHandler;
