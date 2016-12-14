'use strict';

//Без оператора разворота
var mas = ['q', 'w', 'e'];
var mas2 = ['a', 's', 'd'];

var mas3 = [mas, 'z', mas2, 'x', 'c'];

console.log(mas3);
// С оператором разворота
var mas4 = ['r', 't', 'y'];
var mas5 = [].concat(mas4, ['f', 'g', 'h']);

console.log(mas5);