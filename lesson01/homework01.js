/**
 * Кочующее Племя
 */

// измени на количество людей в твоем племени, например, 100
var population = 0;

var distanceTraveled = 0;   // сколько всего километров плошло твое племя

// create variable for tribe time traveled (in years) - колько всего лет твое племя кочевало

var birthCoefficient = 1.5; // используется для увеличения населения в год (50%)

// create variable for death coefficient (коэффициент смерти в год) and make it equal to 1.2 (20%)

// за первый год племеня прошло 100 километров
// change tribe traveled distance and tribe time traveled for first year

// люди рождаются...
population = population * birthCoefficient;

// ... и умирают
// update population with death coefficient (как показано выше)

// за второй год племеня прошло 250 километров
// change tribe traveled distance and tribe time traveled for second year

// в этом году люди были счастливы, поэтому родилось много детей
// change birth coefficient to 1.7

// update population by birth coefficient and death coefficient (как делали выше)

// за третий год племеня прошло только 54 километра
// change tribe traveled distance and tribe time traveled for second year

// в этом году была чума, поэтому многие умерли
// add 0.2 to death coefficient

// update population by birth coefficient and death coefficient (как делали выше)

// твое племя наконец-то нашло место, где они хотели бы основаться. Поздравляю
// print out tribe stats in following format:
// Population: <population>
// Distance Traveled: <distance_treveled> kilometers
// Time Traveled: <time_traveled> years

// Bonus
// добавь в статистику сколько всего людей умерло и родилось за все время