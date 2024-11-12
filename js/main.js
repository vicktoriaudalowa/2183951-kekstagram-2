import { similarUsers } from './data.js';
import './thumbnails.js';
import { openBigPicture } from './render-photo.js';
import './render-photo.js';

const container = document.querySelector('.pictures');

container.addEventListener('click', (evt) => {
  const currentPictureNode = evt.target.closest('.picture');
  if (currentPictureNode) {
    openBigPicture(currentPictureNode.dataset.id);
  }
});


