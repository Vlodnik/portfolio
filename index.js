function toggleMenu(e) {
  e.preventDefault();
  let toggled = $('.dropdown').hasClass('is-active');
  if (toggled) {
    $('.dropdown').removeClass('is-active');
  } else {
    $('.dropdown').addClass('is-active');
  }
}

function handleMenuToggle() {
  $('#hamburger').click(toggleMenu);
}

function handle

function setupListeners() {
  handleMenuToggle();
}

setupListeners();
