// 1.odd numbers in an Array
const findOdd = (numArr) => {
  const oddNumbers = [];
  const evenNumbers = [];
  for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] % 2 === 1) {
      oddNumbers.push(numArr[i]);
    } else {
      evenNumbers.push(numArr[i]);
    }
  }
  return oddNumbers;
};
console.log(findOdd([1, 2, 3, 4, 5, 6, 7, 8]));

// 2.convert all the strings to title caps in a string array

const capitalize = (sentence) => {
  let str = sentence.split(" ");
  for (let i = 0; i < str.length; i++) {
    str[i] = str[i][0].toUpperCase() + str[i].substring(1);
  }
  return str.join(" ");
};
console.log(capitalize("paavai engineering college"));
console.log(capitalize("all the best"));

// 3.sum of all numbers in an array

const num = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
};
console.log(num([1, 2, 3, 4, 5, 6]));

// 4.return all the prime numbers in an Array

const isPrime = (num) => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      console.log("is not a prime number");
    }
  }
  return isPrime;
};
console.log(isPrime(17));

// 5.return all the palindroms in an array

const palindrome = (input) => {
  if (input === input.split("").reverse().join("")) {
    console.log("palindrome");
  } else {
    console.log("not a palindrome");
  }
  return palindrome;
};
console.log(palindrome("madam"));
console.log(palindrome("king"));
