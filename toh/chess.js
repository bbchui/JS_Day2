const LoseYourself = require('./loseyourself.js');
const readline = require('readline');
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let g = new LoseYourself();
g.run(reader, completion);

function completion() {
  reader.question("Play again? y or n: ", restartGame => {
    if (restartGame === "y") {
      g = new LoseYourself();
      g.run(reader, completion);
    } else {
      reader.close();
    }
  });
}
