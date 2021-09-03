class DinoKeeper {
  public name: string;
  constructor(name) {
    this.name = name;
  }

  public sayHi = () => {
    return this.name + ' says "hi"';
  };
}

let employee1 = new DinoKeeper("Joe");
employee1.sayHi();

export default DinoKeeper;
