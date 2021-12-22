const load2022TeamRooster = function(){
    const students = [
      new Student("Fernando", "fernando.jpg", [TeamAreas.MESA])
    ];
  
    const mentors = [
      new Mentor("Regina", "regina.jpg", [TeamAreas.SOCIALES])
    ];
  
    const coaches = [
      new Coach("Cinthya", "cinthya.jpg", [TeamAreas.HEAD_COACH], "Cin")
    ];
  
    const tr = new TeamRooster(students, mentors, coaches, 2022);
    return tr;
}
