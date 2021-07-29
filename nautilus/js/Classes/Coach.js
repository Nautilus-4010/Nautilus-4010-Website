class Coach extends TeamMember {
  constructor(name, photoUrl, areas, nickname){
    super(name, photoUrl, areas, nickname);
    this.role = this.COACH_ROLE;
  }
}
