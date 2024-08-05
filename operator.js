// String Manipulation Functions
// Reverse a String
// JavaScript
function reverseString(str) {
    return str.split("").reverse().join("");
  }
  
  console.log(reverseString("Hello World")); // Output: "dlroW olleH"
  // Count Characters
  // JavaScript
  function countCharacters(str) {
    return str.length;
  }
  
  // console.log(countCharacters("Hello World")); // Output: 11
  // Capitalize Words
  // JavaScript
  function capitalizeWords(str) {
      // ["hello", "world"]
    return str.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
  }
  
  console.log(capitalizeWords("hello world")); // Output: "Hello World"
  // Array Functions
  // Find Maximum and Minimum
  // JavaScript
  function findMax(arr) {
    return Math.max(...arr);
  }
  
  function findMin(arr) {
    return Math.min(...arr);
  }
  
  // console.log(findMax([1, 2, 3, 4, 5])); // Output: 5
  // console.log(findMin([1, 2, 3, 4, 5])); // Output: 1
  // Sum of Array
  // JavaScript
  function sumArray(arr) {
    return arr.reduce((a, b) => a + b, 0);
  }
  
  // console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15
  // Filter Array
  // JavaScript
  function filterArray(arr, condition) {
    return arr.filter(condition);
  }
  
  // console.log(filterArray([1, 2, 3, 4, 5], x => x > 3)); // Output: [4, 5]
  // Mathematical Functions
  // Factorial
  // JavaScript
  function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
  }
  
  // console.log(factorial(5)); // Output: 120
  // Prime Number Check
  // JavaScript
  function isPrime(n) {
    if (n <= 1) return false;
    for (let i = 2; i * i <= n; i++) {
      if (n % i === 0) return false;
    }
    return true;
  }
  
  // console.log(isPrime(5)); // Output: true
  // console.log(isPrime(4)); // Output: false
  // Fibonacci Sequence
  // JavaScript
  function fibonacci(n) {
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
  }
  
  // console.log(fibonacci(10)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]