//qus 01(IIFE)-find odd
(function odd(arr){
    var temp=[]
    for(var i=0;i<arr.length;i++){
        if(arr[i]%2!==0){
            temp.push(arr[i])
        }
    }
    return temp

}) ([1,2,3,4,5,6])

//qus 02(IIFE)-string caps
(function cap(arr){
    for (var i=0;i<arr.length;i++){
        var cap1=arr[i].charAt(0).toUpperCase()+arr[i].substr(1).toLowerCase()
    }
    return cap1
}) (["abi","ram","hari"])

//qus 03(IIFE)-sum of the array

(function sum(arr{
    var sum1=0
    for(var i=0;i<arr.length;i++){
        sum1=sum1+arr[i]
    }
    return sum1
}))(([1,2,3,4,5,6]))

//qus04(IIFE)-palindrome

(function(words) {
    var temp = [];
    for (var i = 0; i < words.length; i++) {
      var b = words[i].split("").reverse().join("");
      if (words[i] === b) {
        temp.push(words[i]);
      }
    }
    console.log(temp);
  })(["rar", "raj", "ramar"]);

//qus 05(IIFE)-prime

const isPrime = (function() {
    return function(num) {
      if (num <= 1) {
        return false;
      }
  
      if (num <= 3) {
        return true;
      }
  
      if (num % 2 === 0 || num % 3 === 0) {
        return false;
      }
  
      for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) {
          return false;
        }
      }
  
      return true;
    };
  })();
  
  // Example usage:
  const numberToCheck = 29;
  if (isPrime(numberToCheck)) {
    console.log(`${numberToCheck} is a prime number.`);
  } else {
    console.log(`${numberToCheck} is not a prime number.`);
  }


 // qus 06-duplicates array

 let myArray = [1, 2, 3, 4, 2, 5, 6, 1, 7, 8, 9, 7];

// Using IIFE to remove duplicates
let uniqueArray = (function(arr) {
    return arr.filter(function(value, index, self) {
        return self.indexOf(value) === index;
    });
})(myArray);

console.log(uniqueArray);

//qus 07-Rotate k times

let myArray = [1, 2, 3, 4, 5];
let k = 2;

// IIFE for array rotation
let rotatedArray = (function(arr, rotations) {
    return (function() {
        return arr.slice(rotations).concat(arr.slice(0, rotations));
    })();
})(myArray, k);

console.log(rotatedArray);

