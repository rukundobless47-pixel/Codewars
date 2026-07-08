class Person {
  constructor(firstName = 'John', lastName='Doe', age=0, gender='Male'){
    this.firstName = firstName,
    this.lastName  = lastName,
    this.age = age,
    this.gender = gender
  }
  sayFullName(){
    return `${this.firstName} ${this.lastName}`;
  }
  static greetExtraTerrestrials(raceName){
    return `Welcome to Planet Earth ${raceName}`
  }
}
const obj = new Person();
console.log(obj.sayFullName());
console.log(Person.greetExtraTerrestrials('Martians'));