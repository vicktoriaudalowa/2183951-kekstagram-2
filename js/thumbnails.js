import { similarUsers } from './data.js';

const template = document.querySelector('#picture').content.querySelector('.picture');
const container = document.querySelector('.pictures');

const createThumbnail = (photo) => {
  const thumbnail = template.cloneNode(true);
  const image = thumbnail.querySelector('.picture__img');
  image.src = photo.url;
  image.alt = photo.description;
  thumbnail.querySelector('.picture__comments').textContent = photo.comment.lenght;
  thumbnail.querySelector('.picture__likes').textContent = photo.likes;
  return thumbnail;
};

const fragment = document.createDocumentFragment();
similarUsers.forEach((photo) => {
  const thumbnail = createThumbnail(photo);
  fragment.appendChild(thumbnail);
});

container.appendChild(fragment);
