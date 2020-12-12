<!DOCTYPE html>
<html lang="es" dir="ltr">
  <head>
    <meta charset="utf-8">
    <meta name="description" content="Nautilus 4010 es el equipo de robótica participante en FRC (FIRST Robotics Competition) del Tecnológico de Monterrey Campus Ciudad de México, que difunde la ciencia y tecnología en su comunidad.">
    <meta name="keywords" content="FRC, robots, robótica, México, equipo, FIRST">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nautilus 4010</title>
    <link rel="stylesheet" type="text/css" href="css/Reset.css">
    <link rel="stylesheet" type="text/css" href="css/general.css">
    <link rel="stylesheet" type="text/css" href="css/estilos-index.css">
    <link rel="icon" type="image/png" href="img/logos/nautilus.png">
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

    <!-- Galeria -->
    <section id="galeria">
      <div class="flexbox">
      <img src="img/landing-page/girl-stem.jpg" alt="Nuevas miembro del equipo tomando sus capacitaciones de ingeniería.">
      <img src="img/landing-page/electronica-taller.jpg" alt="El equipo de ingeniería trabajando en la electrónica del robot.">
      </div>
    </section>
    <!-- Galeria -->

    <footer>

    <div>Icons made by <a href="https://www.flaticon.com/authors/roundicons" title="Roundicons">Roundicons</a> from <a href="https://www.flaticon.com/"     title="Flaticon">www.flaticon.com</a></div><div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"     title="Flaticon">www.flaticon.com</a></div>
      
      <div class="centre firma flexbox">
        <a href="https://github.com/DiegoMont" class="firma">&lt;/&gt; with <span id="corazon" class="firma">&#9829;</span> by <span class="firma">DiegoMont</span></a>
      </div>
    </footer>

    <!-- Scripts -->
    <script src="js/script-index.js" charset="utf-8" defer></script>
    <!-- Scripts -->
  </body>
</html>
