const paymentMenu = () => {
  const menu = document.querySelector('.s-payment-menu');

  menu.addEventListener('click', (e) => {
    const triggeredItem = e.target.closest('.s-payment-item');
    const activeItem = menu.querySelector('.s-payment-item.active');

    if (!triggeredItem || triggeredItem.classList.contains('.active')) return;

    if (activeItem) activeItem.classList.remove('active');
    triggeredItem.classList.add('active');
  });
}

export default paymentMenu;