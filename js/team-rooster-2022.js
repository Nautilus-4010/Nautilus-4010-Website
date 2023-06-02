const load2022TeamRooster = function(){
    const students = [
      new Student("Abigail", "aby.jpg", [TeamAreas.INGENIERIA, TeamAreas.SOCIALES, TeamAreas.INCLUSION], "Aby"),
      new Student("Alejandra", "ale.jpg", [TeamAreas.COMUNICACION]),
      new Student("Alexis", "alexis.jpg", [TeamAreas.INGENIERIA, TeamAreas.FINANZAS, TeamAreas.SOCIALES]),
      new Student("Ana", "ana.jpg", [TeamAreas.INGENIERIA]),
      new Student("Anette", "anette.jpg", [TeamAreas.INGENIERIA, TeamAreas.COMUNICACION]),
      new Student("Arantxa", "arantxa.jpg", [TeamAreas.INGENIERIA], "Díaz"),
      new Student("Arturo", "arturo.jpg", [TeamAreas.INGENIERIA, TeamAreas.FINANZAS, TeamAreas.SOCIALES]),
      new Student("Camila", "camila.jpg", [TeamAreas.INGENIERIA, TeamAreas.FINANZAS, TeamAreas.SOCIALES], "Mila"),
      new Student("Celeste", "celeste.jpg", [TeamAreas.FINANZAS, TeamAreas.SOCIALES, TeamAreas.INCLUSION], "Cel"),
      new Student("Cinthya", "cinthya.jpg", [TeamAreas.INGENIERIA, TeamAreas.SOCIALES], "Cin"),
      new Student("Dafnné", "dafne.jpg", [TeamAreas.FINANZAS, TeamAreas.SOCIALES, TeamAreas.COMUNICACION], "Daf"),
      new Student("Damian", "damian.jpg", [TeamAreas.INGENIERIA, TeamAreas.SOCIALES]),
      new Student("David", "david.jpg", [TeamAreas.INGENIERIA, TeamAreas.FINANZAS, TeamAreas.SOCIALES]),
      new Student("Emiliano", "emiliano.jpg", [TeamAreas.INGENIERIA, TeamAreas.FINANZAS, TeamAreas.SOCIALES], "Emi"),
      new Student("Emma", "emma.jpg", [TeamAreas.INCLUSION]),
      new Student("Estefanía", "estef.jpg", [TeamAreas.INGENIERIA, TeamAreas.FINANZAS, TeamAreas.SOCIALES], "Estef"),
      new Student("Fernando", "fernando.jpg", [TeamAreas.INGENIERIA, TeamAreas.FINANZAS, TeamAreas.SOCIALES], "Fer"),
      new Student("Héctor", "hector.jpg", [TeamAreas.COMUNICACION, TeamAreas.FINANZAS, TeamAreas.INGENIERIA]),
      new Student("Helena", "helena.jpg", [TeamAreas.SOCIALES], "Hele"),
      new Student("Hiroki", "hiroki.jpg", [TeamAreas.FINANZAS, TeamAreas.SOCIALES, TeamAreas.INCLUSION], "Hiro"),
      new Student("Iñaki", "iñaki.jpg", [TeamAreas.INGENIERIA, TeamAreas.FINANZAS, TeamAreas.SOCIALES]),
      new Student("Juan", "juan.jpg", [TeamAreas.COMUNICACION, TeamAreas.INGENIERIA, TeamAreas.INCLUSION]),
      new Student("Marian", "marian.jpg", [TeamAreas.INGENIERIA, TeamAreas.SOCIALES]),
      new Student("Miranda", "miranda.jpg", [TeamAreas.INGENIERIA], "Miri"),
      new Student("Natalia", "nat.jpg", [TeamAreas.INGENIERIA, TeamAreas.SOCIALES, TeamAreas.INCLUSION], "Nat"),
      new Student("Orel", "orel.jpg", [TeamAreas.INGENIERIA, TeamAreas.SOCIALES, TeamAreas.COMUNICACION]),
      new Student("Paola", "paola.jpg", [TeamAreas.INGENIERIA, TeamAreas.SOCIALES], "Pao"),
      new Student("Sarah", "sarah.jpg", [TeamAreas.FINANZAS, TeamAreas.SOCIALES, TeamAreas.COMUNICACION]),
      new Student("Ulises", "ulises.jpg", [TeamAreas.INGENIERIA, TeamAreas.FINANZAS, TeamAreas.SOCIALES], "Uli"),
      new Student("Valentina", "valentina.jpg", [TeamAreas.COMUNICACION, TeamAreas.INGENIERIA], "Val"),
      new Student("Valeria", "vale.jpg", [TeamAreas.INGENIERIA, TeamAreas.FINANZAS, TeamAreas.SOCIALES], "Vale")
    ];
  
    const mentors = [
      new Mentor("Alejandro", "alex.jpg", [TeamAreas.INGENIERIA, TeamAreas.SOCIALES], "Alex"),
      new Mentor("Antonio", "tony.jpg", [TeamAreas.SOCIALES, TeamAreas.INCLUSION], "Tony"),
      new Mentor("Carolina", "caro.jpg", [TeamAreas.INCLUSION, TeamAreas.SOCIALES], "Caro"),
      new Mentor("Diego", "dieguito.jpg", [TeamAreas.INGENIERIA, TeamAreas.SOCIALES], "Dieguito"),
      new Mentor("Ernesto", "ernesto.jpg", [TeamAreas.INGENIERIA], "Erno"),
      new Mentor("Jorge", "jorge.jpg", [TeamAreas.INGENIERIA, TeamAreas.SOCIALES, TeamAreas.FINANZAS], "Jorgito"),
      new Mentor("Rodrigo", "rodrigo.jpg", [TeamAreas.INGENIERIA], "Ro"),
      new Mentor("Santiago", "santi.jpg", [TeamAreas.INGENIERIA, TeamAreas.COMUNICACION], "Santi")
    ];
  
    const coaches = [
      new Coach("Víctor", "vic.jpg", [TeamAreas.HEAD_COACH], "Vic"),
      new Coach("Manuel", "manu.jpg", [TeamAreas.COACH], "Manu")
    ];
  
    const tr = new TeamRooster(students, mentors, coaches, 2022);
    return tr;
}
