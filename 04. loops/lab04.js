// for(var i = 0; i <= 1000; i++) { // i = i + 1
//   console.log(i);
// }

/**
 * Create a loop that prints out numbers from 10 to 100
 */
for(var loop = 10; loop <= 100; loop++) {
  console.log(loop);
}

/**
 * Create a loop that prints out numbers from 1 to 1000 in following format:
 * 1 - odd
 * 2 - even
 * 3 - odd
 * 4 - even
 * ...
 * 999 - odd
 * 1000 - even
 */

for(var loop = 1; loop <= 1000; loop++) {
  if(loop % 2 === 0) {
    console.log(loop + ' even');
  } else {
    console.log(loop + ' odd');
  }
}


/**
 * Print out a sum of all even numbers from 1 to 1000
 */

var fruits = ['banana', 'apple', 'orange', 'melon', 'watermelon', 'strawberry', 'raspberry', 'kiwi'];
/**
 * Create a loop that uses array fruits to prints text in following format:
 *
 * I have banana
 * You have apple
 * I have orange
 * You have apple
 * ...
 */

var strangeFruits = ['banana', 'apple', 'orange', 'melon', 'watermelon', 'potato', 'strawberry', 'raspberry', 'kiwi'];
/**
 * Create a loop that finds an index of 'potato' element in array strangeFruits
 */

/**
 * Create a function findIndex(arr, element)
 * that returns index of element in arr (same as above but using function)
 */
