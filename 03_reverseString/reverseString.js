const reverseString = function (word) {
  let reverseWord = "";
  for (i = word.length - 1; i >= 0; i--) {
    reverseWord += word[i];
  }
  return reverseWord;
};

// Do not edit below this line
module.exports = reverseString;
