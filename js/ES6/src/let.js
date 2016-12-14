var buttons = document.querySelectorAll('button');  //Создал переменную и нашел//
//все кнопки с помощью метода  querySelectorAll//

for (let i = 0; i < buttons.length; i++) {
  let button = buttons[i];
  button.innerText = i;
  button.onclick = function(e) {
    console.log(i);
  };
}
