function main() {
  const teamRooster2021 = load2021TeamRooster();
  const teamRooster2020 = load2020TeamRooster();
  teamRooster2020.render();
}

const load2021TeamRooster = function(){
  const students = [
    new Student("Fernando", "fernando.jpg", [TeamAreas.MESA])
  ];
  console.log(students);

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
    new Student("Sara", "sara.jpg", [TeamAreas.MESA, TeamAreas.INGENIERIA], "Sarita"),
    new Student("Camila", "camila.jpg", [TeamAreas.MESA, TeamAreas.INGENIERIA], "Mila")
  ];
  console.log(students);

  const mentors = [
    new Mentor("Alejandro", "alex.jpg", [TeamAreas.INGENIERIA], "Alex")
  ];

  const coaches = [
    new Coach("Víctor", "victor.jpg", [TeamAreas.HEAD_COACH], "Vic")
  ];

  const tr = new TeamRooster(students, mentors, coaches, 2020);
  return tr;
}

main();
