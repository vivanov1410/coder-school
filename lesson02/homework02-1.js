/**
 * Create a username checker similar to password checker from lesson02.js
 *
 * - username should be min 4 characters
 * - username should not equal 'root'
 * - username should be maximum 20 characters
 * - print specific error if username is incorrect
 * - if username is correct then print 'Welcome <username>!'
 */

 var username = 'llllllllllllllllllllll'
 if(username.length < 4) {
  console.log('Error: username should be min 4 characters');
} else if(username === 'root') {
  console.log('username is incorrect - specific error');
} else if(username.length <= 20) {
  console.log('Welcome ' + username + '!');
} else if(username.length > 20) {
  console.log('Error: username should be maximum 20 characters');
}


var attackerName = 'knigt';
var attackerPower = 5;
var attackerDefence = 4;
var attacker = attackerPower + attackerDefence;

var defenderName = 'swordmen';
var defenderPower = 6;
var defenderDefence = 4;
var defender = defenderPower + defenderDefence;

if(attacker > defender) {
  console.log(attackerName + ' is wins!');
} else {
  console.log(defenderName + ' is wins!');
}


// knigt - power = 5 / defence = 4
// archer - power = 4 / defence = 3
// swordmen - power = 4 / defence = 4
// и т.д...