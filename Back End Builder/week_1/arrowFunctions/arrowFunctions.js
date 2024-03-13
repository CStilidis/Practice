const printMessage = (name) => console.log(name);

printMessage("Christos");

// Arrow function
const addA = (a, b) => {
  return a + b;
};

// Implicit return

// If one parameter then we can omit the parenthesis,
// if the body has only one line we can omit the curly
// brackets and the return keyword

const add = (a, b) => a + b;
