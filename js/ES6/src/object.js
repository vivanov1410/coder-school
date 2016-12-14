let firstName = 'Mihail',
    lastName = 'Romanyuk',
    email = 'mihail09995@gmil.com';
//
    // let person = {
    //   firstName: firstName,
    //   lastName: lastName,
    //   email: email,
    //   sayHello: function() {
    //     console.log(`Hi my name is ${firstName} ${lastName}`);
    //   }
    // };
    //
    // console.log(person);
    // person.sayHello();
//
// let person = {
//   firstName,
//   lastName,
//   email,
//   sayHello() {
//     console.log(`Hi my name is ${this.firstName} ${lastName}`);
//   }
// };
//
// console.log(person);
// person.sayHello();

let issuingTime = "someday",
    device = "myMacbook";
let macbook = {
  issuingTime,
  device,
  expectation() {
    console.log(`and yet I hope that ${this.issuingTime} get ${this.device}`);
  }
};
macbook.expectation();
