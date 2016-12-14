class Calculator {
  constructor() {
    this.additions = 0
    this.deductions = 0
    this.multiplications = 0
    this.divisions = 0
  }

  add(a, b) {
    this.additions = this.additions + 1

    return a + b
  }

  deduct(a, b) {
    this.deductions = this.deductions + 1

    return a - b
  }

  multiply(a, b) {
    this.multiplications = this.multiplications + 1

    return a * b
  }

  divide(a, b) {
    this.divisions = this.divisions + 1

    return a / b
  }

  stats() {
    console.log(`additions: ${this.additions}`);
    console.log(`deductions: ${this.deductions}`);
    console.log(`multiplications: ${this.multiplications}`);
    console.log(`divisions: ${this.divisions}`);
  }
}

let number1 = 10
let number2 = 5

const calculator = new Calculator()
const a = calculator.add(number1, number2)
const b = calculator.deduct(number1,number2)
const c = calculator.multiply(number1, number2)
const d = calculator.divide(number1, number2)
console.log(a);
console.log(b);
console.log(c);
console.log(d);
calculator.add(number1, number2)
calculator.multiply(number1, number2)
calculator.multiply(number1, number2)
calculator.multiply(number1, number2)
calculator.multiply(number1, number2)
calculator.stats()






// $(function () {                               //Для загрузки элементов..//
//   $('#calculate').click(function () {
//     var a = parseFloat($('#number1').val())
//     var b = parseFloat($('#number2').val())
//     const operation = $('#operation').val()
//     const result = $('#result')
//     if (isNaN(a) || isNaN(b)) {
//       result.text('Можно вводить только числа')
//     } else if (operation === '+') {
//       result.text(a + b)
//     } else  if (operation === '-') {
//       result.text(a - b)
//     } else  if (operation === '*') {
//       result.text(a * b)
//     } else  if (operation === '/') {
//       result.text(a / b)
//     }
//   })
// })
