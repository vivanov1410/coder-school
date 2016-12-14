class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
    this.hunger = 0
  }
  walk(distance) {
    this.hunger = distance / 100 + this.hunger
  }
  eat(food) {
    this.hunger = this.hunger - food
  }
}

const person = new Person('Aatrox', 32)

console.log(person.name, person.age, person.hunger);
person.walk(4000)
person.walk(2000)
console.log(person.hunger);



person.eat(10)
person.eat(5)
console.log(person.hunger);
//-----------------------------------------------------------------------//
