import selectMenu from './select-menu.js';
import countDishes from './dish-counters.js';

const app = () => {
  const menuLists = [
    document.querySelector('.s-dishes-types-list'),
    document.querySelector('.s-payment-menu'),
  ];

  menuLists.forEach((item) => selectMenu(item));

  countDishes();
};

app();
