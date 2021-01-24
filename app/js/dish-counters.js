const countDishes = () => {
  const gallery = document.querySelector('.s-dishes-gallery');

  gallery.addEventListener('click', (e) => {
    const counter = e.target.closest('.dish-counter');
    const button = e.target.closest('[data-counter-btn]');

    if (!(counter && button)) return;

    const numberElem = counter.querySelector('.dish-counter-number');
    let number = +numberElem.textContent;

    if (button.classList.contains('dish-counter-minus') && number > 1) number--;
    if (button.classList.contains('dish-counter-plus') && number < 99) number++;

    numberElem.textContent = number;
  });
}

export default countDishes;