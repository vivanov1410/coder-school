/**
 * Array
 */

// var a = 'hello';
// var b = 4;

// var arr1 = [1, 2, 3, 55, 16];
// var fruits = ['apple', 'pineaple', 'cucumber', 'watermelon'];
// // min = 0, max = fruits.length
// var randomIndex = random(0, fruits.length);
// console.log(fruits[randomIndex]);

function print(message) {
  console.log(message);
}

// print('Privet vsem vam!');

function square(number) {
  return number*number;
}

var x = square(10);
// console.log(x);
print(x);
// console.log(square(10));
// console.log(square(30));

function min(a, b) {
  if(a < b) {
    return a;
  } else {
    return b;
  }
}

console.log(min(4, 8));
console.log(min(10, 3));

// var x = 10;
// console.log(x*x);

// var y = 145;
// console.log(y*y);