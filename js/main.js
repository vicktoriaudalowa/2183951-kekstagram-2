import { similarUsers } from './data.js';
import './thumbnails.js';
import { openBigPicture } from './render-photo.js';
import './render-photo.js';

const container = document.querySelector('.pictures');

container.addEventListener('click', (evt) => {
  const currentPictureNode = evt.target.closest('.picture');
  openBigPicture(currentPictureNode.dataset.id);
});
