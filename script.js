'use stict';
let randomNum = function () {
  return Math.ceil(Math.random() * 100 + 1);
};

let isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

function getGuessNumber() {
  let number = randomNum();
  let n = prompt('Угадай число от 1 до 100');

  function getStart() {

    console.log('number: ', number);

    if (n === number) {
      alert('Поздравляю вы угодали');
      return true;
    } else if (n > number) {
      n = prompt('Загаданное число меньше');
      return getStart();
    } else if (n < number) {
      n = prompt('Загаданное число больше');
      return getStart();
    } else if (!isNumber(n)) {
      n = prompt('Введи число!');
      return getStart();
    }

  }
  return getStart();
}
getGuessNumber();