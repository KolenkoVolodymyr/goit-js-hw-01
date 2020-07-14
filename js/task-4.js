'use strict';

const pricePerDroid = 3000;
let credits = 23580;
let totalPrice;
let numberOfDroids = prompt('Сколько дроидов Вы хотите купить?');

if (prompt === null) {
  console.log('Отменено пользователем');
} else if (numberOfDroids === '') {
  console.log('Вы ничего не ввели');
} else {
  totalPrice = pricePerDroid * numberOfDroids;
  if (totalPrice > credits) {
    console.log('На счету недостаточно средств!');
  } else {
    credits -= totalPrice;
    console.log(
      `Вы купили ${numberOfDroids} дроидов, на счету осталось ${credits}`,
    );
  }
}
