'use strict';

const ADMIN_PASSWORD = 'jqueryismyjam';

let message = prompt('Введите парль!');

if (message === null) {
  console.log('Отменено пользователем');
} else if (message === ADMIN_PASSWORD) {
  console.log('Добро пожаловать!');
} else {
  console.log('Доступ запрещен, неверный пароль!');
}

alert(message);
