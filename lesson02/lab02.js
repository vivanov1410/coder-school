var attacker = 'swordman';

// create variables for defender

// attacker or defender can have values: 'swordman', 'archer', 'horseman', 'berserker'

// create conditions on who can kill who:
// swordman can kill archer
// archer can kill berserker
// horseman can kill swordman and archer
// berserker can kill everybody

if(attacker === 'swordman' && defender === 'archer') {
  console.log(attacker + ' kills ' + defender);
}