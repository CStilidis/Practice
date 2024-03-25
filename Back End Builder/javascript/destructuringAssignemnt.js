// Object
const person = {
  name: "Bob",
  age: 30,
};

const { name, age } = person;

console.log(name);

// Nested object

const user = {
  id: "123",
  address: {
    city: "Paris",
    country: "France",
  },
};

const {
  id,
  address: { city },
} = user;

console.log(id);
console.log(city);

// Array
const array = [1, 2, 3];

const [var1, , var3] = array;

console.log(var1);
console.log(var3);
