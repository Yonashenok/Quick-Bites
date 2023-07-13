const card = (meal) => `<div class="card-container">
                    <img class="menu-img-card" src="${meal.image}"/>
                    <div class="menu-card-info">
                    <div class="card-rating">
                    <i data-show="${
  meal.id
}" class="fa-solid fa-heart like-btn fa-beat fa-xl" style="color: #ffc222;"></i>
                    <div class="card-rating-star">
                      <p>Rating</p>
                      <i class="fa-solid fa-star  fa-xl" style="color: #ffc222"></i>
                      <p class="like-${meal.id}">3.4/5</p>
                      </div>
                    </div>
                    <h2 class="menu-card-header">${meal.title.slice(0, 17)}</h2>
                    <p class="menu-card-text">
                     Delicious dish that consists of shredded chicken, 
                     and sometimes beans, corn, or other vegetables.
                    </p>
                    <p class="menu-card-price">
                      <span class="price-tag">$ ${meal.price} USD</span>
                      /week
                    </p>
                    <div class="menu-card-btn">
                      <button data-tap="${
  meal.id
}" class="card-btn">Add to Card</button>
                  </div>
            </div>
          </div>
  `;

export default card;
