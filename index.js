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
//reverseLettersInPlace("Hi justin") => "iH nitsuj"
//reverseLettersInPlace(" A simple challenge! ") => => " A elpmis !egnellahc "

/**
 * @name: simpleCombinations
 * @description returns an array with simple string value combinations
 * @param1: string
 * @return: array of strings
 **/
function allSimpleCombinations() {

}
//allSimpleCombinations('cat')  => ['c','ca','cat','a','at','t']
//allSimpleCombinations('talk') => ['t','ta','tal','talk','a','al','alk','l','lk','k'];

/**
 * @name: alphabeticalOrder
 * @description returns a new string with letters in alphabetical order
 * @param1: string
 * @return: ordered string
 **/
function alphabeticalOrder(string) {
  return string.split('').sort().join('');
}
//alphabeticalOrder('talk') => 'aklt'
//alphabeticalOrder('sailormoon')  => 'ailmnooors'

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
//returnLongestWord('short sentence alphabetical') => 'alphabetical'
//returnLongestWord('cute pretty beautiful pulchritudinous') => 'pulchritudinous'

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
//isPrime(7)  => true
//isPrime(12) => false

/**
 * @name: coinBreakdown
 * @description returns a new object with the total number of coins needed to reach number
 * @param1: number
 * @return: object
 **/
function returnCoinBreakdown() {

}
//returnCoinBreakdown(46) => {25:1,10:1,5:2,1:1}
//returnCoinBreakdown(19) => {25:0,10:1,5:1,1:4}

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
//countVowels('apple')  => 2
//countVowels('tomato') => 3


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
