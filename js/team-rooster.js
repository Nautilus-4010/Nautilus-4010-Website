const roosterNavBtns = document.querySelectorAll("#year-btns button");

function main() {
  const teamRoosters = new Map()
  teamRoosters.set(2023, load2023TeamRooster());
  teamRoosters.set(2022, load2022TeamRooster());
  teamRoosters.set(2021, load2021TeamRooster());

  for (const btn of roosterNavBtns) {
    btn.onclick = function(){
      const btnYear = Number(btn.value);
      const respectiveRooster = teamRoosters.get(btnYear);
      higlightBtnAndRenderRooster(btn, respectiveRooster);
    }
  }

  higlightBtnAndRenderRooster(roosterNavBtns[0], teamRoosters.get(2023));
}

const higlightBtnAndRenderRooster = function(button, rooster){
  for (const btn of roosterNavBtns) {
    btn.classList.remove("active");
  }
  button.classList.add("active");
  rooster.render();
};

main();
