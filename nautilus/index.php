<!DOCTYPE html>
<html lang="es" dir="ltr">
  <head>
    <?php require('header.php'); ?>
    <title>Nautilus 4010</title>
    <link rel="stylesheet" type="text/css" href="css/estilos-index.css">
  </head>
  <body style="background-color: #040000;">
    
    <!-- Navbar section -->
    <?php include('nav.php'); ?>
    <!-- Navbar section -->

    <!-- Header -->
    <header id="fotos-equipo">
    <div class="foto-pantalla" id="foto-regional-monterrey"></div>
      <div class="foto-pantalla" id="foto-gradas"></div>
      <div class="foto-pantalla" id="container-logo">
        <div class="centre">
          <img src="img/logos/Nautilus-amarillo.png" alt="" id="logo-grande">
        </div>
      </div>
    </header>
    <!-- Header -->

    <!-- Abstract -->
    <section id="abstract">
      <div class="centre">
        <div class="abstract-text">
        <h1>Nautilus 4010</h1>
        <p>Nautilus 4010 es el equipo de robótica participante en FRC (FIRST Robotics Competition) del Tecnológico de Monterrey Campus Ciudad de México, que difunde la ciencia y tecnología en su comunidad.</p>
        </div>
      </div>
    </section>
    <!-- Abstract -->

    <!-- About us -->
    <section id="about-us">
      <div class="centre flexbox">
        <div class="card">
        <h3>Misión</h3>
        <p>Educar a jóvenes líderes con el fin de generar un cambio en el mundo, compartiendo y aplicando la ciencia y la tecnología.</p>
        </div>
        <div class="card">
          <h3>Visión</h3>
          <p>Para 2025 seremos el equipo FIRST con mayor impacto, crecimiento y desarrollo de habilidades STEM y responsabilidad social en México. Queremos generar un cambio en nuestra comunidad creando agentes de cambio inspiradores y comprometidos con los ideales y valores del equipo.</p>
        </div>
        <div class="card">
        <h3>Alcance</h3>
        <p>En <?= (date('Y') - 2011) ?> años de historia, Nautilus 4010 ha tenido un alcance de 100,000 personas impactando a niños y jóvenes de toda la República Mexicana.</p>
        </div>
      </div>
      <p></p>
    </section>
    <!-- About us -->

    <!-- Areas -->
    <section id="areas">
      <div class="centre">
        <h2 class="texto-amarillo">Áreas del equipo</h2>
        <div class="area" id="fondo-ingenieria">
          <div>
            <h3>Ingeniería</h3>
            <p>CAD, mecánica, programación y electrónica, FLL y FTC.</p>
          </div>
        </div>
        <div class="area" id="fondo-negocios">
          <div>
            <h3>Negocios</h3>
            <p>Patrocinios, finanzas, logística, organización de eventos.</p>
          </div>
        </div>
        <div class="area" id="fondo-axm">
          <div>
            <h3>Acciones X México</h3>
            <p>Recursos humanos, reclutamiento, alianzas estratégicas, proyectos sociales.</p>
          </div>
        </div>
        <div class="area" id="fondo-comunicacion">
          <div>
            <h3>Comunicación</h3>
            <p>Redes sociales, documentación, imagen, fotografía.</p>
          </div>
        </div>
      </div>
    </section>
    <!-- Areas -->

    <!-- Redes sociales -->
    <section class="redes-sociales">
      <div class="centre">
      <h2 class="redes-sociales">¡S&iacute;guenos en redes sociales!</h2>
        <div class="flexbox">
          <div class="redes-sociales">
            <a href="https://www.instagram.com/nautilus_4010/" target="_blank">
              <div class="flexbox">
                <img src="img/iconos/instagram.svg" alt="Siguenos en Instagram">
                <h6 class="link">nautilus_4010</h6>
              </div>
            </a>
          </div>
          <div class="redes-sociales">
            <a href="https://twitter.com/frcnautilus4010" target="_blank">
              <div class="flexbox">
                <img src="img/iconos/twitter.svg" alt="Siguenos en Twitter">
                <h6 class="link">@FRCNautilus4010</h6>
              </div>
            </a>
          </div>
          <div class="redes-sociales">
            <a href="https://www.facebook.com/nautilus4010/" target="_blank">
              <div class="flexbox">
                <img src="img/iconos/facebook.svg" alt="Siguenos en Facebook">
                <h6 class="link">Nautilus 4010</h6>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
    <!-- Redes sociales -->

    <!-- Patrocinadores -->
    <section id="patrocinadores">
      <div class="centre">
        <div class="flexbox primer-nivel">
          <img src="img/patrocinadores/Qualcomm.png" alt="Qualcomm">
          <img src="img/patrocinadores/motorola-solutions-foundation.png" alt="Motorola Solutions Foundation">
          <img src="img/patrocinadores/tec_monterrey.png" alt="Tecnológico de Monterrey" id="logo-tec">
          <img src="img/patrocinadores/fundacion-azteca.png" alt="Fundación Azteca de Grupo Salinas">
          <img src="img/patrocinadores/ni-logo.jpg" alt="National Instruments">
          <img src="img/patrocinadores/six_flags.png" alt="Six Flags México">
        </div>
      </div>
    </section>
    <!-- Patrocinadores -->

    <!-- Galeria -->
    <section id="galeria">
      <h2><span class="texto-amarillo">More</span> than robots!</h2>
      <div class="flexbox">
      <img src="img/landing-page/girl-stem.jpg" alt="Nuevas miembro del equipo tomando sus capacitaciones de ingeniería.">
      <img src="img/landing-page/electronica-taller.jpg" alt="El equipo de ingeniería trabajando en la electrónica del robot.">
      </div>
    </section>
    <!-- Galeria -->

    <footer>

    <div>Icons made by <a href="https://www.flaticon.com/authors/roundicons" title="Roundicons">Roundicons</a> from <a href="https://www.flaticon.com/"     title="Flaticon">www.flaticon.com</a></div><div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"     title="Flaticon">www.flaticon.com</a></div>
      
      <div class="centre firma flexbox">
        <a href="https://diegomont.github.io" class="firma">&lt;/&gt; with <span id="corazon" class="firma">&#9829;</span> by <span class="firma">DiegoMont</span></a>
      </div>
    </footer>

    <!-- Scripts -->
    <script src="js/script-index.js" charset="utf-8"></script>
    <!-- Scripts -->
  </body>
</html>
