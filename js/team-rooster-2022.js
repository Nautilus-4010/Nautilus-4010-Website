const load2022TeamRooster = function(){
    const students = [
      new Student("Celeste", "celeste.jpg", [TeamAreas.FINANZAS, TeamAreas.SOCIALES, TeamAreas.INCLUSION], "Cel"),
      new Student("Arturo", "arturo.jpg", [TeamAreas.INGENIERIA, TeamAreas.FINANZAS, TeamAreas.SOCIALES]),
      new Student("Hiroki", "hiroki.jpg", [TeamAreas.FINANZAS, TeamAreas.SOCIALES, TeamAreas.INCLUSION], "Hiro"),
      new Student("Natalia", "nat.jpg", [TeamAreas.INGENIERIA, TeamAreas.SOCIALES, TeamAreas.INCLUSION], "Nat"),
      new Student("Sarah", "sarah.jpg", [TeamAreas.FINANZAS, TeamAreas.SOCIALES, TeamAreas.COMUNICACION]),
      new Student("Marian", "marian.jpg", [TeamAreas.INGENIERIA, TeamAreas.SOCIALES]),
      new Student("Estefanía", "estef.jpg", [TeamAreas.INGENIERIA, TeamAreas.FINANZAS, TeamAreas.SOCIALES], "Estef"),
      new Student("Paola", "paola.jpg", [TeamAreas.INGENIERIA, TeamAreas.SOCIALES], "Pao")
    ];
  
    const mentors = [
      new Mentor("Diego", "dieguito.jpg", [TeamAreas.INGENIERIA, TeamAreas.SOCIALES])
    ];
  
    const coaches = [
      new Coach("Víctor", "vic.jpg", [TeamAreas.HEAD_COACH], "Vic"),
      new Coach("Manuel", "manu.jpg", [TeamAreas.COACH], "Manu")
    ];
  
    const tr = new TeamRooster(students, mentors, coaches, 2022);
    return tr;
}
