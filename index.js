function isPalindrome(word) {
  // Write your algorithm here
  word= word.tolowerCase()

  for(i=0; i< Math.floor(word.length/2); i++){
    if( word[i] !== word[word.length -1 -i]){
      return false
    }
  }
  return true;
}



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
