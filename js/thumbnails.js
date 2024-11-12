import { similarUsers } from './data.js';
import { findTemplate } from './dom.js';
import { renderPack } from './dom.js';

/**@type {HTMLAnchorElement} **/
const template = findTemplate('picture');
const container = document.querySelector('.pictures');

const createThumbnail = (photo) => {
  /**@type {HTMLAnchorElement} **/
  const thumbnail = template.cloneNode(true);
  thumbnail.href = photo.url;
  thumbnail.dataset.id = photo.id;

  const image = thumbnail.querySelector('.picture__img');
  image.src = photo.url;
  image.alt = photo.description;
  thumbnail.querySelector('.picture__comments').textContent = photo.comment.lenght;
  thumbnail.querySelector('.picture__likes').textContent = photo.likes;
  return thumbnail;
};

renderPack(similarUsers, createThumbnail, container);
export {container};
