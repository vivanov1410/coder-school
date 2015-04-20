/**
 * Objects
 */

// var player = {
//   name: 'Aatrox',
//   health: 100,
//   say: function () {
//     console.log('Init Say');
//   },
//   sayMyName: function () {
//     console.log(this.name);
//   }
// };

// player.health = 50;

// // player.say = function () {
// //   console.log('Me');
// // };

// // player.say();
// player.sayMyName();

// создание класса, на основе которого можно создавать обьекты
// function Animal(name, age) {
//   this.name = name;
//   this.age = age;
// }

// Animal.prototype.say = function () {
//   console.log('Wow');
// };

// var rabbit = new Animal('fomka', 3);
// console.log(rabbit.name);
// rabbit.say();

// var bird = new Animal('boomer', 2);
// bird.say();

/**
 * Villager Class
 */

// var Villager = function (name, health, age) {..};

function Villager(name, health, age) {
  this.name = name;
  this.health = health;
  this.age = age;
}

Villager.prototype.getOlder = function () {
  this.age++;
};

// var v1 = new Villager('Semen', 100, 22);
// console.log(v1.age);
// v1.getOlder();
// console.log(v1.age);

// var villagers = [];
// for(var i = 0; i < 100; i++) {
//   villagers.push(new Villager('Semen', 100, 22));
// }

// console.log(villagers);

// for(var i = 0; i < villagers.length; i++) {
//   villagers[i].getOlder();
// }

// console.log(villagers);