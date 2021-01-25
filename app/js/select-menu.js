const filterMenu = () => {
  const container = document.querySelector('.s-dishes-container');

  const setStartState = () => {
    const items = document.querySelectorAll('[data-item]');
    const wholeItem = document.querySelector('.dish-type-all');

    items.forEach((item) => item.classList.remove('active'));
    wholeItem.classList.add('active');
  };

  setStartState();

  container.addEventListener('click', (e) => {
    const [item, filtersBtn, acceptBtn, closeBtn] = [
      '[data-item]',
      '.filters-btn',
      '.s-dishes-accept-btn',
      '.s-dishes-close-btn'
    ].map((selector) => e.target.closest(selector));

    if (item) item.classList.toggle('active');
    if (filtersBtn) container.classList.toggle('filtered');
    if (acceptBtn) container.classList.remove('filtered');

    if (closeBtn) {
      setStartState();
      container.classList.remove('filtered')
    }
  });
}

export default filterMenu;