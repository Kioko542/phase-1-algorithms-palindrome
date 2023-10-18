function isPalindrome(word) {
  // Remove any non-letter characters and convert to lowercase
  const cleanWord = word.replace(/[^a-z]/g, '').toLowerCase();
  
  // Reverse the cleaned word and compare it to the original
  return cleanWord === cleanWord.split('').reverse().join('');
}

/* 
  Add your pseudocode here
 1. Write an isPalindrome function that takes a string 'word' as an input.
  2. Within the function, use a regular expression to eliminate any non-letter characters and transform the string to lowercase.
  3. Reverse the cleaned word by separating it into an array, reversing it, and then reassembling it.
  4. Contrast the reversed and original cleaned words.
  5. If they are identical, return true (it is a palindrome); otherwise, return false (it is not a palindrome).
*/

/*
  Add a written explanation of your solution here
  The function removes any non-letter characters from the supplied string and converts it to lowercase.
  It then determines whether the cleaned string is equivalent to its inverse. If they are equal, the function returns true (a palindrome), else it returns false (a non-palindrome).
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // Add your own custom tests here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
