class TeamRooster {
  constructor(students, mentors, coaches, year){
    this._students = students;
    this._mentors = mentors;
    this._coaches = coaches;
    this._year = year;
  }

  get students(){
    return this._students;
  }

  get mentors(){
    return this._mentors;
  }

  get coaches(){
    return this._coaches;
  }

  get year(){
    return this._year;
  }

  render(){
    this.populateSection('#estudiantes', this.students);
    this.populateSection('#mentores', this.mentors);
    this.populateSection('#coaches', this.coaches);
  }

  populateSection(sectionCssId, members){
    const container = document.querySelector(`${sectionCssId} .flexbox`);
    container.innerHTML = "";
    for (const member of members) {
      container.innerHTML += member.getCardHTML(this.year);
    }
  }
}
