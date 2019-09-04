// Arrays to work on
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6];
var strings = ["this", "is", "a", "collection", "of", "words"];

// Use the above two arrays and practice array methods

// Find largest number in numbers

var maxNumb = Math.max(...numbers);
console.log(maxNumb);

// Find longest string in strings


// Find all the even numbers

var evenNumbers = numbers.filter(n => n % 2 == 0);
console.log(evenNumbers);

// Find all the odd numbers

var evenNumbers = numbers.filter(n => n % 2 !== 0);
console.log(evenNumbers);

// Find all the words that contain 'is' use string method 'includes'

strings.includes("is");

var includeIs = strings.filter(n => n.includes("is"));
console.log(includeIs);

// Find all the words that contain 'is' use string method 'indexOf'

var indexOfIs = strings.filter(n => n.indexOf("is") != -1);
console.log(indexOfIs);

// Check if all the numbers in numbers array are divisible by three use array method (every)

function isDivisibleByThree(n) {
  return n % 3 == 0;
}

console.log(numbers.every(isDivisibleByThree)); //False

//  Sort Array from smallest to largest

numbers.sort();
console.log(numbers);

// Remove the last word in strings

strings.pop();

// Add a new word in the array

strings.push("rings");

// Remove the first word in the array

var firstWord = strings.shift();

// Place a new word at the start of the array use (upshift) //typo - unshift

var addFirstWord = strings.unshift("that");

// Make a subset of numbers array [18,9,7,11]

var numbSubset = numbers.slice(3, 7);

console.log(numbers.slice(3, 7));  //new session

// Make a subset of strings array ['a','collection']

var stringSubset = strings.slice(2, 4);

console.log(strings.slice(2, 4));

// Replace 12 & 18 with 1221 and 1881

numbers.splice(1, 1, "1221")
console.log(numbers.splice(1, 1, "1221"));

numbers.splice(3, 1, "1881");
console.log(numbers.splice(3, 1, "1881"));


// Replace words with string in strings array

// Customers Array
var customers = [
  { firstname: "Joe", lastname: "Blogs" },
  { firstname: "John", lastname: "Smith" },
  { firstname: "Dave", lastname: "Jones" },
  { firstname: "Jack", lastname: "White" }
];
// Find all customers whose firstname starts with 'J'

var startJ = customers.firstname.filter();
console.log(startJ);

// Create new array with firstname and lastname

var fullName = [];
customers.forEach(function(customers) {
  fullName.push(`${customers.firstname} ${customers.lastname}`);
});

// Sort the array created above alphabetically

nameArray.sort();