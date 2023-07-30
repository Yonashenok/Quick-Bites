import sendLikes from './sendLikes.js';

function likeAction(e) {
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
}

export default likeAction;
