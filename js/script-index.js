const main = function() {
  window.addEventListener('scroll', () => {
    transparentarNav();
  });
  document.querySelector('nav').classList.add("sin-fondo");
  const slider = new MainSlider(".galeria-fotos");
  slider.renderContent();
  setInterval(() => {
    slider.changeImage();
  }, slider.DELAY_FOR_IMAGE_CHANGE);
  window.onresize = function() {
    slider.renderContent();
  }
}

function transparentarNav() {
  const SCROLL_PX = 50;
  if (document.body.scrollTop > SCROLL_PX || document.documentElement.scrollTop > SCROLL_PX) {
    document.querySelector('nav').classList.remove("sin-fondo");
  } else {
    document.querySelector('nav').classList.add("sin-fondo");
  }
}

main()
