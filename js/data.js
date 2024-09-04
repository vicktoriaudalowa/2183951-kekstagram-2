import {getRandomArrayElement} from './util.js';
import { getRandomInteger } from './util.js';

const DESCRIPTION = ['Я на Мальдивах', 'Снова вместе', 'Кушоем сосиску', 'Мда', 'ЧТО ЖЕ ДЕЛАТЬ', 'Собака сошла с ума', 'Пью пиво'];

const SIMILAR_USERS_COUNT = 25;

const createNewComment = () => ({
  id: getRandomInteger(0, 300),
  avatar: `img/avatar-${ getRandomInteger(0, 6) }.svg`,
  message: getRandomArrayElement(['Всё отлично!',
    'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!']),
  name: getRandomArrayElement(['Тася Пупкина', 'Аврора Иванова', 'Федя Печенькин', 'Дмитрий Лже', 'Евраким Автодов', 'Вова Гаечкин', 'Шала Гаврилова', 'Степанина']),
}
);

const createPost = () => ({
  id: getRandomInteger(1, 25),
  url: `photos/${ getRandomInteger(1, 25) }.jpg`,
  description: DESCRIPTION[getRandomInteger(0, DESCRIPTION.length - 1)],
  likes: getRandomInteger(15, 200),
  comment: Array.from({length: getRandomInteger(0, 30)}, createNewComment)
});

const similarUsers = Array.from({length: SIMILAR_USERS_COUNT}, createPost);

export {similarUsers};
