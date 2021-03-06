'use strict';

// // brings in the assert module for unit testing
// const assert = require('assert');
// // brings in the readline module to access the command line
// const readline = require('readline');
// // use the readline module to print out to the command line
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });


const pigLatin = (word) => {
  word = document.getElementById("theWord").value;

  //makes sure any inputs are lowercase and trimmed of extra whitespace
  word = word.toLowerCase().trim();
  //searches a string for 'aeiou' and returns the matches
  //then gives the index if the first vowel
  let firstVowel = word.match(/[aeiou]/);
  let firstPosition = word.indexOf(firstVowel);
  //if the position of the vowel is
  //greater than the index 0 then it returns the extracted part of
  //the word after the index of the first vowel it comes across,
  //then concats the letters from index 0 to the position of
  //that first vowel and finally concats 'ay'
  const translation = () => {
    if (firstPosition > 0) {
      return word.slice(firstPosition) + word.slice(0, firstPosition) + "ay";
    } else if (firstVowel == null) {
      return word + "ay";
    } else if (firstVowel !== null) {
      return word + "yay";
    }
  };
  document.getElementById("wordOutput").innerHTML = translation();
};

// // the first function called in the program to get an input from the user
// // to run the function use the command: node main.js
// // to close it ctrl + C
// const getPrompt = () => {
//   rl.question('word ', (answer) => {
//     console.log( pigLatin(answer) );
//     getPrompt();
//   });
// }

// // Unit Tests
// // You use them run the command: npm test main.js
// // to close them ctrl + C
// if (typeof describe === 'function') {

//   describe('#pigLatin()', () => {
//     it('should translate a simple word', () => {
//       assert.equal(pigLatin('car'), 'arcay');
//       assert.equal(pigLatin('dog'), 'ogday');
//     });
//     it('should translate a complex word', () => {
//       assert.equal(pigLatin('create'), 'eatecray');
//       assert.equal(pigLatin('valley'), 'alleyvay');
//     });
//     it('should attach "yay" if word begins with vowel', () => {
//       assert.equal(pigLatin('egg'), 'eggyay');
//       assert.equal(pigLatin('emission'), 'emissionyay');
//     });
//     it('should lowercase and trim word before translation', () => {
//       assert.equal(pigLatin('HeLlO '), 'ellohay');
//       assert.equal(pigLatin(' RoCkEt'), 'ocketray');
//     });
//   });
// } else {

//   getPrompt();

// }






