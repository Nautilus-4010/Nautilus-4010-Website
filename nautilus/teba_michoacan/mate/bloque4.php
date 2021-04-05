<!DOCTYPE html>
<html lang="es" dir="ltr">
  <head>
    <?php require('../header_teba.php'); ?>
    <title>Matemáticas | Bloque 4</title>
    <link rel="stylesheet" type="text/css" href="../../css/teba/general.css">
  </head>
  <body style="background-color: #040000;">
    
    <!-- Navbar section -->
    <?php include('../nav_teba.php'); ?>
    <!-- Navbar section -->

    <!-- Header -->
    <header>
      <div class="centre">
        <h1>Realiza transformaciones algebraicas</h1>
        <p class="autor">Autor: Antonio Rafael Cedillo</p>
      </div>
    </header>
    <!-- Header -->

    <!-- Contenido -->
    <section class="contenido">
      <div class="centre">
        <h2>4.1 Identificación de las operaciones de suma, resta y multiplicación de polinomios con una variable</h2>
        <p class="parrafo">Un polinomio es una expresión algebraica que consta más de una expresión algebraica, existen 3 tipos, de 2 términos (binomios), 3 términos (trinomios) y 4 términos (polinomios).</p>
        <p class="ecuacion">a + b (binomio)</p>
        <p class="ecuacion">a + b + c (trinomio)</p>
        <p class="ecuacion">a + b + c (polinomio)</p>
        <h3>Reducción de polinomios</h3>
        <p class="parrafo">Para reducir polinomios, se pueden hacer restas o sumas de términos que tengan las mismas letras (X,Y,Z,etc.). Esto se hace resolviendo las suma/resta de cada coeficiente por separado.</p>
        <p class="ecuacion">6a - 13b + 40c + 1000a -847c - 632b + 271b - 28c</p>
        <p class="ecuacion">6a + 1000a = 1006a</p>
        <p class="ecuacion">-13b - 632b + 271b = -645b + 271b = -374b</p>
        <p class="ecuacion">1006a - 374b - 835c</p>
        <h3>Multiplicación de polinomios</h3>
        <p class="parrafo">Una multiplicación de polinomios puede ser identificada si ambos polinomios están encerrados en paréntesis y juntos uno al otro, sin ningún signo entre ellos.</p>
        <p class="parrafo">Para realizar la multiplicación de polinomios, debemos seguir la ley distributiva, es decir, multiplicar cada término del polinomio por el otro polinomio, cambiando los signos si necesario.</p>
        <table>
          <tr><td>a * 3 = 3a</td></tr>
          <tr><td>a * a = a^2</td></tr>
          <tr><td>-4 * 3 = -12</td></tr>
          <tr><td>-4 * a = -4a</td></tr>
          <tr><td>3a + b - 12 - 4a = b - a - 12</td></tr>
        </table>
      </div>
    </section>

    <section class="contenido">
      <div class="centre">
        <h2>Identificación de los productos notables y sus relaciones con la factorización</h2>
        <p class="parrafo">Los productos notables son ciertos productos que cumplen ciertas reglas y su resultado no es necesario verificarlo con una suma.</p>
        <p class="parrafo">Un ejemplo es el cuadrado de una suma de dos cantidades siempre dará como resultado el cuadrado del primer término más el primero por el segundo por 2 más el cuadrado del segundo.</p>
        <p class="parrafo">Este es un producto notable ya que no necesitamos siempre desarrollar la multiplicación, ya que el resultado será el mismo.</p>
        <p class="ecuacion">(a + b)^2 = a^2 + 2ab + b^2</p>
        <p class="parrafo">Otros ejemplos son el de (a-b) al cuadrado y el cubo de un binomio.</p>
        <p class="ecuacion">(a - b)^2 = a^2 - 2ab + b^2</p>
        <p class="ecuacion">(a + b)^3 = a^3 + 3a^2b + 3ab^2 + b^3</p>
        <p class="parrafo">Un ultimo es una multiplicación de binomios, donde los términos a lado de las letras cumplen las siguientes reglas:</p>
        <ul>
          <li>El primer término del resultado es el producto de los dos primeros términos.</li>
          <li>El coeficiente (el que acompaña a la x) es la suma de los segundos términos y el exponente del coeficiente es la mitad del exponente del primer término (como x cuadrada y x).</li>
          <li>El tercer término es el producto de los 2 segundos términos.</li>
        </ul>
        <p class="ecuacion">(x + a)(x + b) = x^2 + bx + ax + ab</p>
        <h3>Los productos notables y su relación con la factorización</h3>
        <p class="parrafo">Estos productos notables pueden ser usados para factorizar, que seria el proceso al revés, de la expansión o resultado a la factorización o producto notable.</p>
        <p class="parrafo">Esto puede aplicarse para los binomios al cuadrado y cubo y la multiplicación de binomios.</p>
        <p class="parrafo">Binoimo al cuadrado</p>
        <p class="ecuacion">x^2 + 2xb + b^2 = x^2 + 8x + 16</p>
        <table>
          <tr>
            <td>Solución 1</td>
            <td>Solución 2</td>
          </tr>
          <tr>
            <td>2xb = 8x</td>
            <td>b^2 = 16</td>
          </tr>
          <tr>
            <td>b = 8x/2x</td>
            <td>b = 16^(1/2)</td>
          </tr>
          <tr>
            <td>b = 4</td>
            <td>b = 4</td>
          </tr>
          <tr><td>(x + 4)^2</td></tr>
        </table>
        <p class="parrafo">Binomio al cubo</p>
        <p class="ecuacion">x^3 + 10x^2 + 50x + 125</p>
        <table>
          <tr>
            <td>Solución 1</td>
            <td>Solución 2</td>
            <td>Solución 3</td>
          </tr>
          <tr>
            <td>2x^2b = 10x^2</td>
            <td>2xb^2 = 50x</td>
            <td>b^3 = 125</td>
          </tr>
          <tr>
            <td>b = 10x^2 / 2x^2</td>
            <td>b^2 = 50x / 2x</td>
            <td>b = 125^(1/3)</td>
          </tr>
          <tr>
            <td>b = 5</td>
            <td>b = 5</td>
            <td>b = 5</td>
          </tr>
          <tr><td>(x + 5)^3</td></tr>
        </table>
        <p class="parrafo">Multiplicación de binomios</p>
        <p class="ecuacion">x^2 + 13x + 42</p>
        <p class="ecuacion">? x ? = 42</p>
        <p class="ecuacion">? + ? = 13</p>
        <p class="ecuacion">6 x 7 = 42</p>
        <p class="ecuacion">6 + 7 = 13</p>
        <p class="ecuacion">(x + 6)(x + 7)</p>
      </div>
    </section>

    <section class="contenido">
      <div class="centre">
        <h2>Ejercicios</h2>
        <ol>
          <li>Reduce el polinomio -8m - m</li>
          <li>Resuelve solo usando los productos notables y no desarrollando la multiplicación. (x-19)^2</li>
          <li>Factoriza 36x^2 + 12xy + y^2</li>
          <li>Factoriza 64x^3 + 240x^2 + 300x</li>
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
