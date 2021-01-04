const DELAY_LARGO = 10000;
const sliderGaleria = document.querySelector('#galeria .slider');
const btnFotoAnterior = document.getElementById('foto_anterior');
const btnFotoSiguiente = document.getElementById('foto_siguiente');
const numImgGaleria = document.querySelectorAll('#galeria .slider img').length;
let indiceFoto = 1;
let widthImgGaleria = 0;
let galeriaTimer = setInterval(() => {
  desplazarImagen(1);
}, 5000);

function setWidthImgGaleria() {
  widthImgGaleria = document.querySelectorAll('.slider img')[0].offsetWidth;
}
function transparentarNav() {
  const SCROLL_PX = 50;
  if (document.body.scrollTop > SCROLL_PX || document.documentElement.scrollTop > SCROLL_PX) {
    document.querySelector('nav').classList.remove("sin-fondo");
  } else {
    document.querySelector('nav').classList.add("sin-fondo");
  }
}

function desplazarImagen(desplazamiento) {
  sliderGaleria.style.transition = "transform 0.4s ease-in-out";
  indiceFoto += desplazamiento;
  sliderGaleria.style.transform = "translateX(" + (-widthImgGaleria * indiceFoto) +"px)";
}

window.addEventListener('scroll', () => {
  transparentarNav();
});

window.addEventListener('resize', () => {
  setWidthImgGaleria();
  desplazarImagen(0);
});
window.addEventListener('load', () => {
  setWidthImgGaleria();
  console.log(widthImgGaleria);
  desplazarImagen(0);
});

btnFotoAnterior.addEventListener('click', () => {
  clearInterval(galeriaTimer);
  galeriaTimer = setInterval(() => {
    desplazarImagen(1);
  }, DELAY_LARGO);
  if(indiceFoto == 0)
    return;
  desplazarImagen(-1);
});

btnFotoSiguiente.addEventListener('click', () => {
  clearInterval(galeriaTimer);
  galeriaTimer = setInterval(() => {
    desplazarImagen(1);
  }, DELAY_LARGO);
  if(!(indiceFoto < numImgGaleria-1))
    return;
  desplazarImagen(1);
});

sliderGaleria.addEventListener('transitionend', () => {
  if(indiceFoto == 0) {
    sliderGaleria.style.transition = "none";
    indiceFoto = numImgGaleria - 2;
    sliderGaleria.style.transform = "translateX(" + (-widthImgGaleria * indiceFoto) +"px)";
  }
  if(indiceFoto == numImgGaleria-1) {
    sliderGaleria.style.transition = "none";
    indiceFoto = numImgGaleria - indiceFoto;
    sliderGaleria.style.transform = "translateX(" + (-widthImgGaleria * indiceFoto) +"px)";
  }
});
document.querySelector('nav').classList.add("sin-fondo");