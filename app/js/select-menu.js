const selectMenu = (rootList) => {
  rootList.addEventListener('click', (event) => {
    const triggeredItem = event.target.closest('li');

    if (!triggeredItem || triggeredItem.classList.contains('active')) return;

    const activeItem = rootList.querySelector('.active');

    if (activeItem) {
      activeItem.classList.remove('active');
    }

    triggeredItem.classList.add('active');
  });
}

export default selectMenu;