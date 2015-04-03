function sum(a, b) {
  return a + b;
}

function avg(arr) {
  var sum = 0;
  for(var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

// functions
// console.log(sum(10, 5));
// console.log(avg([10, 14, 3, 5, 8]));

// console.log(10, 'Slava', -45);
// console.log(10 + 5);

// control flow
var a = 10;
// console.log(a);

// conditionals
// if(условие) {
//   действие;
// } else if {
//   действие;
// }
// else {
//   действие;
// }

var age = 50;
if(age > 70) {
  console.log('Ты старый!');
} else {
  console.log('Ты молодой...');
}

var password = 'test';
if(password.length < 4) {
  console.log('Error: password is too short');
} else if(password.length < 10) {
  console.log('Password is normal');
} else {
  console.log('Password is very good');
}








