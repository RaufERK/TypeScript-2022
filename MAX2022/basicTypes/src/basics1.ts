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

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person = {
  name: 'Rauf',
  age: 22,
  hobbies: ['Hokkey', 'jogging'],
  role: Role[2],
}

console.log(person)
