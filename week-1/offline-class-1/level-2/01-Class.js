
// class Animal {
//   constructor(name, legCount) {
//     this.name = name
//     this.legCount = legCount
//   }
//   describe() {
//     return `${this.name} has ${this.legCount} legs`
//   }
// }


class Animal {
  constructor(name, activity, legcount){
    this.name = name;
    this.activity = activity;
    this.legCount = legcount;
  }
  static animalType(){
    console.log("Not a human");
  }

  speak(){
    console.log('Hi there, '+this.name);
  }

}

const dog1 = new Animal('Bruno', 'Bhow bhow', 4);

dog1.speak();

Animal.animalType();
