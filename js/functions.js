// function 1

const checkStringLength = (string, maxLength) => string.length <= maxLength;

checkStringLength();

// function 2

const isPolyndrome = (string) => {
  string = string.replaceAll(' ', '').toLowerCase();
  const reversedString = string.split('').reverse().join('');
  return string === reversedString;
};

isPolyndrome();
