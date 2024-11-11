console.log("Se inició el script");

// Función para detectar si el dispositivo es móvil
function esDispositivoMovil() {
    return /Mobi|Android/i.test(navigator.userAgent);
}

// Definir el valor cuando quieres activar la animación al hacer scroll
const activarAnimacionEn = 300;  // Ajusta este valor según tus necesidades

document.addEventListener('DOMContentLoaded', () => {
    // Obtener los elementos con los que quieres interactuar
    const content1 = document.getElementById('content-1');
    const content2 = document.getElementById('content-2');
    const content3 = document.getElementById('content-3');

    if (content1 && content2) {
        console.log("Elementos encontrados:", content1, content2);

        // Escuchar el evento de scroll
        window.addEventListener('scroll', () => {
            const posicionActual = window.scrollY;
            console.log('Posición del scroll:', posicionActual);

            if (esDispositivoMovil()) {
                // Comportamiento para dispositivos móviles
                console.log("Dispositivo móvil detectado");
                // ...agrega aquí el comportamiento específico para móviles...
                if (posicionActual < activarAnimacionEn + 700 && posicionActual > activarAnimacionEn) {
                    content1.style.transform = "translateX(0)";
                } else {
                    content1.style.transform = "translateX(100vw)";
                }

                if (posicionActual >= activarAnimacionEn && posicionActual < activarAnimacionEn + 700 && posicionActual > 1900) {
                    content2.style.transform = "translateX(-100vw)";
                } else {
                    content2.style.transform = "translateX(0)";
                }

                if (posicionActual > activarAnimacionEn + 700) {
                    content3.style.transform = "translateX(0vw)";
                } else {
                    content3.style.transform = "translateX(-100vw)";
                }
            } else {
                // Comportamiento para computadoras
                console.log("Computadora detectada");
                // ...agrega aquí el comportamiento específico para computadoras...
                if (posicionActual < activarAnimacionEn + 700 && posicionActual > activarAnimacionEn) {
                    content1.style.transform = "translateX(0vw)";
                } else {
                    content1.style.transform = "translateX(60vw)";
                }

                if (posicionActual < 1900 && posicionActual > activarAnimacionEn + 700) {
                    content2.style.transform = "translateX(0vw)";
                } else {
                    content2.style.transform = "translateX(-60vw)";
                }

                if (posicionActual > 1900) {
                    content3.style.transform = "translateX(0vw)";
                } else {
                    content3.style.transform = "translateX(100vw)";
                }
            }

            // Imprimir si se está scrolleando
            console.log('Se está scrolleando...');
        });
    } else {
        console.error("No se encontraron los elementos content-1 y content-2");
    }
});
