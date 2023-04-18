const load2023TeamRooster = function(){
    const students = [
      new Student("Abigail", "Abi.jpg", [TeamAreas.INGENIERIA, TeamAreas.SOCIALES, TeamAreas.INCLUSION], "Aby"),
      new Student("Agustín", "Agustín.jpg", [TeamAreas.INGENIERIA, TeamAreas.SOCIALES, TeamAreas.INCLUSION], "Agus"),
      new Student("Alejandra", "Ale.jpg", [TeamAreas.INGENIERIA, TeamAreas.SOCIALES]),
      new Student("Alexandra", "Alexandra.jpg", [TeamAreas.INGENIERIA, TeamAreas.SOCIALES, TeamAreas.COMUNICACION]),
      new Student("Anette", "anette.jpg", [TeamAreas.INGENIERIA, TeamAreas.COMUNICACION]),
      new Student("Ana", "Anita.jpg", [TeamAreas.INGENIERIA]),
      new Student("Arantxa", "Arantxa.jpg", [TeamAreas.INGENIERIA]),
      new Student("Clara", "Clara.jpg", [TeamAreas.INGENIERIA]),
      new Student("Damian", "Damián.jpg", [TeamAreas.INGENIERIA, TeamAreas.SOCIALES]),
      new Student("David", "david.jpg", [TeamAreas.INGENIERIA, TeamAreas.FINANZAS, TeamAreas.SOCIALES]),
      new Student("Diego", "Diego_Ponce.jpg", [TeamAreas.INGENIERIA, TeamAreas.FINANZAS, TeamAreas.SOCIALES]),
      new Student("Estefanía", "estef.jpg", [TeamAreas.INGENIERIA, TeamAreas.FINANZAS, TeamAreas.SOCIALES], "Estef"),
      new Student("Gabriela", "Gaby.jpg", [TeamAreas.INGENIERIA, TeamAreas.SOCIALES], "Gaby"),
      new Student("Hiroki", "hiroki.jpg", [TeamAreas.FINANZAS, TeamAreas.SOCIALES, TeamAreas.INCLUSION], "Hiro"),
      new Student("Iñaki", "iñaki.jpg", [TeamAreas.INGENIERIA, TeamAreas.FINANZAS, TeamAreas.SOCIALES]),
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
      new Student("Victoria", "Victoria.jpg", [TeamAreas.INGENIERIA, TeamAreas.SOCIALES], "Pao"),
      new Student("Ximena", "Ximena.jpg", [TeamAreas.FINANZAS, TeamAreas.SOCIALES, TeamAreas.COMUNICACION])
    ];
  
    const mentors = [
      new Mentor("Alexis", "Alexis.jpg", [TeamAreas.INGENIERIA, TeamAreas.SOCIALES, TeamAreas.FINANZAS], "Alexis"),
      new Mentor("Arturo", "Arturo_prof.jpg", [TeamAreas.INGENIERIA, TeamAreas.FINANZAS, TeamAreas.SOCIALES], "Prof"),
      new Mentor("Celeste", "Celeste.jpg", [TeamAreas.FINANZAS, TeamAreas.SOCIALES, TeamAreas.INCLUSION], "Celeste"),
      new Mentor("Ernesto", "Ernesto.jpg", [TeamAreas.INGENIERIA], "Erno"),
      new Mentor("Jose", "Jose.jpg", [TeamAreas.INGENIERIA], "Pepe Lalo"),
      new Mentor("Natalia", "Natalia_mentora.jpg", [TeamAreas.INGENIERIA, TeamAreas.SOCIALES, TeamAreas.INCLUSION], "Nat"),
      new Mentor("Paola", "Pao_Mich.jpg", [TeamAreas.INGENIERIA, TeamAreas.SOCIALES], "Pao"),
      new Mentor("Rodrigo", "Rodrigo_mentor.jpg", [TeamAreas.INGENIERIA], "Ro"),
      new Mentor("Santiago", "Santi_mentor.jpg", [TeamAreas.INGENIERIA, TeamAreas.COMUNICACION], "Santi"),
      new Mentor("Sara", "Sara_mentora.jpg", [TeamAreas.INGENIERIA, TeamAreas.SOCIALES], "Sara"),
      new Mentor("Sarah ", "Sarah_mentora.jpg", [TeamAreas.FINANZAS, TeamAreas.SOCIALES, TeamAreas.COMUNICACION], "Sarah"),
      new Mentor("Sebastian", "Sebastián_mentor.jpg", [TeamAreas.INGENIERIA, TeamAreas.FINANZAS], "Sebas"),
      new Mentor("Uriel", "Uri.jpg", [TeamAreas.FINANZAS, TeamAreas.SOCIALES, TeamAreas.COMUNICACION], "Uri")
    ];
  
    const coaches = [
      new Coach("Víctor", "Vic.jpg", [TeamAreas.HEAD_COACH], "Vic"),
      new Coach("Cinthya", "Cin.jpg", [TeamAreas.COACH], "Cin"),
      new Coach("Diego", "Dieguito.jpg", [TeamAreas.COACH], "Dieguito"),
      new Coach("Manuel", "Manu.jpg", [TeamAreas.COACH], "Manu"),
      new Coach("Ricardo", "nava.jpg", [TeamAreas.COACH], "Nava")
    ];
  
    const tr = new TeamRooster(students, mentors, coaches, 2023);
    return tr;
}