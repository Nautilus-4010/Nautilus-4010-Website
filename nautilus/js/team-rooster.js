const roosterNavBtns = document.querySelectorAll("#year-btns button");

function main() {
  const teamRoosters = new Map()
  teamRoosters.set(2021, load2021TeamRooster());
  teamRoosters.set(2020, load2020TeamRooster());

  for (const btn of roosterNavBtns) {
    btn.onclick = function(){
      const btnYear = Number(btn.value);
      const respectiveRooster = teamRoosters.get(btnYear);
      higlightBtnAndRenderRooster(btn, respectiveRooster);
    }
  }

  higlightBtnAndRenderRooster(roosterNavBtns[0], teamRoosters.get(2021));
}

const higlightBtnAndRenderRooster = function(button, rooster){
  for (const btn of roosterNavBtns) {
    btn.classList.remove("active");
  }
  button.classList.add("active");
  rooster.render();
};

const load2021TeamRooster = function(){
  const students = [
    new Student("Fernando", "fernando.jpg", [TeamAreas.MESA])
  ];

  const mentors = [
    new Mentor("Regina", "regina.jpg", [TeamAreas.SOCIALES])
  ];

  const coaches = [
    new Coach("Cinthya", "cinthya.jpg", [TeamAreas.HEAD_COACH], "Cin")
  ];

  const tr = new TeamRooster(students, mentors, coaches, 2021);
  return tr;
}

