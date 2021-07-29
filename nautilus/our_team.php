<!DOCTYPE html>
<html lang="es" dir="ltr">
  <head>
    <?php require('header.php'); ?>
    <title>Nautilus 4010 | Equipo</title>
    <link rel="stylesheet" type="text/css" href="css/estilos-our-team.css">
  </head>
  <body style="background-color: #040000;">
    
    <!-- Navbar section -->
    <?php include('nav.php'); ?>
    <!-- Navbar section -->

    <!-- Header -->
    <header>
      <div class="centre">
        <h1>"We are building a <span id="legacy">legacy</span>"</h1>
        <p>Equipo formado en el 2011, en el Tecnológico de Monterrey, Campus Ciudad de México, que participa en la categoría FRC de FIRST, organización que busca difundir robótica entre jóvenes de todo el mundo.</p>
      </div>
    </header>
    <!-- Header -->

    <!-- Navbar Team Roosters -->
    <section id="year-btns">
      <div class="centre flexbox">
        <button>2020</button>
        <button>2021</button>
      </div>
    </section>
    <!-- Navbar Team Roosters -->

    <!-- Estudiantes -->
    <section id="estudiantes">
      <div class="centre flexbox"></div>
    </section>
    <!-- Estudiantes -->

    <!-- Mentores -->
    <section id="mentores">
      <div class="centre">
        <h2>Mentores</h2>
      </div>
      <div class="centre flexbox"></div>
    </section>
    <!-- Mentores -->

    <!-- Coaches -->
    <section id="coaches">
      <div class="centre">
        <h2>Coaches</h2>
      </div>
      <div class="centre flexbox"></div>
    </section>
    <!-- Coaches -->

    <footer>

      <?php include "footer.php"; ?>

    </footer>
    <!-- Scripts -->
    <script src="./js/Classes/TeamMember.js"></script>
    <script src="./js/Classes/Coach.js"></script>
    <script src="./js/Classes/Mentor.js"></script>
    <script src="./js/Classes/Student.js"></script>
    <script src="./js/Classes/TeamAreas.js"></script>
    <script src="./js/Classes/TeamRooster.js"></script>
    <script src="./js/team-rooster.js"></script>
    <!-- Scripts -->
  </body>
</html>
