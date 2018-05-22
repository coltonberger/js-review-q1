/**
 * @name: add
 * @description returns the result of both parameters
 * @param1: num1
 * @param2: num2
 * @return: number
 **/
function add(num1, num2) {
  return num1 + num2;
}

/**
 * @name: subtract
 * @description returns the difference between both parameters
 * @param1: num1
 * @param2: num2
 * @return: number
 **/
function subtract(num1, num2) {
  return num1 - num2;
}

//ANNOTATE HERE

/**
 * @name: sum
 * @description returns the sum of parameter
 * @param1: array
 * @return: number
 **/
function calculateSum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

/**
 * @name: map
 * @description returns a new array with a callback applied to each element in the array
 * @param1: array
 * @param2: function
 * @return: array
 **/
function map(array, callback){
  let mapped = [];
  array.forEach((element) =>{
    mapped.push(callback(element));
  });
  return mapped;
}

/**
 * @name: filter
 * @description returns a new array with truthy values applied to each element in the array
 * @param1: array
 * @param2: function
 * @return: array
 **/
function filter(array, callback) {
  let filtered = [];
  array.forEach((element) => {
    if (callback(element)) {
      filtered.push(element);
    }
  });
  return filtered;
}

/**
 * @name: reverse
 * @description returns a new string with every element reversed in place
 * @param1: string
 * @return: string
 **/
function reverseLettersInPlace(sentence) {
  let reversed = '';
  for (let i = sentence.length - 1; i >= 0; i--) {
    let word = sentence[i];
    reversed += word;
  }
  return reversed.split(' ').reverse().join(' ');
}

/**
 * @name: simpleCombinations
 * @description returns an array with simple string value combinations
 * @param1: string
 * @return: array of strings
 **/
 function allSimpleCombinations(str) {
   let output = [];
   for (let i = 0; i < str.length; i++) {
     let word = str[i];
     for (let x = i; x < str.length; x++) {
         output.push(word);
         word += str[x+1];
     }
   }
   return output;
 }

/**
 * @name: alphabeticalOrder
 * @description returns a new string with letters in alphabetical order
 * @param1: string
 * @return: ordered string
 **/
function alphabeticalOrder(string) {
  return string.toLowerCase().split('').sort().join('');
}

/**
 * @name: longestWord
 * @description returns a new string with longest letter count
 * @param1: string
 * @return: longest string
 **/
function returnLongestWord(sentence) {
  let words = sentence.split(' ');
  let longest = '';
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if (word.length > longest.length) {
      longest = word;
    }
  }
  return longest;
}

/**
 * @name: isPrime
 * @description returns a boolean value if the number is prime or not
 * @param1: number
 * @return: boolean value
 **/
function isPrime(num) {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

/**
 * @name: coinBreakdown
 * @description returns a new object with the total number of coins needed to reach number
 * @param1: number
 * @return: object
 **/
 function returnCoinBreakdown(num) {
   let spareChange = 0;
   let output = {};
   output[25] = parseInt(num / 25);
     spareChange = num % 25;
   output[10] = parseInt(spareChange / 10);
     spareChange = spareChange % 10;
   output[5] = parseInt(spareChange / 5);
     spareChange = spareChange % 5;
   output[1] = spareChange;
     return output;
 }

/**
 * @name: countVowels
 * @description returns a number of total number of vowels
 * @param1: string
 * @return: number
 **/
function countVowels(word) {
  let vowels = ['a','e','i','o','u'];
  let count = 0;

  for (let i = 0; i < word.length; i++){
    let letter = word[i];
    if(vowels.indexOf(letter) > -1){
      count++;
    }
  }

  return count;
}

//BONUS
function forEach(collection, callback) {
  if (typeof collection === 'object' && collection !== null) {
    for (let key in collection) {
      callback(collection[key]);
    }
  } else {
    for (let i = 0; i < collection.length; i++) {
      callback(collection[i]);
    }
  }
}

module.exports = {
  add: add,
  subtract: subtract,
  calculateSum: calculateSum,
  map: map,
  filter: filter,
  reverseLettersInPlace: reverseLettersInPlace,
  allSimpleCombinations: allSimpleCombinations,
  alphabeticalOrder: alphabeticalOrder,
  returnLongestWord: returnLongestWord,
  isPrime: isPrime,
  returnCoinBreakdown: returnCoinBreakdown,
  countVowels: countVowels,
  forEach: forEach
}
