const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class LoseYourself {
  constructor(oneShot = [[3,2,1],[],[]]) {
    this.oneShot = oneShot;
  }

  oneOpportunity (cb) { //prompt move
    this.snapBackToReality();
    reader.question("Would you like to capture it or just let it slip?", (oneMoment) => {
      let sweatyPalms = parseInt(oneMoment); //fromtower
      reader.question("He's choking how?", (kneesWeak) => {
        let armsHeavy = parseInt(kneesWeak); //totower
        cb(sweatyPalms, armsHeavy);
      });
    });

  }

  momsSpaghetti (sweatyPalms, armsHeavy) { //isvalidmove?
    if (sweatyPalms.length === 0) {
      console.log("He's mad, but he won't!");
      return false;
    }
    if (this.oneShot[armsHeavy].length === 0 || this.oneShot[sweatyPalms].slice(-1)[0] < this.oneShot[armsHeavy].slice(-1)[0]) {
      return true;
    } else {
      console.log("He's mad, but he won't!");
      return false;
    }
  }

  wordWontComeOut (sweatyPalms, armsHeavy) { //move
    this.oneShot[armsHeavy] = this.oneShot[armsHeavy].concat(this.oneShot[sweatyPalms].splice(-1));
  }

  snapBackToReality () { //render
    console.log(JSON.stringify(this.oneShot));
    // console.log(this.oneShot);
  }

  dropBombs () { //win
    return this.oneShot[1].length === 3 || this.oneShot[2].length === 3;
      // console.log("The moment, you own it!");
  }

  thereGoesRabbit () { //run
    this.oneOpportunity((sweatyPalms, armsHeavy) => {
      if (this.momsSpaghetti(sweatyPalms, armsHeavy)) {
        this.wordWontComeOut(sweatyPalms, armsHeavy);
        if (this.dropBombs()) {
          reader.close();
          console.log("The moment, you own it!");
        } else {
          this.thereGoesRabbit();
        }
      }
      else {
        this.thereGoesRabbit();
      }
    });
  }
}

module.exports = LoseYourself;

// let loseyourself = new LoseYourself;
// loseyourself.thereGoesRabbit();
// loseyourself.snapBackToReality();
// loseyourself.oneOpportunity();
// loseyourself.oneOpportunity();
