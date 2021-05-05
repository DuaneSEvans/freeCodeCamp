/*
Palindrome Checker
Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, 
ignoring punctuation, case, and spacing.

Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) 
and turn everything into the same case (lower or upper case) in order to check for palindromes.

We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR among others.

We'll also pass strings with special symbols, such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2.
*/

function palindrome(str) {
  // remove all non-alphanumberic characters --> DONE
  // put into an array --> DONE
  // create a copy of the array in reverse --> DONE
  // compare the arrays and if their contents are not equal... NOT A PALINDROME --> DONE
  

  let alphanumeric = "abcdefghijklmnopqrstuvwxyz0123456789".split("")

  const arr = str
              .toLowerCase()
              .split("")
              .filter(ch => alphanumeric.includes(ch));
  
  const revArr = arr.map(ch => ch).reverse();

  return arr.every((ch, i) => ch === revArr[i]);
  }
  
  console.log(palindrome("A man, a plan, a canal. Panama"));
