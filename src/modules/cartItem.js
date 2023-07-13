const cartItem = (meal) => ` 
      <div class="cart-item">
      <div class="cart-details">
      <img class="cart-img" src="${meal.image}"/>
      <div class="cart-info">
      <h2 class="cart-info-header">${meal.title.slice(0, 28)}</h2>
      <p class="card-info-price">$ ${Number.parseFloat(meal.price).toFixed(
    2,
  )} USD</p>
      <button  data-remove="${meal.id}"  class="card-info-btn">Remove</button>
      </div>
      </div>
      <input value="${
  meal.quantity
}" class="Item-counter" type="number" name="items" data-show="${
  meal.id
}" />
      </div>`;

export default cartItem;
