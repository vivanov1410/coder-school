var attacker = 'archer';
var defender = 'berserker';

function random(min, max) {
  return Math.floor(Math.random()*(max - min) + min); //возвращает случайное число от минимума до максимума(максимум не входит)
}

// create variables for defender

// attacker or defender can have values: 'swordman', 'archer', 'horseman', 'berserker'

// create conditions on who can kill who:
// swordman can kill archer
// archer can kill berserker
// horseman can kill swordman and archer
// berserker can kill everybody

// if(attacker === 'swordman' && defender === 'archer') {
//   console.log(attacker + ' kills ' + defender);
// } else if(attacker === 'archer' && defender === 'berserker') {
//   console.log(attacker + ' kills ' + defender);
// } else if(attacker === 'horseman' && (defender === 'swordman' || defender === 'archer')) {
//   console.log(attacker + ' kills ' + defender);
// } else if(attacker === 'berserker') {
//   console.log(attacker + ' kills ' + defender);
// }
// else {
//   console.log(defender + ' kills ' + attacker);
// }
var chance = random(0, 2);
if(chance === 0) {
  console.log(attacker + ' kills ' + defender);
} else {
  console.log(defender + ' kills ' + attacker);
}