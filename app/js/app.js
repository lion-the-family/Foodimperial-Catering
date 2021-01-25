import headerMenu from './header-mobile-menu.js';
import filterMenu from './select-menu.js';
import countDishes from './dish-counters.js';

const app = () => {
  countDishes();
  filterMenu();
  headerMenu();
};

app();
