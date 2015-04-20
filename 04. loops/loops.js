/**
 * Loops
 */

// for loop

// for(var i = 0; i <= 1000; i++) { // i = i + 1
//   console.log(i);
// }

// for(var i = 0; i <= 1000; i++) {
//   if(i % 2 === 0) {
//     console.log('Even number: ' + i);
//   }
// }

// for(var i = 0; i <= 1000; i++) {
//   if(i % 2 === 0) {
//     console.log('Even number: ' + i);
//   } else {
//     console.log(i);
//   }
// }

// for(var i = 0; i <= 1000; i++) {
//   console.log(i);
//   if(i === 545) {
//     console.log('Server is overload!');
//     break; // stops cycle
//   }
// }

// var sum = 0;
// for(var i = 0; i <= 1000; i++) {
//   console.log('sum = ' + sum + ' + ' + i);
//   sum = sum + i;
// }
// // sum = 0 + 0
// // sum = 0 + 1
// // sum = 1 + 2
// // sum = 3 + 3
// // sum = 6 + 4
// // sum = 10 + 5
// // ...
// console.log('Total: ' + sum);

var fruits = ['banana', 'apple', 'orange', 'melon', 'watermelon', 'cucumber'];
// for(var i = 0; i < fruits.length; i++) { // пока индекс меньше длины массива
//   console.log(fruits[i]);
// }

for(var i = 0; i < fruits.length; i++) { // пока индекс меньше длины массива
  if(fruits[i] === 'orange') {
    console.log('Orange is here under index ' + i);
  }
}

// var stars = '';
// var numbers = '';
// for(var j = 1; j <= 10; j++) {
//   stars += '*'; // same as "stars = stars + '*'"
//   numbers += j; // same as "numbers = numbers + j"
//   console.log(stars + numbers);
// }
