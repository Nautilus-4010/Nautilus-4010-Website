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

function mostrarFormulario() {
  var formulario = document.getElementById("formulario");
  var boton = document.querySelector(".boton");
  if (formulario.style.display === "none") {
      formulario.style.display = "block";
      boton.innerHTML = "Ocultar formulario";
  } else {
      formulario.style.display = "none";
      boton.innerHTML = "Mostrar formulario";
  }
}


var intervalID;

function startSlideshow() {
  intervalID = setInterval(nextImage, 13000); // cambia la imagen cada 3 segundos
}

function stopSlideshow() {
  clearInterval(intervalID);
}

function nextImage() {
  var currentImage = document.querySelector('.slideshow img:first-child');
  var nextImage = document.querySelector('.slideshow img:nth-child(2)');
  var nextNextImage = document.querySelector('.slideshow img:nth-child(3)');
  
  currentImage.style.opacity = '0';
  nextImage.style.opacity = '1';
  
  // Intercambiar las imágenes
  setTimeout(function() {
    currentImage.parentNode.appendChild(currentImage);
  }, 1000);
}

// Iniciar la presentación automáticamente
startSlideshow();

var annos = new Date().getFullYear() - 2011;
  
document.getElementById("annos").innerHTML = annos;

const asuntoSelect = document.getElementById("asunto");
const otherOptionDiv = document.getElementById("otherOptionDiv");
const otherOptionInput = document.getElementById("otherOption");

asuntoSelect.addEventListener("change", () => {
  if (asuntoSelect.value === "other") {
    otherOptionDiv.style.display = "block";
    otherOptionInput.required = true; // añade la validación requerida
  } else {
    otherOptionDiv.style.display = "none";
    otherOptionInput.required = false; // remueve la validación requerida
  }
});

function autoResize(element) {
  element.style.height = 'auto'; /* Restablece la altura a 'auto' */
  element.style.height = element.scrollHeight + 'px'; /* Ajusta la altura según el contenido */
}