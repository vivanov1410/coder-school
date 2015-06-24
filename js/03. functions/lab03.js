/**
 * Create a function first(arr)
 * that returns first element of array
 */
function first(arr) {
  return arr[0];
}

var numbers = [5, 6, 8, 10, 15];
console.log(first(numbers)); 


/**
 * Create a function last(arr)
 * that returns last element of array
 */
function last(arr) {
  return arr[arr.length - 1];
}
console.log(last(numbers));
/**
 * Create a function average(a, b)
 * that returns an average of number a and b
 */
function average(a, b) {
  return (a+b)/2;
}
console.log(average(10, 30));

/**
 * Create a function bye(text)
 * that prints out 'Bye-bye!' on one line and text on next line
 */
function bye(text) {
  console.log('Bye-bye ');
  console.log(text);
}
bye('fridrih');

/**
 * Create a function printStatistics(name, position, company)
 * that prints text in following format:
 * <name>
 * works as <position>
 * works at <company>
 */
 function printStatistics(name, position, company) {
  console.log(name);
  console.log('works as ' + position);
  console.log('works at ' + company);
 }

 printStatistics('Grigoriy', 'admin', 'russko');

/**
 * Create a function hasLowHealth(name, health)
 * that prints out text:
 * 'health is low' if health is low (low if health < 10)
 * 'health is normal' if health is not low
 * and return true if health is low and false if not
 */

 function hasLowHealth(name, health) {
  if(health < 10) {
    console.log(name + 'health is low');
    return true;
  } else {
    console.log(name + 'health is normal');
    return false;
  }
 }

hasLowHealth('Rick ', 9);









