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

                if (posicionActual < 1900 && posicionActual > activarAnimacionEn + 700) {
                    content2.style.transform = "translateX(0)";
                } else {
                    content2.style.transform = "translateX(-100vw)";
                }

                if (posicionActual > 1900) {
                    content3.style.transform = "translateX(0vw)";
                } else {
                    content3.style.transform = "translateX(100vw)";
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
                    content3.style.transform = "translateX(60vw)";
                }
            }

            // Imprimir si se está scrolleando
            console.log('Se está scrolleando...');
        });
    } else {
        console.error("No se encontraron los elementos content-1 y content-2");
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const waterSavedElement = document.getElementById('water-saved');
    let waterQuantity = parseFloat(localStorage.getItem('waterQuantity')) / 5.3;
    if (isNaN(waterQuantity) || waterQuantity <= 0) {
        waterQuantity = 0;
    }
    if (waterSavedElement) {
        const formattedWaterQuantity = parseFloat(waterQuantity.toFixed(1)).toLocaleString('en-US');
        waterSavedElement.textContent = `${formattedWaterQuantity} botellas`;
    }

    let CO2 = waterQuantity * 0.210;
    if (isNaN(CO2) || CO2 <= 0) {
        CO2 = 0;
    }
    const co2SavedElement = document.getElementById('co2-saved');
    if (co2SavedElement) {
        const formattedCO2 = parseFloat(CO2.toFixed(1)).toLocaleString('en-US');
        co2SavedElement.textContent = `${formattedCO2} kg de CO2`;
    }
});