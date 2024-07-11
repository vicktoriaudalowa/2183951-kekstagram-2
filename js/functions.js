// function 1

const returnLenght = (string, maxLength) => string.length <= maxLength;

returnLenght();

// function 2

const isPolyndrome = (string) => {
  string = string.replaceAll(' ', '').toLowerCase();
  const reversedString = string.split('').reverse().join('');
  return string === reversedString;
}

isPolyndrome();
