const selectMenu = (rootList) => {
  rootList.addEventListener('click', (e) => {
    const triggeredItem = e.target.closest('li');

    if (!triggeredItem || triggeredItem.classList.contains('active')) return;

    const activeItem = rootList.querySelector('.active');

    if (activeItem) {
      activeItem.classList.remove('active');
    }

    triggeredItem.classList.add('active');
  });
}

export default selectMenu;