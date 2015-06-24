/**
 * Create a function max(a, b)
 * that returns a biggest number
 */
function max(a, b) {
  if(a > b) {
    return a;
  } else {
    return b;
  } 
}
console.log(max(4, 10));
console.log(max(15, 10));
console.log(max(15, 15));

/**
 * Create a function greating(firstName, lastName, age)
 * that return print next text:
 * 'Welcome, Slava Ivanov! You are 27 years old.'
 */

function greating(firstName, lastName, age) {
  console.log('Welcome, ' + firstName + ' ' + lastName + '! You are ' + age + ' years old.');
}
 greating('Slava', 'Ivanov', 27);

/**
 * Create a function isEven(number)
 * that returns 'true' if number is even
 */

function isEven(number) {
  if(number % 2 === 0) {
    console.log('четное');
    return true;
  } else {
    console.log('нечетное');
    return false;
  }
  // return (number % 2 === 0);   //чистый вариант
}
console.log(isEven(11));
console.log(isEven(4));

/**
 * Create a function adminLogin(username, password)
 * that returns 'true' if username is 'root' and password is 'god'
 */


function adminLogin(username, password) {
  // if(username === 'root' && password === 'god') {
  //   return true;
  // } else {
  //   return false;
  // }
  return (username === 'root' && password === 'god');
}

console.log(adminLogin('root', 'god'));
console.log(adminLogin('roops', 'god'));
console.log(adminLogin('root', 'gods'));