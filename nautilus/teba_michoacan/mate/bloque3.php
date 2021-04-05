<!DOCTYPE html>
<html lang="es" dir="ltr">
  <head>
    <?php require('../header_teba.php'); ?>
    <title>Matemáticas | Bloque 3</title>
    <link rel="stylesheet" type="text/css" href="../../css/teba/general.css">
  </head>
  <body style="background-color: #040000;">
    
    <!-- Navbar section -->
    <?php include('../nav_teba.php'); ?>
    <!-- Navbar section -->

    <!-- Header -->
    <header>
      <div class="centre">
        <h1>Realiza sumas y secesiones de números</h1>
        <p class="autor">Autor: Antonio Rafael Cedillo</p>
      </div>
    </header>
    <!-- Header -->

    <!-- Contenido -->
    <section class="contenido">
      <div class="centre">
        <h2>Sucesiones aritméticas</h2>
        <p class="parrafo">Una sucesión aritmética es donde cada uno de los términos tiene diferencia de un número fijo al término anterior y posterior.</p>
        <p class="ecuacion">1, 2, 3, 4, 5</p>
        <p class="ecuacion">2 - 1 = 1</p>
        <p class="ecuacion">3 - 2</p>
        <p class="ecuacion">4 - 3</p>
        <p class="ecuacion">5 - 4</p>
        <p class="parrafo">En la serie anterior, la diferencia es uno, ya que si restas el número anterior por el posterior, siempre saldrá uno.</p>
        <p class="parrafo">Existe una fórmula para expresar estas secuencias:</p>
        <p class="ecuacion">Un = U1 + (n - 1)d</p>
        <p class="parrafo">donde:</p>
        <p class="parrafo">Un = Término en (el que estás buscando)</p>
        <p class="parrafo">U1 = Primer término de la sucesión</p>
        <p class="parrafo">n = El número que estás buscando</p>
        <p class="parrafo">d = diferencia.</p>
        <h3>Cómo usar la fórmula</h3>
        <ol>
          <li>Encuentra la diferencia</li>
          <li>Usa la fórmula, sustituyendo los valores</li>
          <li>Resuelve la fórmula</li>
        </ol>
        <p class="ecuacion">38, 64, 90, ...</p>
        <p class="ecuacion">U1 = 38</p>
        <p class="ecuacion">d = 64 - 38 = 26</p>
        <p class="ecuacion">n = 10</p>
        <p class="ecuacion">U10 = 38 + (10 - 1)(26)</p>
        <p class="ecuacion">U10 = 272</p>
      </div>
    </section>

    <section class="contenido">
      <div class="centre">
        <h2>Series aritméticas</h2>
        <p class="parrafo">Una serie es una suma de todos los términos en una secuencia se le denomina serie. La suma de todos los términos en una sucesión aritmética es una serie aritmética.</p>
        <p class="ecuacion">5, 12, 19, 26, 33, 40</p>
        <p class="ecuacion">5 + 12 + 19 + 26 + 33 + 40 = 135</p>
        <p class="parrafo">Si hay varios términos en una serie, como 20 o 50, es mejor usar la siguientes formulas, úsalas dependiendo de tus recursos, en lugar de, sumar y sumar términos.</p>
        <p class="ecuacion">Sn = n2(u1 + un)</p>
        <p class="ecuacion">Sn = n2[2u1 + (n - 1)d]</p>
        <p class="parrafo">donde:</p>
        <p class="parrafo">Sn = Suma de n términos</p>
        <p class="parrafo">n = Número de términos de la serie</p>
        <p class="parrafo">u1 = Primer término</p>
        <p class="parrafo">un = Término n</p>
        <p class="parrafo">d = Diferencia</p>
        <h3>Cómo usar las fórmulas</h3>
        <ol>
          <li>Revisa tus recursos</li>
          <li>Sustituye en la fórmula (dependiendo del paso 1)</li>
          <li>Resuelve</li>
        </ol>
        <p class="ecuacion">14 + 15.5 + 17 + 18.5 + ... + 50</p>
        <p class="ecuacion">n = 25</p>
        <p class="ecuacion">U1 = 14</p>
        <p class="ecuacion">Un = 50</p>
        <p class="ecuacion">S25 = 25/2(14 + 50)</p>
        <p class="ecuacion">S25 = 800</p>
      </div>
    </section>

    <section class="contenido">
      <div class="centre">
        <h2>Sucesiones geométricas</h2>
        <p class="parrafo">Una sucesión geométrica es donde se obtiene el siguiente término multiplicando el término anterior por un número fijo. Esto se le llama razón común o r.</p>
        <p class="ecuacion">1 x 2  = 2</p>
        <p class="ecuacion">2 x 2 = 4</p>
        <p class="ecuacion">4 x 2 = 8</p>
        <p class="ecuacion">8 x 2 = 16</p>
        <p class="parrafo">La fórmula que se ocupa en la serie geométrica es la siguiente:</p>
        <p class="ecuacion">Un = U1(rn - 1)</p>
        <p class="parrafo">donde:</p>
        <p class="parrafo">Un = Término que estas buscando</p>
        <p class="parrafo">nU1 = Primer término</p>
        <p class="parrafo">n = Número del término que buscas</p>
        <p class="parrafo">r = Razón</p>
        <h3>Cómo usar la fórmula</h3>
        <ol>
          <li>Encuentra la razón</li>
          <li>Sustituye en la fórmula</li>
          <li>Resuelve</li>
        </ol>
        <p class="ecuacion">2, 8, 32, ...</p>
        <p class="ecuacion">U1 = 2</p>
        <p class="ecuacion">r = 8/2 = 32/8</p>
        <p class="ecuacion">r = 4</p>
        <p class="ecuacion">U15 = 2(4^(15 - 1))</p>
        <p class="ecuacion">U15 = 536,870,912</p>
      </div>
    </section>

    <section class="contenido">
      <div class="centre">
        <h2>Series geométricas</h2>
        <p class="parrafo">Una serie geométrica es la suma de todos los miembros de una secuencia geométrica.</p>
        <p class="parrafo">Dependiendo de la razón, usaremos una de dos formulas:</p>
        <p class="ecuacion">r &gt; 1: Sn = (U1(r^(n-1)-1))/(r - 1)</p>
        <p class="ecuacion">r &lt; 1: Sn = (U1(1 - r^(n-1)))/(1 - r)</p>
        <p class="parrafo">donde:</p>
        <p class="parrafo">Sn = La suma de n términos</p>
        <p class="parrafo">U1 = Primer término</p>
        <p class="parrafo">n = Número del término que buscas</p>
        <p class="parrafo">r = Razón</p>
        <h3>Cómo usar la fórmula</h3>
        <ol>
          <li>Revisa tus recursos</li>
          <li>Sustituye en la fórmula</li>
          <li>Resuelve</li>
        </ol>
        <p class="ecuacion">1 + 3 + 9 + ...</p>
        <p class="ecuacion">U1 = 1</p>
        <p class="ecuacion">r = 3/1 = 3</p>
        <p class="ecuacion">r &gt; 1</p>
        <p class="ecuacion">Sn = (U1(r^(n-1)-1))/(r - 1)</p>
        <p class="ecuacion">Sn = (1(3^(12-1)-1))/(3 - 1)</p>
        <p class="ecuacion">Sn = 265,720</p>
      </div>
    </section>

    <section class="contenido">
      <div class="centre">
        <h2>Ejercicios</h2>
        <ol>
          <li>Encuentra el 20° término de la progresión aritmética 84, 81, 78, ...</li>
          <li>En la sucesión aritmética: 18, 24, 36... Encuentra la suma de los primeros 20 términos.</li>
          <li>Encuentra el 12° término de la secuencia 7, −14, 28, −56, ...</li>
          <li>Calcula el valor de S12 para la serie geométrica 0.3 + 0.6 + 1.2 + ...</li>
        </ol>
      </div>
    </section>

    <section class="referencias">
    <h2>Referencias</h2>
    <p class="parrafo">Haese, S., Haese, M., Haese, R., Humphries, M. & Maenpaa, M. (2020) MATHEMATICS F/INTL. STUDENT: SL-W/CD (3rd ed.). Haese Mathematics.</p>
    </section>
    <!-- Contenido -->

    <footer>

      <?php include "../footer_teba.php"; ?>

    </footer>

    <!-- Scripts -->
    <!-- Scripts -->
  </body>
</html>
