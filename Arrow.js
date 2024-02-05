//qus01-find odd
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Using arrow function and filter to print odd numbers
const oddNumbers = numbers.filter(number => number % 2 !== 0);

// Printing the result
console.log("Odd Numbers:", oddNumbers);


//qus02-title caps

const stringArray = ["apple", "banana", "cherry", "date"];

// Using arrow function and map to convert to title case
const titleCaseArray = stringArray.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());

// Printing the result
console.log("Title Case Array:", titleCaseArray);

//qus03-sum of number in array
const numbers = [1, 2, 3, 4, 5];

// Using arrow function and reduce to find the sum
const sum = numbers.reduce((accumulator, currentNumber) => accumulator + currentNumber, 0);

// Printing the result
console.log("Sum of Numbers:", sum);

//qus04-prime number

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Using arrow function and filter to find prime numbers
const isPrime = number => {
  if (number < 2) return false;
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const primeNumbers = numbers.filter(isPrime);

// Printing the result
console.log("Prime Numbers:", primeNumbers);

//qus05-palindrome

const strings = ["level", "hello", "radar", "world", "madam"];

// Using arrow function and filter to find palindromes
const isPalindrome = str => {
  const reversedStr = str.split("").reverse().join("");
  return str === reversedStr;
};

const palindromeStrings = strings.filter(isPalindrome);

// Printing the result
console.log("Palindromes:", palindromeStrings);
