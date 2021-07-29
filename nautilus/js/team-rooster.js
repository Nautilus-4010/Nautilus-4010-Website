function main() {
  load2020TeamRooster();
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

  const teamRooster2020 = new TeamRooster(students, mentors, coaches, 2020);
  teamRooster2020.render();
}

main();
