import setLocalStorage from './setLocalStorage.js';
import getLocalStorage from './getLocalStorage.js';
import removeHandler from './removeHandler.js';
import cartItem from './cartItem.js';

const model = document.querySelector('.cart-container');
const cartList = document.querySelector('.cart-list');

const renderPopComment = (data, id) => {
  const [meals] = data.filter((item) => item.id === id);
  const cartData = getLocalStorage();
  const [checkLocal] = cartData.filter((item) => item.id === id);
  if (checkLocal) {
    // prettier-ignore
    checkLocal.quantity += 1;
    checkLocal.total += +meals.price;
  } else {
    cartData.push({
      ...meals,
      quantity: 1,
      total: +meals.price,
    });
  }
  cartList.textContent = cartData.length;
  model.innerHTML = '';
  let cartTotal = 0;
  cartData.forEach((meal) => {
    const markUp = cartItem(meal);
    model.insertAdjacentHTML('afterbegin', markUp);
    cartTotal += +meal.total;
  });
  const TotalPrice = document.querySelector('.card-price');
  TotalPrice.textContent = ` $ ${Number.parseFloat(cartTotal).toFixed(2)} USD`;
  setLocalStorage(cartData);

  model.addEventListener('click', (e) => {
    e.preventDefault();
    const idCart = e.target.dataset.show;
    const idRemove = e.target.dataset.remove;

    const renderPrice = (cartData) => {
      let cartTotal1 = 0;

      cartData.forEach((meal) => {
        cartTotal1 += +meal.total;
      });
      TotalPrice.textContent = ` $ ${Number.parseFloat(cartTotal1).toFixed(
        2,
      )} USD`;
    };

    if (idRemove) {
      removeHandler(idRemove);
      const cartData = getLocalStorage();
      cartList.textContent = cartData.length;
      renderPrice(cartData);
    }

    if (idCart) {
      const cartData = getLocalStorage();
      const [Item] = cartData.filter((item) => item.id === idCart);
      // prettier-ignore
      Item.quantity = +e.target.value;
      Item.total = +Item.price * +e.target.value;

      renderPrice(cartData);
      setLocalStorage(cartData);
    }
  });
};

export default renderPopComment;