const load2020TeamRooster = function(){
  const students = [
    new Student("Sara", "sara.jpg", [TeamAreas.MESA, TeamAreas.INGENIERIA, TeamAreas.SOCIALES], "Sarita"),
    new Student("Camila", "camila.jpg", [TeamAreas.MESA, TeamAreas.INGENIERIA, TeamAreas.FINANZAS, TeamAreas.SOCIALES], "Mila"),
    new Student("Fernando", "fernando.jpg", [TeamAreas.MESA, TeamAreas.INGENIERIA, TeamAreas.FINANZAS, TeamAreas.SOCIALES], "Fer"),
    new Student("Dabria", "dabria.jpg", [TeamAreas.MESA, TeamAreas.INGENIERIA, TeamAreas.SOCIALES, TeamAreas.COMUNICACION], "Dabria"),
    new Student("Kenia", "kenia.jpg", [TeamAreas.MESA, TeamAreas.INGENIERIA], "Kenia"),
    new Student("Antonio", "tony.jpg", [TeamAreas.MESA, TeamAreas.FINANZAS, TeamAreas.SOCIALES], "Tony"),
    new Student("Ana Sofía", "ana_sofia.jpg", [TeamArea.MESA, TeamAreas.INGENIERIA, TeamAreas.FINANZAS, TeamAreas.SOCIALES], "Ana Sofía"),
    new Student("Vianey", "vianey.jpg", [TeamAreas.COMUNICACION], "Vianey"),
    new Student("Carolina", "carolina.jpg", [TeamAreas.FINANZAS, TeamAreas.SOCIALES], "Carolina"),
    new Student("Cinthya", "cinthya.jpg", [TeamAreas.INGENIERIA, TeamAreas.SOCIALES], "Cinthya"),
    new Student("Ignacio", "igna.jpg", [TeamAreas.INGENIERIA], "Ignacio"),
    new Student("Bruno", "bruno.jpg", [TeamAreas.INGENIERIA], "Bruno"),
    new Student("Carlos", "carlos.jpg", [TeamAreas.COMUNICACION, TeamAreas.FINANZAS], "Carlos"),
    new Student("Alexis", "alexis.jpg", [TeamAreas.INGENIERIA, TeamAreas.COMUNICACION], "Alexis"),
    new Student("Celeste", "celeste.jpg", [TeamAreas.FINANZAS, TeamAreas.SOCIALES, TeamAreas.COMUNICACION], "Celeste"),
    new Student("Sarah", "sarah.jpg", [TeamAreas.FINANZAS, TeamAreas.SOCIALES, TeamAreas.COMUNICACION], "Sarah"),
    new Student("Daniel", "daniel.jpg", [TeamAreas.INGENIERIA, TeamAreas.FINANZAS], "Daniel"),
    new Student("Maya", "maya.jpg", [TeamAreas.COMUNICACION], "Maya"),
    new Student("Sebastián", "sebastian.jpg", [TeamAreas.INGENIERIA, TeamAreas.FINANZAS], "Sebastián"),
    new Student("Sofía", "sofia.jpg", [TeamAreas.SOCIALES], "Sofía"),
    new Student("Víctor Manuel", "vicmanu.jpg", [TeamAreas.INGENIERIA, TeamAreas.FINANZAS], "Víctor Manuel"),
    new Student("Mariano", "mariano.jpg", [TeamAreas.INGENIERIA, TeamAreas.SOCIALES], "Mariano"),
    new Student("Zoe", "zoe.jpg", [TeamAreas.INGENIERIA, TeamAreas.FINANZAS], "Zoe"),
    new Student("Andrea", "andrea.jpg", [TeamAreas.INGENIERIA, TeamAreas.COMUNICACION], "Andrea"),
    new Student("Alexis", "alexisq.jpg", [TeamAreas.FINANZAS, TeamAreas.SOCIALES, TeamAreas.COMUNICACION], "Alexis"),
    new Student("José Miguel", "jose_miguel.jpg", [TeamAreas.FINANZAS, TeamAreas.SOCIALES], "José Miguel"),
    new Student("Paola", "paola.jpg", [TeamAreas.INGENIERIA, TeamAreas.SOCIALES], "Paola"),
    new Student("Daniela", "daniela.jpg", [TeamAreas.INGENIERIA, TeamAreas.FINANZAS, TeamAreas.SOCIALES], "Daniela"),
    new Student("Hiroki", "hiroki.jpg", [TeamAreas.INGENIERIA, TeamAreas.SOCIALES], "Hiro"),
    new Student("Emma Sofía", "emmasofia.jpg", [TeamAreas.INGENIERIA, TeamAreas.SOCIALES], "Emma Sofía"),
    new Student("Fabiola", "fabiola.jpg", [TeamAreas.INGENIERIA, TeamAreas.SOCIALES, TeamAreas.FINANZAS], "Fabiola"),
    new Student("Estefanía", "estefania.jpg", [TeamAreas.SOCIALES, TeamAreas.INGENIERIA, TeamAreas.FINANZAS], "Estefanía"),
    new Student("Karen", "karen.jpg", [TeamAreas.FINANZAS, TeamAreas.SOCIALES, TeamAreas.COMUNICACION], "Karen"),
    new Student("Iñaki", "inaki.jpg", [TeamAreas.INGENIERIA, TeamAreas.FINANZAS, TeamAreas.SOCIALES], "Iñaki"),
    new Student("Zareth Abigail", "zareth.jpg", [TeamAreas.INGENIERIA, TeamAreas.SOCIALES], "Zareth Abigail"),
    new Student("Valeria", "valeria.jpg", [TeamAreas.INGENIERIA, TeamAreas.SOCIALES, TeamAreas.FINANZAS], "Valeria"),
    new Student("Sebastián", "sebastianpalma.jpg", [TeamAreas.FINANZAS, TeamAreas.SOCIALES], "Sebastián"),
    new Student("Victoria", "victoria.jpg", [TeamAreas.INGENIERIA, TeamAreas.SOCIALES, TeamAreas.COMUNICACION], "Victoria"),
    new Student("Víctor", "vicgamez.jpg", [TeamAreas.INGENIERIA, TeamAreas.SOCIALES], "Víctor"),
    new Student("Arturo", "arturo.jpg", [TeamAreas.INGENIERIA, TeamAreas.SOCIALES, TeamAreas.FINANZAS], "Arturo"),
    new Student("Daniela", "danielaledesma.jpg", [TeamAreas.SOCIALES, TeamAreas.FINANZAS], "Daniela"),
    new Student("Natalia", "natalia.jpg", [TeamAreas.INGENIERIA, TeamAreas.SOCIALES], "Natalia"),
  ];

  const mentors = [
    new Mentor("Alejandro", "alex.jpg", [TeamAreas.INGENIERIA], "Alex")
    new Mentor("Regina", "regina.jpg", [TeamAreas.SOCIALES, TeamAreas.FINANZAS], "Regina"),
    new Mentor("Santigo", "santiago.jpg", [TeamAreas.INGENIERIA], "Santiago"),
    new Mentor("Rodrigo", "luisrodrigo.jpg", [TeamAreas.INGENIERIA], "Rodrigo"),
    new Mentor("Mariana", "mariana.jpg", [TeamAreas.FINANZAS, TeamAreas.SOCIALES], "Mariana"),
    new Mentor("Hanedy", "hanedy.jpg", [TeamAreas.INGENIERIA], "Hanedy"),
    new Mentor("Luis Antonio", "wicho.jpg", [TeamAreas.INGENIERIA], "Luis Antonio"),
    new Mentor("Violeta", "violeta.jpg", [TeamAreas.SOCIALES], "Violeta"),
    new Mentor("Diego", "diegod.jpg", [TeamAreas.INGENIERIA], "diego"),
    new Mentor("Josue", "josue.jpg", [TeamAreas.COMUNICACION], "Josue"),
    new Mentor("Jorge Gabriel", "jorgegabriel.jpg", [TeamAreas.INGENIERIA], "Jorge Gabriel"),
    new Mentor("Uriel", "uriel.jpg", [TeamAreas.INGENIERIA], "Uriel"),
    new Mentor("Alfonso", "alfonso.jpg", [TeamAreas.INGENIERIA], "Alfonso"),
    new Mentor("Claudia", "claudia.jpg", [TeamAreas.INGENIERIA], "Claudia"),
    new Mentor("Denisse", "denisse.jpg", [TeamAreas.INGENIERIA], "Denisse"),
  ];

  const coaches = [
    new Coach("Víctor", "victor.jpg", [TeamAreas.HEAD_COACH], "Vic"),
    new Coach("Cinthya", "cinthya.jpg", [TeamAreas.HEAD_COACH, "Cin"]),
    new Coach("Manuel", "manu.jpg", [TeamAreas.COACH], "Manu"),
    new Coach("Ricardo", "nava.jpg", [TeamAreas.COACH], "Ricardo"),
  ];

  const tr = new TeamRooster(students, mentors, coaches, 2020);
  return tr;
}

main();
