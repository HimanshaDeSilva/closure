//A closure is when an inner function remembers and has access to variables from its outer function,  
// even after the outer function has finished executing.
// Closures are useful for data privacy, maintaining state, and handling asynchronous operations.

function outer() {
  let count = 0; // A variable inside the outer function

  return function inner() {
    count++; // Inner function uses the outer variable
    console.log(count);
  };
}

const counter = outer(); // counter now holds the inner function

counter(); // Output: 1
counter(); // Output: 2
counter(); // Output: 3

// 1. The outer function runs and creates a variable count.
// 2. It returns the inner function, which still has access to count.
// 3. Even though outer() has finished executing, the counter function remembers count and updates it every time it is called.
//-----------------------------------------------------------------------------------------------------------------------------

function greet(name) {
    return function() {
        console.log("Hello, " + name);
    };
}

const sayHello = greet("Himansha");
sayHello(); // Output: Hello, Himansha

// The inner function remembers name, even after greet() has finished executing.