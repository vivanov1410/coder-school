/**
 * Кочующее Племя
 */
var deathStatistics = 0;
var birthStatistcs = 0;
// измени на количество людей в твоем племени, например, 100
var population = 3750;

var distanceTraveled = 0;   // переменная показывающая - сколько всего километров плошло твое племя

// create variable for tribe time traveled (in years) - сколько всего лет твое племя кочевало

var timeTraveled = 0;

var birthCoefficient = 1.5; // используется для увеличения населения в год (50%)

// create variable for death coefficient (коэффициент смерти в год) and make it equal to 0.8 (20%)
var deathCofficient = 0.8;

// за первый год племеня прошло 100 километров
// change tribe traveled distance and tribe time traveled for first year
distanceTraveled = distanceTraveled + 100;
timeTraveled = timeTraveled + 1;
// люди рождаются...
birthStatistcs = birthStatistcs + population * (birthCoefficient - 1);
population = population * birthCoefficient;

// ... и умирают
// update population with death coefficient (как показано выше)
deathStatistics = deathStatistics + population * (1 - deathCofficient);
population = population * deathCofficient;

// за второй год племеня прошло 250 километров
// change tribe traveled distance and tribe time traveled for second year
distanceTraveled = distanceTraveled + 250;
timeTraveled = timeTraveled + 1;

// люди были счастливы, поэтому родилось много детей
// change birth coefficient to 1.7
birthCoefficient = birthCoefficient + 0.2;
birthStatistcs = birthStatistcs + population * (birthCoefficient - 1);
// update population by birth coefficient and death coefficient (как делали выше)
population = population * birthCoefficient;
deathStatistics = deathStatistics + population * (1 - deathCofficient);
population = population * deathCofficient;
// за третий год племеня прошло только 54 километра
// change tribe traveled distance and tribe time traveled for third year
distanceTraveled = distanceTraveled + 54;
timeTraveled = timeTraveled + 1;

// была чума, смертность повысилась
// change in update 0.2 to death coefficient
deathCofficient = deathCofficient - 0.2;
birthStatistcs = birthStatistcs + population * (birthCoefficient - 1);
// update population by birth coefficient and death coefficient (как делали выше)
population = population * birthCoefficient;
deathStatistics = deathStatistics + population * (1 - deathCofficient);
population = population * deathCofficient;
// твое племя наконец-то нашло место, где они хотели бы основаться. Поздравляю
// print out tribe stats in following format:
// Population: <population>
// Distance Traveled: <distance_treveled> kilometers
// Time Traveled: <time_traveled> years
console.log('Population ' + population);
console.log('Distance Traveled ' + distanceTraveled + ' kilometers');
console.log('Time Traveled ' + timeTraveled + ' years');
// Bonus
// добавь в статистику сколько всего людей умерло и родилось за все время
console.log('birth ' + birthStatistcs);
console.log('death ' + deathStatistics);