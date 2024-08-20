// Создать объект (25) из:

// url, строка — адрес картинки вида photos/{{i}}.jpg, где {{i}} — это число от 1 до 25. Адреса картинок не должны повторяться.
// description, строка — описание фотографии. Описание придумайте самостоятельно.
// likes, число — количество лайков, поставленных фотографии. Случайное число от 15 до 200.
// comments, массив объектов — список комментариев, оставленных другими пользователями к этой фотографии. Количество комментариев к каждой фотографии — случайное число от 0 до 30. Все комментарии генерируются случайным образом. Пример описания объекта с комментарием:

// {
//   id: 135,
//   avatar: 'img/avatar-6.svg',
//   message: 'В целом всё неплохо. Но не всё.',
//   name: 'Артём',
// }

// Поле avatar — это строка, значение которой формируется по правилу img/avatar-{{случайное число от 1 до 6}}.svg. Аватарки подготовлены в директории img.
// Для формирования текста комментария — message — вам необходимо взять одно или два случайных предложения из представленных ниже:
// Имена авторов также должны быть случайными. Набор имён для комментаторов составьте сами. Подставляйте случайное имя в поле name.

const DESCRIPTION = ['Я на Мальдивах', 'Снова вместе', 'Кушоем сосиску', 'Мда', 'ЧТО ЖЕ ДЕЛАТЬ', 'Собака сошла с ума', 'Пью пиво'];
const COMMENTS = [];

const SIMILAR_USERS_COUNT = 25;

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const newComment = () => {
  let comment = COMMENTS[0];
  comment = {
    id: getRandomInteger(0, 300),
    avatar: `img/avatar-${ getRandomInteger(0, 6) }.svg`,
    message: getRandomArrayElement(['Всё отлично!',
      'В целом всё неплохо. Но не всё.',
      'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
      'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
      'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
      'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!']),
    name: getRandomArrayElement(['Тася Пупкина', 'Аврора Иванова', 'Федя Печенькин', 'Дмитрий Лже', 'Евраким Автодов', 'Вова Гаечкин', 'Шала Гаврилова', 'Степанина']),
  };
  return comment;
};

const createPost = () => {
  let newObj = {};
  newObj = {
    id: getRandomInteger(1, 25),
    url: `photos/${ getRandomInteger(1, 25) }.jpg`,
    description: DESCRIPTION[getRandomInteger(0, DESCRIPTION.length - 1)],
    likes: getRandomInteger(15, 200),
    comment: Array.from({length: getRandomInteger(0, 30)}, newComment)
  };
  return newObj;
};

export const similarUsers = Array.from({length: SIMILAR_USERS_COUNT}, createPost);
