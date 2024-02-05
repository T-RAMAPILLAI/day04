//qus 01(ananymous)-Find odd

var odd=function(arr){
    var temp=[]
    for(var i=0;i<arr.length;i++){
        if(arr[i]%2!==0){
            temp.push(arr[i])
        }
    }
    return temp
}
console.log(odd([1,2,3,4,5,6]))


//qus 02(ananymous)-Title in caps

var cap=function(arr){
    for (var i=0;i<arr.length;i++){
        var cap1=arr[i].charAt(0).toUpperCase()+arr[i].substr(1).toLowerCase()
    }
    return cap1
}console.log(cap["abi","ram","hari"])



//qus 03(ananymous)-sum of all

var sum=function(arr){
    var sum1=0
    for(var i=0;i<arr.length;i++){
        sum1=sum1+arr[i]
    }
    return sum1
}
console.log(sum([1,2,3,4,5,6]))



//qus 04(ananymous)-palindrome

var palindrome=function(words){
    var temp=[]
    for(var i=0;i<words.length;i++){
      var b=words[i].split("").reverse().join("")
     if(words[i]===b){
       temp.push(b)
     }
    }
    return temp
  }
  console.log(palindrome(["rar","raj","ramar"]))

  
  //qus05(ananymous)-prime Number
  const isPrime = function(num) {
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
  
  // Example usage:
  const numberToCheck = 29;
  if (isPrime(numberToCheck)) {
    console.log(`${numberToCheck} is a prime number.`);
  } else {
    console.log(`${numberToCheck} is not a prime number.`);
  }

  //qus 06-duplicates array

  let myArray = [1, 2, 3, 4, 2, 5, 6, 1, 7, 8, 9, 7];

// Using anonymous function with filter to remove duplicates
let uniqueArray = myArray.filter(function(value, index, self) {
    return self.indexOf(value) === index;
});

console.log(uniqueArray);

//qus07-rotate k times

let myArray = [1, 2, 3, 4, 5];
let k = 2;

// Using IIFE to rotate array k times
let rotatedArray = (function(arr, rotations) {
    return arr.slice(rotations).concat(arr.slice(0, rotations));
})(myArray, k);

console.log(rotatedArray);

  
  