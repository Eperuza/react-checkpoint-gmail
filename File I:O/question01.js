const fs = require('fs');

function myFunction(filename) {
  // 1. (DONE) - Read that file (asynchronous, aka "async")
  // 2. (DONE) - Get the individual lines in a collection
  // 3. (DONE) - Get the individual words inside of each line
  // 4. (DONE) - Capitalize each of the words
  // 5. (DONE) - Join together each word back into a single string (line)
  // 6. (DONE) - Join together each line, separated by a new line
  // 7. (DONE) - Write the changes we've made into the file

  // `readFileSync` this is "blocking"...  
  const fileContents = fs.readFileSync(filename, 'utf8');

  // get each line...split puts each line in an array index...
  const lines = fileContents.split('\n');

  // split the words on each line into arrays...
  const wordsOnLine = lines.map(function (line) {
    return line.split(' ');
  });
  // [['hello', 'world'], ['this', 'is', 'line', 'two']]

  const capitalizedWordsOnLine = wordsOnLine.map(function (line) {
    return line.map(function (word) {
      //grab first letter; make uppercase and append the rest of the word with concatenation...
      return word[0].toUpperCase() + word.substring(1);
    });
  });

  const joinedWordsOnLine = capitalizedWordsOnLine.map(function (wordArray) {
    return wordArray.join(' ');
  });

  // ['Hello World', 'This Is Line Two']
  const capitalizedOutput = joinedWordsOnLine.join('\n');

  fs.writeFileSync(filename, capitalizedOutput);
}

myFunction('names.txt');
