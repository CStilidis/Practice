// callback = function that is passed as an argument
// to another function

// Used to handle asynchronous operations:
// 1. Reading a file
// 2. Network requests
// 3. Interacting with databases

// Example 1 ⭐️⭐️⭐️⭐️⭐️

hello(goodbye);

function hello(callback) {
  console.log("Hello");
  callback();
}

function wait() {
  console.log("Wait!");
}

function leave() {
  console.log("Leave!");
}

function goodbye() {
  console.log("Goodbye");
}

// Example 2 ⭐️⭐️⭐️⭐️⭐️

function sum(callback, x, y) {
  let result = x + y;
  callback(result);
}

function displayConsole(result) {
  console.log("The result is: " + result);
}

sum(displayPage, 3, 5);

// display to DOM
function displayPage(result) {
  document.getElementById("myH1").textContent = result;
}
