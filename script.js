'use stict';

function getGuessNumber() {

  let randomNum = function () {
    return Math.ceil(Math.random() * 100 + 1);
  }

  let isNumber = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
  }

  function getStart() {
    let number = randomNum();
    console.log('number: ', number);

    let n = prompt('Угадай число от 1 до 100');

    if (n === number) {
      alert('Поздравляю вы угодали');
      return true;
    } else if (n > number) {
      prompt('Загаданное число меньше');
      return getStart();
    } else if (n < number) {
      prompt('Загаданное число больше');
      return getStart();
    } else if (!isNumber(n)) {
      prompt('Введи число!');
      return getStart();
    }

  }
  getStart();
}
getGuessNumber();