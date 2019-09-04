var words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot'
];
//Write a function findLongestWord that takes an array of words and returns the longest one.
//If there are 2 with the same length, it should return the first occurrence.

var findLongestWord = "";
words.forEach(function (longest) {
  if (findLongestWord.length < longest.length)
    findLongestWord = longest;
});
console.log(findLongestWord);


var numbers1 = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
// Create a sumArray function that takes an array of numbers1 as a parameter, and calculate the sum of all its numbers
// Use reduce method of array
// Use the above sum and calculate the average.

var sumArray = numbers1.reduce((acc, current) => {
  return acc + current;
}, 0)

sumAverage = sum / numbers1.length;



var numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];
//Write a function averageNumbers that receives an array of numbers2 and calculate the average of the numbers

var averageNumbers = numbers2.reduce((acc, current) => {
  return acc + current / numbers2.length;
}, 0)

// function averageNumbers2(numbers2) {
//   var sum = numbers2.reduce(function(a, b) {
//     return a + b;
//   }, 0);
//   var avgg = sum / numbers2.length;
//   return avgg;
// }

// averageNumbers2(numbers2);


var words2 = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace'
];
//Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.

var averageWordLength = words2.reduce((acc, current) => {
  return acc + current.length / words2.length;
}, 0)

