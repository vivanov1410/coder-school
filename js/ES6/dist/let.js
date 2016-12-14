'use strict';

var buttons = document.querySelectorAll('button'); //Создал переменную и нашел//
//все кнопки с помощью метода  querySelectorAll//

var _loop = function _loop(i) {
  var button = buttons[i];
  button.innerText = i;
  button.onclick = function (e) {
    console.log(i);
  };
};

for (var i = 0; i < buttons.length; i++) {
  _loop(i);
}