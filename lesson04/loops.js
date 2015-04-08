/**
 * Loops
 */

// for loop

// for(var i = 0; i < 1000; i++) {
//   console.log(i);
// }

var sum = 0;
for(var number = 1; number <= 5; number++) {
  sum = sum + number;
}

var stars = '';
var numbers = '';
for(var j = 1; j <= 10; j++) {
  stars += '*'; // same as "stars = stars + '*'"
  numbers += j; // same as "numbers = numbers + j"
  console.log(stars + numbers);
}
