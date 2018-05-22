const assert = require('chai').assert;
const allFunctions = require('../index');

describe('all tests for your functions',()=>{

  //ADD
  describe('add tests',()=>{
    const addFunc = allFunctions.add;
    it('should add positive numbers',()=>{
      assert.equal(addFunc(1,3),4);
      assert.equal(addFunc(8,2),10);
    });
    it('should add negative numbers',()=>{
      assert.equal(addFunc(-1,-3),-4);
      assert.equal(addFunc(-10,-3),-13);
    });
    it('should output number',()=>{
      assert.isNumber(addFunc(5,5));
    });
  })

  //SUBTRACT
  describe('subtract tests',()=>{
    const subFunc = allFunctions.subtract;

    it('should subtract positive numbers',()=>{
      assert.equal(subFunc(1,3),-2);
      assert.equal(subFunc(100,87),13);
    })
    it('should subtract negative numbers',()=>{
      assert.equal(subFunc(-1,-3),2)
      assert.equal(subFunc(-39,-11),-28)
    })
    it('should output number',()=>{
      assert.isNumber(subFunc(8,1));
    });
  })

  //calculateSum
  describe('calculateSum tests',()=>{
    const subSum = allFunctions.calculateSum;

    it('should sum positive array',()=>{
      assert.equal(subSum([1,2,3]),6);
      assert.equal(subSum([4,5,6]),15);
    })
    it('should sum negative array',()=>{
      assert.equal(subSum([-1,-2,-3]),-6);
      assert.equal(subSum([-4,-5,-6]),-15);
    })
    it('should output number',()=>{
      assert.isNumber(subSum([1,2,3]));
    });
  });

  // map
  describe('map tests', () => {
    const subMap = allFunctions.map;

    it('should return a new array with every element tripled', () => {
      const triple = function(num) { return num * 3 };
      assert.deepEqual(subMap([1, 2, 3], triple), [3, 6, 9]);
    });
  });

  // filter
  describe('filter tests', () => {
    const subFunc = allFunctions.filter;

    it('should return only even numbers', () => {
      const isEven = function(num) { return num % 2 === 0; };
      assert.deepEqual(subFunc([0, 1, 2, 3], isEven), [0, 2]);
    });
    it('should return only odd numbers', () => {
      const isOdd = function(num) { return num % 2 !== 0; };
      assert.deepEqual(subFunc([0, 1, 2, 3], isOdd), [1, 3]);
    });
  });


  //reverseLettersInPlace
  describe('reverseLettersInPlace tests',()=>{
    const subReversed = allFunctions.reverseLettersInPlace;

    it('should output a string',()=>{
      assert.isString(subReversed('Hi justin'));
    });
    it('should output iH nitsuj',()=>{
      assert.deepEqual(subReversed('Hi justin'), 'iH nitsuj');
    });
    it('should output A elpmis !egnellahc',()=>{
      assert.deepEqual(subReversed('A simple challenge!'), 'A elpmis !egnellahc');
    });
  });

  //allSimpleCombinations
  describe('allSimpleCombinations tests',()=>{
    const subAllSimpleCombinations = allFunctions.allSimpleCombinations;

    it('should output an array',()=>{
      assert.isArray(subAllSimpleCombinations('cat'), ['c','ca','cat','a','at','t']);
    });
    it('should output [c,ca,cat,a,at,t]',()=>{
      assert.deepEqual(subAllSimpleCombinations('cat'), ['c','ca','cat','a','at','t']);
    });
    it('should output [t,ta,tal,talk,a,al,alk,l,lk,k]',()=>{
      assert.deepEqual(subAllSimpleCombinations('talk'), ['t','ta','tal','talk','a','al','alk','l','lk','k']);
    });
  });

  //alphabeticalOrder
  describe('alphabeticalOrder tests',()=>{
    const subAlphabetical = allFunctions.alphabeticalOrder;

    it('should output a String',()=>{
      assert.isString(subAlphabetical('sailormoon'), 'ailmnooors');
    });
    it('should output a aklt',()=>{
      assert.deepEqual(subAlphabetical('talk'), 'aklt');
    });
    it('should output ailmnooors',()=>{
      assert.deepEqual(subAlphabetical('sailormoon'), 'ailmnooors');
    });
  });

  //alphabeticalOrder('talk') => 'aklt'
  //alphabeticalOrder('sailormoon')  => 'ailmnooors'

  //returnLongestWord
  describe('returnLongestWord tests',()=>{
    const subreturnLongestWord = allFunctions.returnLongestWord;

    it('should output a string',()=>{
      assert.isString(subreturnLongestWord('short sentence alphabetical'), 'alphabetical');
    });
    it('should output alphabetical',()=>{
      assert.deepEqual(subreturnLongestWord('short sentence alphabetical'), 'alphabetical');
    });
    it('should output pulchritudinous',()=>{
      assert.deepEqual(subreturnLongestWord('cute pretty beautiful pulchritudinous'), 'pulchritudinous');
    });
  });

  //isPrime
  describe('isPrime tests',()=>{
    const subisPrime = allFunctions.isPrime;

    it('should output true',()=>{
      assert.deepEqual(subisPrime(7), true);
    });
    it('should output false',()=>{
      assert.deepEqual(subisPrime(12), false);
    });
  });

  //returnCoinBreakdown
  describe('returnCoinBreakdown tests',()=>{
    const subReturnCoinBreakdown = allFunctions.returnCoinBreakdown;

    it('should output an object',()=>{
      assert.isObject(subReturnCoinBreakdown(19), {25:0,10:1,5:1,1:4});
    });
    it('should output {25:1,10:2,5:0,1:1}',()=>{
      assert.deepEqual(subReturnCoinBreakdown(46), {25:1,10:2,5:0,1:1});
    });
    it('should output {25:0,10:1,5:1,1:4}',()=>{
      assert.deepEqual(subReturnCoinBreakdown(19), {25:0,10:1,5:1,1:4});
    });
  });

  //countVowels
  describe('countVowels tests',()=>{
    const subCountVowels = allFunctions.countVowels;

    it('should output a number value',()=>{
      assert.isNumber(subCountVowels('apple'), 2);
    });
    it('should output 2',()=>{
      assert.deepEqual(subCountVowels('apple'), 2);
    });
    it('should output 3',()=>{
      assert.deepEqual(subCountVowels('tomato'), 3);
    });
  });
})
