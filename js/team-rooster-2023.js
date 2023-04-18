const load2023TeamRooster = function(){
    const students = [
      new Student("Estefanía", "estef.jpg", [TeamAreas.INGENIERIA, TeamAreas.FINANZAS, TeamAreas.SOCIALES], "Estef"),
      new Student("Abigail", "Abi.jpg", [TeamAreas.INGENIERIA, TeamAreas.SOCIALES, TeamAreas.INCLUSION], "Aby"),
      new Student("David", "david.jpg", [TeamAreas.INGENIERIA, TeamAreas.FINANZAS, TeamAreas.SOCIALES]),
      new Student("Anette", "anette.jpg", [TeamAreas.INGENIERIA, TeamAreas.COMUNICACION]),
      new Student("Iñaki", "iñaki.jpg", [TeamAreas.INGENIERIA, TeamAreas.FINANZAS, TeamAreas.SOCIALES]),
      new Student("Ana", "Anita.jpg", [TeamAreas.INGENIERIA]),
      new Student("Hiroki", "hiroki.jpg", [TeamAreas.FINANZAS, TeamAreas.SOCIALES, TeamAreas.INCLUSION], "Hiro"),
      new Student("Damián", "Damián.jpg", [TeamAreas.INGENIERIA, TeamAreas.SOCIALES]),
      new Student("Alejandra", "Ale.jpg", [TeamAreas.INGENIERIA, TeamAreas.SOCIALES]),
      new Student("Alexandra", "Alexandra.jpg", [TeamAreas.INGENIERIA, TeamAreas.SOCIALES, TeamAreas.COMUNICACION]),
      new Student("Clara", "Clara.jpg", [TeamAreas.INGENIERIA]),
      new Student("Diego", "Diego_Ponce.jpg", [TeamAreas.INGENIERIA, TeamAreas.FINANZAS, TeamAreas.SOCIALES]),
      new Student("Gabriela", "Gaby.jpg", [TeamAreas.INGENIERIA, TeamAreas.SOCIALES], "Gaby"),
      new Student("Isabella", "Isabella.jpg", [TeamAreas.INGENIERIA, TeamAreas.FINANZAS, TeamAreas.SOCIALES]),
      new Student("Juan Pablo", "JP.jpg", [TeamAreas.INGENIERIA, TeamAreas.FINANZAS, TeamAreas.SOCIALES], "J P"),
      new Student("Leonardo", "Leo_Fontaine.jpg", [TeamAreas.INGENIERIA, TeamAreas.FINANZAS, TeamAreas.SOCIALES], "Leo"),
      new Student("Marian", "Mar.jpg", [TeamAreas.INGENIERIA, TeamAreas.FINANZAS, TeamAreas.SOCIALES], "Mar"),
      new Student("Miranda", "Miri.jpg", [TeamAreas.INGENIERIA], "Miri"),
      new Student("Paola", "Paola_Gil.jpg", [TeamAreas.INGENIERIA, TeamAreas.FINANZAS, TeamAreas.SOCIALES]),
      new Student("Regina", "Regina.jpg", [TeamAreas.COMUNICACION, TeamAreas.INGENIERIA, TeamAreas.INCLUSION]),
      new Student("Rigel", "Rigel.jpg", [TeamAreas.INGENIERIA, TeamAreas.SOCIALES]),
      new Student("Rosela", "Rosela.jpg", [TeamAreas.INGENIERIA]),
      new Student("Natalia", "Rosey.jpg", [TeamAreas.INGENIERIA, TeamAreas.SOCIALES, TeamAreas.INCLUSION], "Nat"),
      new Student("Saraí", "Sarahí_vex.jpg", [TeamAreas.INGENIERIA, TeamAreas.SOCIALES, TeamAreas.COMUNICACION]),
      new Student("Agustín", "Agustín.jpg", [TeamAreas.INGENIERIA, TeamAreas.SOCIALES, TeamAreas.INCLUSION], "Agus"),
      new Student("Victoria", "Victoria.jpg", [TeamAreas.INGENIERIA, TeamAreas.SOCIALES], "Pao"),
      new Student("Ximena", "Ximena.jpg", [TeamAreas.FINANZAS, TeamAreas.SOCIALES, TeamAreas.COMUNICACION])
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