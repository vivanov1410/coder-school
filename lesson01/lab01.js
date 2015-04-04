// change player name to anything you like

var playerName = 'Your Name';
playerName = 'knight';

// create variable for player health and make it equal to 100
var playerHealth = 100;

// create variable for player attack and make it equal to 40
var playerAttack = 40;

// create variable for enemy health and make it equal to 90
var enemyHealth = 90;

// create variable for enemy attack and make it equal to 20
var enemyAttack = 20;

// enemy is attacking you! Deduct enemy attack from player health
playerHealth = playerHealth - enemyAttack;
console.log(playerHealth);

// you attacking back! Deduct player attack from enemy health
enemyHealth = enemyHealth - playerAttack;
console.log(enemyHealth);

// enemy is attacking you! Deduct enemy attack from player health
playerHealth = playerHealth - enemyAttack;
console.log(playerHealth);

// you attacking again! Deduct player attack from enemy health
enemyHealth = enemyHealth - playerAttack;
console.log(enemyHealth);

// you finishing again! Deduct player attack from enemy health
enemyHealth = enemyHealth - playerAttack;
console.log(enemyHealth);

// check if enemy is dead
var deadEnemy = enemyHealth <= 0;
console.log(deadEnemy + ' enemy is dead');

// print out player stats in following format:
// <player_name>
// Health: <player_health>
// Attack: <player_attack>
console.log(playerName);
console.log('Health:' + playerHealth);
console.log('Attack:' + playerAttack);
