"use strict";
// interface PersonType {
//   name: string
//   age: number
//   hobbies: string[]
//   role: [number, string]
// }
// const person: PersonType = {
//   name: 'Rauf',
//   age: 22,
//   hobbies: ['Hokkey', 'jogging'],
//   role: [2, 'author'],
// }
// for (const hobby of person.hobbyes) {
//   console.log(hobby)
// }
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
const person = {
    name: 'Rauf',
    age: 22,
    hobbies: ['Hokkey', 'jogging'],
    role: Role[2],
};
console.log(person);
