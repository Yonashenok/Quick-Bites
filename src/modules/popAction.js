import displayPop from './displayPop.js';

const overly = document.querySelector('.overly');

function popAction(e, addPrice) {
  e.preventDefault();
  const id = e.target.dataset.tap;
  if (id) {
    overly.classList.toggle('hidden');
    displayPop(addPrice, id);
  }
}

export default popAction;
