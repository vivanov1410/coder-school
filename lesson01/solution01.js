/**
 * Кочующее Племя
 */

// измени на количество людей в твоем племени, например, 100
var population = 100;

var distanceTraveled = 0;   // сколько всего километров плошло твое племя

// create variable for tribe time traveled (in years) - колько всего лет твое племя кочевало
var timeTraveled = 0;

var deaths = 0;
var births = 0;

var birthCoefficient = 1.5; // используется для увеличения населения в год (50%)

// create variable for death coefficient (коэффициент смерти в год) and make it equal to 1.2 (20%)
var deathCoefficient = 0.8;

// за первый год племеня прошло 100 километров
// change tribe traveled distance and tribe time traveled for first year
distanceTraveled += 100;
timeTraveled++;

births += population * (birthCoefficient - 1);
// люди рождаются...
population = population * birthCoefficient;

deaths += population * (1 - deathCoefficient);
// ... и умирают
// update population with death coefficient (как показано выше)
population = population * deathCoefficient;

// за второй год племеня прошло 250 километров
// change tribe traveled distance and tribe time traveled for second year
distanceTraveled += 250;
timeTraveled++;

// в этом году люди были счастливы, поэтому родилось много детей
// change birth coefficient to 1.7
birthCoefficient = 1.7;
births += population * (birthCoefficient - 1);
// update population by birth coefficient and death coefficient (как делали выше)
population = population * birthCoefficient;

deaths += population * (1 - deathCoefficient);
population = population * deathCoefficient;

// за третий год племеня прошло только 54 километра
// change tribe traveled distance and tribe time traveled for second year
distanceTraveled += 54;
timeTraveled++;

// в этом году была чума, поэтому многие умерли
// add 0.2 to death coefficient
deathCoefficient -= 0.2;

births += population * (birthCoefficient - 1);
// update population by birth coefficient and death coefficient (как делали выше)
population = population * birthCoefficient;

deaths += population * (1 - deathCoefficient);
population = population * deathCoefficient;

// твое племя наконец-то нашло место, где они хотели бы основаться. Поздравляю
// print out tribe stats in following format:
// Population: <population>
// Distance Traveled: <distance_treveled> kilometers
// Time Traveled: <time_traveled> years
console.log('Population: ' + population);
console.log('Distance Traveled: ' + distanceTraveled + ' kilometers');
console.log('Time Traveled: ' + timeTraveled + ' years');

// Bonus
// добавь в статистику сколько всего людей умерло и родилось за все время
console.log('Births: ' + births);
console.log('Deaths: ' + deaths);