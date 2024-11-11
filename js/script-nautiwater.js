console.log("Se inició el script");

// Definir el valor cuando quieres activar la animación al hacer scroll
const activarAnimacionEn = 300;  // Ajusta este valor según tus necesidades

document.addEventListener('DOMContentLoaded', () => {
    // Obtener los elementos con los que quieres interactuar
    const content1 = document.getElementById('content-1');
    const content2 = document.getElementById('content-2');

    if (content1 && content2) {
        console.log("Elementos encontrados:", content1, content2);

        // Escuchar el evento de scroll
        window.addEventListener('scroll', () => {
            const posicionActual = window.scrollY;
            console.log('Posición del scroll:', posicionActual);

            // Animar el contenido de la primera sección
            if (posicionActual >= activarAnimacionEn && posicionActual <= activarAnimacionEn + 900) {
                console.log("Activando animación en content1");
                content1.style.transform = "translateX(0vw)";
            } else {
                console.log("Desactivando animación en content1");
                content1.style.transform = "translateX(60vw)";
            }

            // Animar el contenido de la segunda sección de manera similar
            if (posicionActual > activarAnimacionEn + 900) {
                console.log("Activando animación en content2");
                content2.style.transform = "translateX(0vw)";
            } else {
                console.log("Desactivando animación en content2");
                content2.style.transform = "translateX(-60vw)";
            }

            // Imprimir si se está scrolleando
            console.log('Se está scrolleando...');
        });
    } else {
        console.error("No se encontraron los elementos content-1 y content-2");
    }
});
