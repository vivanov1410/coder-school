/**
 * Create a odd/even number checker
 * 
 * - if number is odd then print '<number> is odd'
 * - if number is even then print '<number> is even'
 */

 var number = 2080;
 if(number % 2 === 0) {
  console.log('число четное');
} else if(number % 2 === 1) {
  console.log('число нечетное');
}

var numberLetters = 'ш9в788';
if(numberLetters.length % 2 === 0) {
  console.log('количество букв(символов) в строке четное');
} else if(numberLetters.length % 2 === 1) {
  console.log('количество букв(символов) в строке нечетное');
}