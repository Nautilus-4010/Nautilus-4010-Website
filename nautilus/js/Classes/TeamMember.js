class TeamMember {
  STUDENT_ROLE = "estudiante";
  COACH_ROLE = "coach";
  MENTOR_ROLE = "mentor";

  constructor(name, photoUrl, areas, nickname = ""){
    this._name = name;
    this._photoUrl = photoUrl;
    this._areas = areas;
    this._nickname = (nickname == "" ? this._name: nickname);
    this._role = "";
  }

  get areas(){
    return this._areas;
  }

  get name(){
    return this._name;
  }

  get nickname(){
    return this._nickname;
  }

  get photoUrl(){
    return this._photoUrl;
  }

  get role(){
    return this._role;
  }

  set role(role){
    this._role = role;
  }

  getCardHTML(year) {
    let HTMLTemplate = `
    <div class="fotito">
    <img src="img/equipo/${year}/${this.role}/${this.photoUrl}" title="${this.nickname}">
    <h3>${this.name}</h3>`;
    HTMLTemplate += this.formatAreas();
    HTMLTemplate += "</div>";
    return HTMLTemplate;
  }

  formatAreas(){
    let areas_str = "<p>" + this.areas[0];
    let i = 1;
    for(;i < this.areas.length; i++)
      areas_str += ` / ${this.areas[i]}`;
    areas_str += "</p>";
    return areas_str;
  }
}
