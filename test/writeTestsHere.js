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
  });


  //reverseLettersInPlace
  describe('reverseLettersInPlace tests',()=>{
    const subReversed = allFunctions.reverseLettersInPlace;

    it('should output a string',()=>{
      assert.isString(subReversed('test'));
      assert.isString(subReversed('test1 test2'));
    });
  });

  //allSimpleCombinations

  //alphabeticalOrder
  describe('alphabeticalOrder tests',()=>{
    const subAlphabetical = allFunctions.alphabeticalOrder;

    it('should output a string',()=>{
      assert.isString(subAlphabetical('test'));
      assert.isString(subAlphabetical('test1 test2'));
    });
  });

  //returnLongestWord
  describe('returnLongestWord tests',()=>{
    const subreturnLongestWord = allFunctions.returnLongestWord;

    it('should output a string',()=>{
      assert.isString(subreturnLongestWord('test'));
      assert.isString(subreturnLongestWord('test1 test2'));
    });
  });

  //isPrime
  describe('isPrime tests',()=>{
    const subisPrime = allFunctions.isPrime;

    it('should output a boolean value',()=>{
      assert.isBoolean(subisPrime('true'));
      assert.isBoolean(subisPrime('false'));
    });
  });

  //returnCoinBreakdown

  //countVowels
  describe('countVowels tests',()=>{
    const subCountVowels = allFunctions.countVowels;

    it('should output a number value',()=>{
      assert.isNumber(subCountVowels(1));
      assert.isNumber(subCountVowels(15));
    });
  });
})
