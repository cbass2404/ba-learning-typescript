import DinoKeeper from "./4a-classes-hello-dino";

class Specialist extends DinoKeeper {
  constructor(name: string, public experience: number) {
    super(name);
    this.name = name;
    this.experience = experience;
  }

  public safetyQuote = () => {
    return `Never turn your back to the cage. Trust me, I have ${this.experience} years of experience`;
  };
}
export default Specialist;
