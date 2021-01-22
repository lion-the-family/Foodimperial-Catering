import selectMenu from './select-menu.js'

const app = () => {
  const dishesTypesList = document.querySelector('.s-dishes-types-list');
  selectMenu(dishesTypesList);
};

app();
