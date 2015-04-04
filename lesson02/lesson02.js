/**
 * Program Structure and Conditions
 */

if(3 > 5) {
  console.log('bigger');
}

// console.log('after');

// if(Math.random()) {
//   console.log('bigger');
// }
// Math.random() * (max - min) + min
// console.log(Math.floor(Math.random()*(20-5) + 5));

function random(min, max) {
  return Math.floor(Math.random()*(max - min) + min);
}

// console.log(random(5, 20));

// function sum(a, b) {
//   return a + b;
// }

// function avg(arr) {
//   var sum = 0;
//   for(var i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum / arr.length;
// }

// // functions
// // console.log(sum(10, 5));
// // console.log(avg([10, 14, 3, 5, 8]));

// // console.log(10, 'Slava', -45);
// // console.log(10 + 5);

// // control flow
// var a = 10;
// // console.log(a);

// conditionals
// if(условие) {
//   действие;
// } else if (условие) {
//   действие;
// }
// else {
//   действие;
// }

// if(10 > 5) {
//   console.log('bigger');
// } else {
//   console.log('smaller');
// }

// var age = 50;
// if(age > 70) {
//   console.log('Ты старый!');
// } else {
//   console.log('Ты молодой...');
// }

var password = 'testoksadkjahsd';
if(password.length < 4) {
  console.log('Error: password is too short');
} else if(password.length < 10) {
  console.log('Password is normal');
} else {
  console.log('Password is very good');
}