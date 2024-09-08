import { getRandomArrayElement, getRandomInteger } from './util.js';
import {DESCRIPTION, NAMES, SIMILAR_USERS_COUNT, MESSAGES} from './const.js';

const createNewComment = () => ({
  id: getRandomInteger(0, 300),
  avatar: `img/avatar-${ getRandomInteger(0, 6) }.svg`,
  message: getRandomArrayElement(MESSAGES),
  name: getRandomArrayElement(NAMES),
}
);

const createPost = () => ({
  id: getRandomInteger(1, 25),
  url: `photos/${ getRandomInteger(1, 25) }.jpg`,
  description: DESCRIPTION[getRandomInteger(0, DESCRIPTION.length - 1)],
  likes: getRandomInteger(15, 200),
  comment: Array.from({length: getRandomInteger(0, 30)}, createNewComment)
});

export const similarUsers = Array.from({length: SIMILAR_USERS_COUNT}, createPost);
