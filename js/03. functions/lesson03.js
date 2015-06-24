/**
 * Array
 */

var a = 'hello';
var b = 4;

var arr = [1, 2, 3, 55, 16];
var fruits = ['apple', 'pineaplex', 'cucumber', 'watermelon'];
// index         0          1           2            3

console.log(fruits[0]); // return first element of array
console.log(fruits[1]); // return second element of array
console.log(fruits.length); // return a length of array
console.log(fruits[fruits.length - 1]); // return a last element of array (в скобках индекс,покажет последнюю позицию в массиве)

fruits.push('banana'); // add new element to array
console.log(fruits.length);
console.log(fruits);

fruits[1] = 'pineaple'; // изменение текущего значения(элемента)
console.log(fruits);

// min = 0, max = fruits.length
// var randomIndex = random(0, fruits.length);
// console.log(fruits[randomIndex]);

/**
 * Functions
 */

function printStats(name, health, armor) {
  console.log('The greatest ' + name);
  console.log(health);
  console.log(armor);
}

printStats('Slava', 100, 50);
printStats('Misha', 200, 100);   // вызывается 3 раза с разными значениями
printStats('Sveta', 300, 150);

// function print(message) {
//   console.log(message);
// }

// // print('Privet vsem vam!');

function double(number) {
  return number * 2;
}

// console.log(double(101));

function increasePopulation(population, birthRate) {
  return population * birthRate;
}

console.log(increasePopulation(100, 1.5));
console.log(increasePopulation(46342, 1.3372));

// function square(number) {
//   return number*number;
// }

// var x = square(10);
// // console.log(x);
// print(x);
// // console.log(square(10));
// // console.log(square(30));

// function min(a, b) {
//   if(a < b) {
//     return a;
//   } else {
//     return b;
//   }
// }

// console.log(min(4, 8));
// console.log(min(10, 3));

// // var x = 10;
// // console.log(x*x);

// // var y = 145;
// // console.log(y*y);




