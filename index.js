function isPalindrome(word) {
  let splitString = word.split("");
  let reversedString = splitString.reverse();
  let joinedString = reversedString.join("");
   
  if (word === joinedString){
    return true
  }else {
    return false
  }
}

/* 
  function (string){
    declare a variable that takes a string that is split using the split keyword
    turn the split string into a reversed one by using the .reverse() keyword
    join the split parts of a string using the .join() method
  }
*/

console.log(isPalindrome('hello'))
console.log(isPalindrome('racecar'))
console.log(isPalindrome('mom'))
console.log(isPalindrome('lo'))


/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
