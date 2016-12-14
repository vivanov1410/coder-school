'use strict';

var firstName = 'Mihail',
    lastName = 'Romanyuk',
    email = 'mihail09995@gmil.com';

// let person = {
//   firstName: firstName,
//   lastName: lastName,
//   email: email,
//   sayHello: function() {
//     console.log(`Hi my name is ${this.firstName} ${lastName}`);
//   }
// };
//
// console.log(person);
// person.sayHello();

var person = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    sayHello: function sayHello() {
        console.log('Hi my name is ' + this.firstName + ' ' + lastName);
    }
};

console.log(person);
person.sayHello();