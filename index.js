//Problem 01: Write a function to Reverse a String
function reverseString(string) {
    // Split the string into an array, reverse the array, then join it back
    return string.split("").reverse().join("");
}

console.log(reverseString("hello")); // "olleh"



// Problem 02: Write a function to Count Vowels in a String
function countVowels(string) {
    string = string.toLowerCase();
    const vowels = 'aeiouAEIOU';
    let count = 0;      
    for (let letter of string) {
        if (vowels.includes(letter)) {
            count++;
        }   
    }
    return count;

}
console.log(countVowels("programming")); //3



// Problem 03: Write a function to Check for Palindrome
function isPalindrome(string) {
    const reversedString = string.split("").reverse().join("");
    return string === reversedString;
}
console.log(isPalindrome("madam")); // true
console.log(isPalindrome("hello")); // false






// Problem 04: Write a function to Find the Maximum Number in an Array
function findMaxNumber(array) {
    let max = array[0]; 
    for (let num of array) {
        if (num > max) {
            max = num; 
        }   
    }
    return max;
}   
console.log(findMaxNumber([5, 1, 9, 3])); // 9


// Problem 05: Write a function to Remove Duplicates from an Array
function removeDuplicates(array) {
    const unique = [];
    for (let num of array) {
        if (!unique.includes(num)) {
            unique.push(num); // Add to unique array if not already present
        }   
    }
    return unique;
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4])); // [1, 2, 3, 4]

// Problem 06: Write a function to Sum of All Numbers in an Array
function sumArray(array) {
    let sum = 0;
    for (let num of array) {
        sum += num; // Add each number to sum
    }
    return sum;
}
console.log(sumArray([1, 2, 3, 4])); // 10

// Problem 07: Write a function to Find Even Numbers in an Array
function findEvenNumbers(array) {
    const evens = [];
    for (let num of array) {
        if (num % 2 === 0) {
            evens.push(num); // Add even number to evens array
        }
    }
    return evens;
}
console.log(findEvenNumbers([1, 2, 3, 4, 5, 6])); // [2, 4, 6]

// Problem 08: Write a function to Capitalize First Letter of Each Word
function capitalizeFirstLetters(string) {
    const words = string.split(" ");    
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return words.join(" ");
}
console.log(capitalizeFirstLetters("hello world")); // "Hello World"

// Problem 09: Write a function to Find the Factorial of a Number
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1; // Base case: 0! = 1 and 1! = 1
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i; // Multiply result by each number up to n
    }   
    return result;
}
console.log(factorial(5)); // 120 (5*4*3*2*1)


// Problem 10: Write a function to PingPong Challenge
function pingPong() {
  const results = [];
  for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      results.push('PingPong');
    } 
    else if (i % 3 === 0) {
      results.push('Ping');
    } 
    else if (i % 5 === 0) {
      results.push('Pong');
    } 
    else {
      results.push(i);
    }
  }
  
  return results;
}

console.log('Problem 10: PingPong Challenge');
console.log(pingPong().join(', '));









