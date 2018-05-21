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
function calculateSum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

function map(){

}
//map([1,2,3],3)  => [3,6,9]
//map([2,3,4],-2) => [-4,-6,-8]

function filter() {

}

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

function allSimpleCombinations() {

}
//allSimpleCombinations('cat')  => ['c','ca','cat','a','at','t']
//allSimpleCombinations('talk') => ['t','ta','tal','talk','a','al','alk','l','lk','k'];

function alphabeticalOrder(string) {
  return string.split('').sort().join('');
}
//alphabeticalOrder('talk') => 'aklt'
//alphabeticalOrder('sailormoon')  => 'ailmnooors'

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

function returnCoinBreakdown() {
  
}
//returnCoinBreakdown(46) => {25:1,10:1,5:2,1:1}
//returnCoinBreakdown(19) => {25:0,10:1,5:1,1:4}

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
function forEach(){

}

module.exports = {
  add: add,
  subtract: subtract,
  calculateSum: calculateSum,
  forEach: forEach,
  filter: filter,
  reverseLettersInPlace: reverseLettersInPlace,
  allSimpleCombinations: allSimpleCombinations,
  alphabeticalOrder: alphabeticalOrder,
  returnLongestWord: returnLongestWord,
  isPrime: isPrime,
  returnCoinBreakdown: returnCoinBreakdown,
  countVowels: countVowels
}
