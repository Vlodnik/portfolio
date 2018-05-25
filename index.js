function toggleMenu(e) {
  e.preventDefault();
  const toggled = $('.dropdown').hasClass('is-active');
  if (toggled) {
    $('.dropdown').removeClass('is-active');
  } else {
    $('.dropdown').addClass('is-active');
  }
}

function scrollToTop(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop: 0});
  if($('.dropdown').hasClass('is-active')) {
    toggleMenu(e);
  }
}

function scrollToProjects(e) {
  e.preventDefault();
  const scrollCorrection = window.innerHeight / 10 - 2;
  $('html, body').animate({scrollTop: $('#projects').offset().top - scrollCorrection});

  if($('.dropdown').hasClass('is-active')) {
    toggleMenu(e);
  }
}

function scrollToAbout(e) {
  e.preventDefault();
  const scrollCorrection = window.innerHeight / 10 - 2;
  $('html, body').animate({scrollTop: $('#about').offset().top - scrollCorrection});

  if($('.dropdown').hasClass('is-active')) {
    toggleMenu(e);
  }
}

function scrollToContact(e) {
  e.preventDefault();
  const scrollCorrection = window.innerHeight / 10 - 2;
  $('html, body').animate({scrollTop: $('#contact').offset().top - scrollCorrection});

  if($('.dropdown').hasClass('is-active')) {
    toggleMenu(e);
  }
}

function handleMenuToggle() {
  $('#hamburger').click(toggleMenu);
}

function handleScrollToTop() {
  $('.home').click(scrollToTop);
}

function handleScrollToProjects() {
  $('.dropdown li:first-child').click(scrollToProjects);
}

function handleScrollToAbout() {
  $('.dropdown li:nth-child(2)').click(scrollToAbout);
}

function handleScrollToContact() {
  $('.dropdown li:nth-child(3)').click(scrollToContact);
}

function setupListeners() {
  handleMenuToggle();
  handleScrollToTop();
  handleScrollToProjects();
  handleScrollToAbout();
  handleScrollToContact();
}

setupListeners();
