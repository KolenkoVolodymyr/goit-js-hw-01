'use strict';

const australia = 170;
const china = 100;
const chili = 250;
const india = 80;
const jamaica = 120;

let country = prompt('Введите страну для доставки товара');

if (country === null) {
  console.log('Отменено пользователем');
} else {
  switch (country.toLowerCase()) {
    case 'австралия':
      console.log(`Доставка в ${country} будет стоить ${australia} кредитов`);
      break;
    case 'китай':
      console.log(`Доставка в ${country} будет стоить ${china} кредитов`);
      break;
    case 'чили':
      console.log(`Доставка в ${country} будет стоить ${chili} кредитов`);
      break;
    case 'индия':
      console.log(`Доставка в ${country} будет стоить ${india} кредитов`);
      break;
    case 'ямайка':
      console.log(`Доставка в ${country} будет стоить ${jamaica} кредитов`);
      break;
    default:
      console.log('В Вашу страну доставка отсутствует');
  }
}
