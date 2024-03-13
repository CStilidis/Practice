const functionName = (parameters) => {
  //Function body
  return; // return value
};

// If one parameter then we can omit the parenthesis,
// if the body has only one line we can omit the curly
// brackets and the return keyword

const printMessage = (name) => console.log(name);

printMessage("Christos");

//Traditional function expression
function addT(a, b) {
  return a + b;
}

// Arrow function
const addA = (a, b) => {
  return a + b;
};

// Implicit return
const add = (a, b) => a + b;
