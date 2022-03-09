class Mentor extends TeamMember {
  constructor(name, photoUrl, areas, nickname){
    super(name, photoUrl, areas, nickname);
    this.role = this.MENTOR_ROLE;
  }
}
