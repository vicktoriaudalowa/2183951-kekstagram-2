// function 1

const returnLenght = (string, maxLength) => string.length <= maxLength;

// function 2

const isPolyndrome = (string) => {
  string = string.replaceAll(' ', '').toLowerCase();
  let reversedString = string.split('').reverse().join('');
  return string === reversedString;
}

