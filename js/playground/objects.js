/**
 * Objects
 */

var a = 5;
var numbers = [1, 2, 3];

// function square(n) {
//   return n * n;
// }

var square = function (n) {
  return n * n;
};

// console.log(square(5));

// anonymous functions
// var operation = function (n, f) {
//   return f(n);
// }

// console.log(operation(5, function (n) {
//   return n * 10;
// }));

// console.log(operation(5, function (n) {
//   return n / 10;
// }));

// object

var player = {};    // empty object
player.name = 'Aatrox';
player.health = 100;
player.armor = 50;

player.say = function () {
  console.log('Hi, my name is ' + this.name);
};
// player.say();

player.gainHealth = function () {
  this.health = this.health + 50; // health += 50
};

// player.gainHealth();
// console.log(player.health);

player.lostHat = function () {
  this.armor -= 10;
};

// player.lostHat();
// console.log(player.armor);

var enemy = {
  name: 'Alistar',
  health: 110,
  armor: 20
};

var attack = function (attacker, defender) {
  console.log(attacker.name + ' is attacking ' + defender.name);
};

attack(player, enemy);

// object in array

var people = [player, enemy];
for(var i = 0; i < people.length; i++) {
  console.log(people[i].name);
}

// tribe statistics
function random(min, max) {
  return Math.floor(Math.random()*(max - min) + min);
}

var names = ['Slava', 'Misha', 'Sveta', 'Galya', 'Ksusha', 'Dasha', 'Myaut', 'Pupsya'];
var tribe = [];
for(var i = 0; i < 10000; i++) {
  var person = {
    id: i,
    name: names[random(0, names.length)],
    age: random(3, 80)
  };
  tribe.push(person);
}

console.log(tribe);

var totals = [];
for(var i = 0; i < tribe.length; i++) {
  for(var j = 0; j < names.length; j++) {
    if(tribe[i].name === names[j]) {
      totals[j] = totals[j] || 0;
      totals[j]++;
    }
  }
}

for(var i = 0; i < names.length; i++) {
  console.log('Total of ' + names[i] + ': ' + totals[i]);
}

// average age
var totalAge = 0;
for(var i = 0; i < tribe.length; i++) {
  totalAge += tribe[i].age;
}

console.log('Average age: ' + totalAge / tribe.length);