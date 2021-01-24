import selectMenu from './select-menu.js';
import countDishes from './dish-counters.js';

const app = () => {
  const dishesTypesList = document.querySelector('.s-dishes-types-list');
  selectMenu(dishesTypesList);

  countDishes();
};

app();
