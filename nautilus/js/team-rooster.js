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
    new Student("Sara", "sara.jpg", [TeamAreas.MESA, TeamAreas.INGENIERIA], "Sarita"),
    new Student("Camila", "camila.jpg", [TeamAreas.MESA, TeamAreas.INGENIERIA], "Mila")
  ];

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
