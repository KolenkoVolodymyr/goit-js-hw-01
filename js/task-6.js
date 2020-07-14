'use strict';

let total = 0;

while (true) {
  let input = prompt('Введите число');

  if (input === null) {
    break;
  }

  input = Number(input);
  total += input;
}

alert(`Общаяя сумма чисел равна ${total}`);
