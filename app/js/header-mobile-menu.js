const headerMenu = () => {
  const button = document.querySelector('.site-menu-btn');
  const container = document.querySelector('.site-header-container');
  console.log(button);

  button.addEventListener('click', () => {
    container.classList.toggle('active');
  });
};

export default headerMenu;