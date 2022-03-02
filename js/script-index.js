const main = function() {
  window.addEventListener('scroll', () => {
    transparentarNav();
  });
  document.querySelector('nav').classList.add("sin-fondo");
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
