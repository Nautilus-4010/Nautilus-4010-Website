const load2021TeamRooster = function(){
    const students = [
      new Student("Sara", "sara.jpg", [TeamAreas.MESA, TeamAreas.INGENIERIA, TeamAreas.SOCIALES], "Sarita"),
      new Student("Camila", "camila.jpg", [TeamAreas.MESA, TeamAreas.INGENIERIA, TeamAreas.FINANZAS, TeamAreas.SOCIALES], "Mila"),
      new Student("Fernando", "fernando.jpg", [TeamAreas.MESA, TeamAreas.INGENIERIA, TeamAreas.FINANZAS, TeamAreas.SOCIALES], "Fer"),
      new Student("Dabria", "dabria.jpg", [TeamAreas.MESA, TeamAreas.INGENIERIA, TeamAreas.SOCIALES, TeamAreas.COMUNICACION]),
      new Student("Kenia", "kenia.jpg", [TeamAreas.MESA, TeamAreas.INGENIERIA]),
      new Student("Antonio", "tony.jpg", [TeamAreas.MESA, TeamAreas.FINANZAS, TeamAreas.SOCIALES], "Tony"),
      new Student("Ana Sofía", "ana_sofia.jpg", [TeamAreas.MESA, TeamAreas.INGENIERIA, TeamAreas.FINANZAS, TeamAreas.SOCIALES]),
      new Student("Vianey", "vianey.jpg", [TeamAreas.COMUNICACION]),
      new Student("Carolina", "carolina.jpg", [TeamAreas.FINANZAS, TeamAreas.SOCIALES]),
      new Student("Cinthya", "cinthya.jpg", [TeamAreas.INGENIERIA, TeamAreas.SOCIALES]),
      new Student("Ignacio", "igna.jpg", [TeamAreas.INGENIERIA]),
      new Student("Bruno", "bruno.jpg", [TeamAreas.INGENIERIA]),
      new Student("Carlos", "carlos.jpg", [TeamAreas.COMUNICACION, TeamAreas.FINANZAS]),
      new Student("Alexis", "alexis.jpg", [TeamAreas.INGENIERIA, TeamAreas.COMUNICACION]),
      new Student("Celeste", "celeste.jpg", [TeamAreas.FINANZAS, TeamAreas.SOCIALES, TeamAreas.COMUNICACION]),
      new Student("Sarah", "sarah.jpg", [TeamAreas.FINANZAS, TeamAreas.SOCIALES, TeamAreas.COMUNICACION]),
      new Student("Daniel", "daniel.jpg", [TeamAreas.INGENIERIA, TeamAreas.FINANZAS]),
      new Student("Maya", "maya.jpg", [TeamAreas.COMUNICACION]),
      new Student("Sebastián", "sebastian.jpg", [TeamAreas.INGENIERIA, TeamAreas.FINANZAS]),
      new Student("Sofía", "sofia.jpg", [TeamAreas.SOCIALES]),
      new Student("Víctor Manuel", "vicmanu.jpg", [TeamAreas.INGENIERIA, TeamAreas.FINANZAS]),
      new Student("Mariano", "mariano.jpg", [TeamAreas.INGENIERIA, TeamAreas.SOCIALES]),
      new Student("Zoe", "zoe.jpg", [TeamAreas.INGENIERIA, TeamAreas.FINANZAS]),
      new Student("Andrea", "andrea.jpg", [TeamAreas.INGENIERIA, TeamAreas.COMUNICACION]),
      new Student("Alexis", "alexisq.jpg", [TeamAreas.FINANZAS, TeamAreas.SOCIALES, TeamAreas.COMUNICACION]),
      new Student("José Miguel", "jose_miguel.jpg", [TeamAreas.FINANZAS, TeamAreas.SOCIALES]),
      new Student("Paola", "paola.jpg", [TeamAreas.INGENIERIA, TeamAreas.SOCIALES]),
      new Student("Daniela", "daniela.jpg", [TeamAreas.INGENIERIA, TeamAreas.FINANZAS, TeamAreas.SOCIALES]),
      new Student("Hiroki", "hiroki.jpg", [TeamAreas.INGENIERIA, TeamAreas.SOCIALES], "Hiro"),
      new Student("Emma Sofía", "emmasofia.jpg", [TeamAreas.INGENIERIA, TeamAreas.SOCIALES]),
      new Student("Fabiola", "fabiola.jpg", [TeamAreas.INGENIERIA, TeamAreas.SOCIALES, TeamAreas.FINANZAS]),
      new Student("Estefanía", "estefania.jpg", [TeamAreas.SOCIALES, TeamAreas.INGENIERIA, TeamAreas.FINANZAS]),
      new Student("Karen", "karen.jpg", [TeamAreas.FINANZAS, TeamAreas.SOCIALES, TeamAreas.COMUNICACION]),
      new Student("Iñaki", "inaki.jpg", [TeamAreas.INGENIERIA, TeamAreas.FINANZAS, TeamAreas.SOCIALES]),
      new Student("Zareth Abigail", "zareth.jpg", [TeamAreas.INGENIERIA, TeamAreas.SOCIALES]),
      new Student("Valeria", "valeria.jpg", [TeamAreas.INGENIERIA, TeamAreas.SOCIALES, TeamAreas.FINANZAS]),
      new Student("Sebastián", "sebastianpalma.jpg", [TeamAreas.FINANZAS, TeamAreas.SOCIALES]),
      new Student("Victoria", "victoria.jpg", [TeamAreas.INGENIERIA, TeamAreas.SOCIALES, TeamAreas.COMUNICACION]),
      new Student("Víctor", "vicgamez.jpg", [TeamAreas.INGENIERIA, TeamAreas.SOCIALES]),
      new Student("Arturo", "arturo.jpg", [TeamAreas.INGENIERIA, TeamAreas.SOCIALES, TeamAreas.FINANZAS]),
      new Student("Daniela", "danielaledesma.jpg", [TeamAreas.SOCIALES, TeamAreas.FINANZAS]),
      new Student("Natalia", "natalia.jpg", [TeamAreas.INGENIERIA, TeamAreas.SOCIALES])
    ];
  
    const mentors = [
      new Mentor("Alejandro", "alex.jpg", [TeamAreas.INGENIERIA], "Alex"),
      new Mentor("Regina", "regina.jpg", [TeamAreas.SOCIALES, TeamAreas.FINANZAS]),
      new Mentor("Santigo", "santiago.jpg", [TeamAreas.INGENIERIA]),
      new Mentor("Rodrigo", "luisrodrigo.jpg", [TeamAreas.INGENIERIA]),
      new Mentor("Mariana", "mariana.jpg", [TeamAreas.FINANZAS, TeamAreas.SOCIALES]),
      new Mentor("Hanedy", "hanedy.jpg", [TeamAreas.INGENIERIA]),
      new Mentor("Luis Antonio", "wicho.jpg", [TeamAreas.INGENIERIA]),
      new Mentor("Violeta", "violeta.jpg", [TeamAreas.SOCIALES]),
      new Mentor("Diego", "diegod.jpg", [TeamAreas.INGENIERIA]),
      new Mentor("Josue", "josue.jpg", [TeamAreas.COMUNICACION]),
      new Mentor("Jorge Gabriel", "jorgegabriel.jpg", [TeamAreas.INGENIERIA]),
      new Mentor("Uriel", "uriel.jpg", [TeamAreas.INGENIERIA]),
      new Mentor("Alfonso", "alfonso.jpg", [TeamAreas.INGENIERIA]),
      new Mentor("Claudia", "claudia.jpg", [TeamAreas.INGENIERIA]),
      new Mentor("Denisse", "denisse.jpg", [TeamAreas.INGENIERIA])
    ];
  
    const coaches = [
      new Coach("Víctor", "victor.jpg", [TeamAreas.HEAD_COACH], "Vic"),
      new Coach("Cinthya", "cinthya.jpg", [TeamAreas.HEAD_COACH, "Cin"]),
      new Coach("Manuel", "manu.jpg", [TeamAreas.COACH], "Manu"),
      new Coach("Ricardo", "nava.jpg", [TeamAreas.COACH])
    ];
  
    const tr = new TeamRooster(students, mentors, coaches, 2021);
    return tr;
 }
