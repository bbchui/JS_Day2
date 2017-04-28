class Clock {
  constructor() {
    this.currentTime = new Date;

    setInterval(this._tick.bind(this), 1000);
  }

  printTime() {
    this.hours = this.currentTime.getHours();
    this.minutes = this.currentTime.getMinutes();
    this.seconds = this.currentTime.getSeconds();
    let hours = this.hours < 10 ? "0" + this.hours : this.hours;
    let minutes = this.minutes < 10 ? "0" + this.minutes : this.minutes;
    let seconds = this.seconds < 10 ? "0" + this.seconds : this.seconds;

    console.log(`${hours}:${minutes}:${seconds}`);
  }

  _tick() {
    this.printTime();
    this.currentTime = new Date;
  }
}

// const clock = new Clock();
// console.log(clock._tick());

const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// function addNumbers(sum = 0, numsLeft, completionCallback){
//   let total = sum;
//
//   if (numsLeft > 0) {
//     reader.question("What numba u wanna add dawg?", (res) => {
//       total += parseInt(res);
//       console.log(total);
//       addNumbers(total, numsLeft--, completionCallback);
//     });
//   } else {
//     reader.close();
//     return completionCallback(sum);
//   }
//
//
// }
//
// addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));


function absurdBubbleSort(arr, sortCompletionCallback) {
  function outerBubbleSortLoop(madeAnySwaps) {
    if (madeAnySwaps) {
      innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
    } else {
      sortCompletionCallback(arr);
    }
  }
  outerBubbleSortLoop(true);
}

const askIfGreaterThan = (el1, el2, callback) => {
  reader.question(`Is ${el1} bigga than ${el2}?? yo?`, (res) => {
    let ans = (String(res) === "yes" ? true : false);
    callback(ans);
  });
};



const innerBubbleSortLoop = (arr, i, madeAnySwaps, outerBubbleSortLoop) => {
  if (i === (arr.length - 1)) {
    return outerBubbleSortLoop(madeAnySwaps);
  } else if (i < arr.length - 1) {
    askIfGreaterThan(arr[i], arr[i + 1], (isGreaterThan) => {
      if (isGreaterThan) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        madeAnySwaps = true;
      }

      innerBubbleSortLoop(arr, ++i, madeAnySwaps, outerBubbleSortLoop);
    });
  }
};

// innerBubbleSortLoop([2, 1, 3], 0, false, (ans) => console.log(ans));

// absurdBubbleSort([3, 2, 1], function (arr) {
//   console.log("Sorted array: " + JSON.stringify(arr));
//   reader.close();
// });

Function.prototype.myBind = function(context) {
  let that = this;
  return function() { that.apply(context); }
};

class Lamp {
  constructor() {
    this.name = "a lamp";
  }
}

const turnOn = function() {
   console.log("Turning on " + this.name);
}

const lamp = new Lamp();

turnOn(); // should not work the way we want it to

const boundTurnOn = turnOn.bind(lamp);
const myBoundTurnOn = turnOn.myBind(lamp);

boundTurnOn(); // should say "Turning on a lamp"
myBoundTurnOn(); // should say "Turning on a lamp"
