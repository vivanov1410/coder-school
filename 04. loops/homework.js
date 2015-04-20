/**
 * Create a function sum(start, end)
 * that returns a sum of all numbers between 'start' and 'end' numbers
 *
 * @example
 * sum(1, 5) -> 15
 */

// function sum(start, end) {
//   var s = 0;
//   for(var i = start; i <= end; i++) {
//    s = s + i;
//   }

//   return s;
// }
// console.log('Total: ' + sum(3, 5));

/**
 * Create a function factorial(number)
 * that returns a product of all numbers from 1 to 'number'
 *
 * @example
 * factorial(5) -> 1*2*3*4*5 -> 120
 */
//factorial произведение всех натуральных чисел от 1 до number

// function factorial(number) {
//   var product = 1;
//   for(var i = 1; i <= number; i++) {
//     product = product * i;
//   }
//   return product;
// }
// console.log(factorial(10));

/**
 * Create a function ladder(steps)
 * that prints a ladder from 1 to 'steps'
 *
 * @example
 * ladder(5) ->
 * "  *
 *    **
 *    ***
 *    ****
 *    *****"
 */

// function ladder(steps) {
//   var simbol = '*';
//   var zv = simbol;
//   for(var i = 1; i <= steps; i++) {
//     console.log(zv);
//     zv = zv + simbol;
//   }
// }
// ladder(4);

// function ladder(steps, symbol) {
//   var zv = symbol;
//   for(var i = 1; i <= steps; i++) {
//     console.log(zv);
//     zv = zv + symbol;
//   }
// }
// ladder(10, '?');


/**
 * Create a function tree(rows)
 * that prints a tree from 1 to 'rows'
 *
 * @example
 * tree(5) ->
<<<<<<< HEAD
 * "  *
 *   ***
 *  *****"
 */

/////////////////////////вариант 1

// function tree(rows) {
//   var context = '*';

//   for(var i = 0; i < rows; i++) {
//     var maxLength = ((rows-i)*2 - 1);
//     var totalSpaces = (maxLength - 1) / 2;

//     var spaces = '';
//     for(var j = 0; j < totalSpaces; j++) {
//       spaces += ' ';
//     }

//     console.log(spaces + context);

//     context += '**';
//   }
// }

// tree(5);

//////////////////////////////////////////////вариант 2

// function tree(rows) {
//   var context = '*';
//   var maxLength = (rows*2 - 1);
//   var totalSpaces = (maxLength - 1) / 2;

//   for(var i = 0; i < rows; i++) {
//     var spaces = '';
//     for(var j = 0; j < totalSpaces; j++) {
//       spaces += ' ';
//     }

//     console.log(spaces + context);

//     context += '**';
//     totalSpaces = totalSpaces - 1;
//   }
// }

// tree(5);


// function FizzBuzz(number) {
//   for(var i = 1; i <= number; i++) {
//     if(i % 3 === 0 && i % 5 === 0) {
//       console.log(i + ' FizzBuzz');
//     } else if(i % 5 === 0) {
//       console.log(i + ' Buzz');
//     } else if(i % 3 === 0) {
//       console.log(i + ' Fizz');
//     } else {
//       console.log(i);
//     }
//   }
// }
// FizzBuzz(100);



function sum(number) {
  var total = 0;
  var sumOf3 = 0;
  var sumOf5 = 0;

  for(var i = 1; i <= number; i++) {
    if(i % 5 === 0) {
      sumOf5 = sumOf5 + i;
    } else if(i % 3 === 0) {
      sumOf3 = sumOf3 + i;
    }
  }
  total = (sumOf3 + sumOf5);

  return total;
}

console.log('totale ' + sum(100));

// выучить арифмитическую прогрессию
// ctrl + enter - вставить пустую строку с любого места кода

console.log(333 * 3);