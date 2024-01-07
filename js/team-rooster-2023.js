const load2023TeamRooster = function(){
    const students = [
      new Student("Estefanía", "estef.JPG", [TeamAreas.INGENIERIA, TeamAreas.FINANZAS, TeamAreas.SOCIALES], "Estef"),
      new Student("Abigail", "Abi.JPG", [TeamAreas.INGENIERIA, TeamAreas.SOCIALES, TeamAreas.INCLUSION], "Aby"),
      new Student("David", "David.JPG", [TeamAreas.INGENIERIA, TeamAreas.FINANZAS, TeamAreas.SOCIALES]),
      new Student("Anette", "Anette.JPG", [TeamAreas.INGENIERIA, TeamAreas.COMUNICACION]),
      new Student("Iñaki", "Iñaki.JPG", [TeamAreas.INGENIERIA, TeamAreas.FINANZAS, TeamAreas.SOCIALES]),
      new Student("Ana", "Anita.JPG", [TeamAreas.INGENIERIA]),
      new Student("Hiroki", "Hiroki.JPG", [TeamAreas.FINANZAS, TeamAreas.SOCIALES, TeamAreas.INCLUSION], "Hiro"),
      new Student("Damián", "Damián.JPG", [TeamAreas.INGENIERIA, TeamAreas.SOCIALES]),
      new Student("Gabriela", "Gaby.JPG", [TeamAreas.INGENIERIA, TeamAreas.SOCIALES], "Gaby"),
      new Student("Alejandra", "Ale.JPG", [TeamAreas.INGENIERIA, TeamAreas.SOCIALES]),
      new Student("Alexandra", "Alexandra.JPG", [TeamAreas.INGENIERIA, TeamAreas.SOCIALES, TeamAreas.COMUNICACION]),
      new Student("Clara", "Clara.JPG", [TeamAreas.INGENIERIA]),
      new Student("Diego", "Diego_Ponce.JPG", [TeamAreas.INGENIERIA, TeamAreas.FINANZAS, TeamAreas.SOCIALES]),
      new Student("Isabella", "Isabella.JPG", [TeamAreas.INGENIERIA, TeamAreas.FINANZAS, TeamAreas.SOCIALES]),
      new Student("Juan Pablo", "JP.JPG", [TeamAreas.INGENIERIA, TeamAreas.FINANZAS, TeamAreas.SOCIALES], "J P"),
      new Student("Leonardo", "Leo_Fontaine.JPG", [TeamAreas.INGENIERIA, TeamAreas.FINANZAS, TeamAreas.SOCIALES], "Leo"),
      new Student("Marian", "Mar.JPG", [TeamAreas.INGENIERIA, TeamAreas.FINANZAS, TeamAreas.SOCIALES], "Mar"),
      new Student("Miranda", "Miri.JPG", [TeamAreas.INGENIERIA], "Miri"),
      new Student("Paola", "Paola_Gil.JPG", [TeamAreas.INGENIERIA, TeamAreas.FINANZAS, TeamAreas.SOCIALES]),
      new Student("Regina", "Regina.JPG", [TeamAreas.COMUNICACION, TeamAreas.INGENIERIA, TeamAreas.INCLUSION]),
      new Student("Rigel", "Rigel.JPG", [TeamAreas.INGENIERIA, TeamAreas.SOCIALES]),
      new Student("Rosela", "Rosela.JPG", [TeamAreas.INGENIERIA]),
      new Student("Natalia", "Rosey.JPG", [TeamAreas.INGENIERIA, TeamAreas.SOCIALES, TeamAreas.INCLUSION], "Nat"),
      new Student("Saraí", "Sarahí_vex.JPG", [TeamAreas.INGENIERIA, TeamAreas.SOCIALES, TeamAreas.COMUNICACION]),
      new Student("Agustín", "Agustín.JPG", [TeamAreas.INGENIERIA, TeamAreas.SOCIALES, TeamAreas.INCLUSION], "Agus"),
      new Student("Victoria", "Victoria.JPG", [TeamAreas.INGENIERIA, TeamAreas.SOCIALES], "Pao"),
      new Student("Ximena", "Ximena.JPG", [TeamAreas.FINANZAS, TeamAreas.SOCIALES, TeamAreas.COMUNICACION])
    ];
  
    const mentors = [
      new Mentor("Rodrigo", "Rodrigo_Mentor.JPG", [TeamAreas.INGENIERIA], "Ro"),
      new Mentor("Santiago", "Santi_mentor.JPG", [TeamAreas.INGENIERIA, TeamAreas.COMUNICACION], "Santi"),
      new Mentor("Ulises", "Uri.JPG", [TeamAreas.INGENIERIA, TeamAreas.FINANZAS, TeamAreas.SOCIALES]),
      new Mentor("Sara", "Sara_mentora.JPG", [TeamAreas.INGENIERIA, TeamAreas.SOCIALES], "Sara"),
      new Mentor("Ernesto", "Ernesto.JPG", [TeamAreas.INGENIERIA], "Erno"),
      new Mentor("Jose", "Jose.JPG", [TeamAreas.INGENIERIA], "Pepe Lalo"),
      new Mentor("Sebastián", "Sebastián_mentor.JPG", [TeamAreas.INGENIERIA, TeamAreas.FINANZAS], "Sebas"),
      new Mentor("Alexis", "Alexis.JPG", [TeamAreas.INGENIERIA, TeamAreas.SOCIALES, TeamAreas.FINANZAS], "Alexis"),
      new Mentor("Arturo", "Arturo_prof.JPG", [TeamAreas.INGENIERIA, TeamAreas.FINANZAS, TeamAreas.SOCIALES], "Prof"),
      new Mentor("Celeste", "Celeste.JPG", [TeamAreas.FINANZAS, TeamAreas.SOCIALES, TeamAreas.INCLUSION], "Celeste"),
      new Mentor("Natalia", "Natalia_Mentora.JPG", [TeamAreas.INGENIERIA, TeamAreas.SOCIALES, TeamAreas.INCLUSION], "Nat"),
      new Mentor("Sarah ", "Sarah_mentora.JPG", [TeamAreas.FINANZAS, TeamAreas.SOCIALES, TeamAreas.COMUNICACION], "Sarah"),
      new Mentor("Paola", "Pao_Mich.JPG", [TeamAreas.INGENIERIA, TeamAreas.SOCIALES], "Pao")
    ];
  
    const coaches = [
      new Coach("Víctor", "Vic.JPG", [TeamAreas.HEAD_COACH], "Vic"),
      new Coach("Manuel", "Manu.JPG", [TeamAreas.COACH], "Manu"),
      new Coach("Cinthya", "Cin.JPG", [TeamAreas.COACH], "Cin"),
      new Coach("Ricardo", "nava.jpg", [TeamAreas.COACH], "Nava"),
      new Coach("Diego", "Dieguito.JPG", [TeamAreas.COACH], "Dieguito")
    ];
  
    const tr = new TeamRooster(students, mentors, coaches, 2023);
    return tr;
}