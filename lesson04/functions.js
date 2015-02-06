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