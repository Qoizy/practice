// function getReminder() {
//   console.log("Water the plants.");
// }
// getReminder();

// function greetInSpanish() {
//   console.log("Buenas Tardes.");
// }
// greetInSpanish();

// function sayThanks(name) {
//   console.log(
//     "Thank you for your purchase " + name + " ! We appreciate your business."
//   );
// }

// sayThanks("Bazim");

// function monitorCounts(rows, columns) {
//   return rows * columns;
// }

// function costOfMonitors(rows, columns) {
//   return monitorCounts(rows, columns) * 200;
// }

// const totalCost = costOfMonitors(5, 4);
// console.log(totalCost);

// const plantNeedsWater = (day) => (day === "Wednesday" ? true : false);

// console.log(plantNeedsWater("Tuesday"));

// // function monitorCounts(rows, columns) {
// //   return rows * columns;
// // }

// // const numOfMonitors = monitorCounts(5, 5);
// // console.log(numOfMonitors);

// const numOfMonitors = function (rows, columns) {
//   return rows * columns;
// };

// console.log(numOfMonitors(5, 5));

// const city = "New York City";

// const logCitySkyLine = () => {
//   let skyscrapper = "Empire State Buildig";
//   return "The stars over the " + skyscrapper + " in " + city;
// };

// console.log(logCitySkyLine());

// const satellite = "The Moon";

// const galaxy = "The Milky Way";

// let stars = "North Star";

// const callMyNightSky = () => {
//   stars = "Sirius";
//   return "Night Sky: " + satellite + ", " + stars + ", and " + galaxy;
// };
// console.log(callMyNightSky());
// console.log(stars);

// const logVisibleLightWaves = () => {
//   const lightWaves = "MoonLight";
//   console.log(lightWaves);
// };

// logVisibleLightWaves();
// console.log(lightWaves);

// const logVisibleLightWaves = () => {
//   let lightWaves = "Moonlight";
//   let region = "The Arctic";
//   // Add if statement here:
//   if (region === "The Arctic") {
//     let lightWaves = "Northern Lights";
//     console.log(lightWaves);
//   }
//   console.log(lightWaves);
// };

// logVisibleLightWaves();

// const hobbies = ["coding", "reading", "writing"];
// console.log(hobbies);

// const famousSayings = [
//   "Fortune favors the brave.",
//   "A joke is a very serious thing.",
//   "Where there is love there is life.",
// ];

// const listItems = famousSayings[2];
// console.log(listItems);

// let groceryList = ["bread", "tomatoes", "milk"];

// groceryList[2] = "avocados";
// console.log(groceryList);

// let condiments = ["Ketchup", "Mustard", "Soy Sauce", "Sriracha"];

// let utensils = ["Fork", "Knife", "Chopsticks", "Spork"];

// condiments[0] = "Mayo";
// console.log(condiments);

// const javascript = ["JavaScript", "Python", "React", "Node"];

// // function changeArr(arr) {
// //   arr[2] = "Next";
// // }

// // changeArr(javascript);

// // console.log(javascript);

// // const removeElement = (newArr) => {
// //   newArr.pop();
// // };

// // removeElement(javascript);

// console.log(javascript.pop());
// console.log(javascript);
// console.log(javascript.push("Tailwind"));
// console.log(javascript);

// const collection = {
//   length: 0,
//   addElements(...elements) {
//     // obj.length will be incremented automatically
//     // every time an element is added.

//     // Returning what push returns; that is
//     // the new value of length property.
//     return [].push.call(this, ...elements);
//   },
//   removeElement() {
//     // obj.length will be decremented automatically
//     // every time an element is removed.

//     // Returning what pop returns; that is
//     // the removed element.
//     return [].pop.call(this);
//   },
// };

// collection.addElements(10, 20, 30, 40);
// console.log(collection.length); // 3
// collection.removeElement();
// console.log(collection.length); // 2

// const learning = [
//   ["react", "javascript"],
//   ["css", "node"],
//   ["next", "nuxt"],
// ];

// const target = learning[2][0];
// console.log(learning.push("tailwind"));
// console.log(learning);

// const vacationSpots = ["Italy", "France", "Spain"];

// for (let i = 0; i < vacationSpots.length; i++) {
//   console.log(`I would love to visit ${vacationSpots[i]}`);
// }

// const bobsFollowers = ["John", "Doe", "Jane", "Doe"];

// const tinasFollowers = ["John", "Jane", "Bazim"];

// const mutualFollowers = [];

// for (let i = 0; i < bobsFollowers.length; i++) {
//   for (let j = 0; j < tinasFollowers.length; j++) {
//     if (bobsFollowers[i] === tinasFollowers[j]) {
//       mutualFollowers.push(bobsFollowers[i]);
//     }
//   }
// }

// console.log(mutualFollowers);

// console.log("Hello World".toUpperCase());

// let i = 0;

// do {
//   i += 1;
//   console.log(i);
// } while (i < 5);

// // do...while statement
// const cupsOfSugarNeeded = 3;
// let cupsAdded = 2;

// do {
//   cupsAdded++;
//   console.log(cupsAdded);
// } while (cupsAdded < cupsOfSugarNeeded);

// // while statement
// let x = 0;
// let y = 0;
// while (x < 3) {
//   x++;
//   y += x;
//   console.log(x);
// }

// // for statement with break
// const rapperArray = ["Lil", "Kim", "Jay", "Bazim"];

// for (let i = 0; i < rapperArray.length; i++) {
//   console.log(rapperArray[i]);
//   if (rapperArray[i] === "Jay") {
//     break;
//   }
// }

// Write a for loop to calculate the sum of numbers from 1 to 100.
let sum = 0;

for (let i = 1; i <= 100; i++) {
  sum += i;
}

console.log("The sum of numbers from 1 to 100 is:", sum);

// Create a for loop that prints the multiplication table of a given number (e.g., 5).
const number = 5;

for (let i = 1; i <= 10; i++) {
  console.log(`${number} x ${i} = ${number * i}`);
}

// Reverse Array
const array = [1, 2, 3, 4, 5];

for (let i = array.length - 1; i >= 0; i--) {
  console.log(array[i]);
}

// Even Numbers
for (let i = 1; i <= 50; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// Pattern Printing
const rows = 5;

for (let i = 1; i <= rows; i++) {
  console.log("*".repeat(i));
}

// Guess the Number
// const correctNumber = 7;
// let guess = null;

// while (guess !== correctNumber) {
//   guess = parseInt(prompt("Guess the number: "), 10);
//   if (guess !== correctNumber) {
//     console.log("Wrong guess. Try again!");
//   }
// }
// console.log("Congratulations! You guessed it right.");

// Count Digits
let num = 12345;
let count = 0;

while (num > 0) {
  num = Math.floor(num / 10);
  count++;
}
console.log("Number of digits:", count);

// Array Methods
// ForEach
const artists = ["Wizkid", "Tems", "Burna", "Bella"];

artists.forEach((artist) => {
  console.log(artist + " is my favorite artist.");
});

// Map
const digits = [1, 2, 3, 4, 5];

const squareDigits = digits.map((digit) => {
  return digit * digit;
});

console.log(squareDigits);

// Filter
const things = ["books", "dogs", 209, "plane", 560.3];

const onlyLetters = things.filter((thing) => {
  return typeof thing === "string";
});

console.log(onlyLetters);

// forEach
const fruits = ["apple", "banana", "mango", "kiwi"];

fruits.forEach((fruit) => {
  console.log(`I want to eat ${fruit}`);
});

// filter
const randomNumbers = [450, 200, 328, 213, 250];

const smallNumbers = randomNumbers.filter((number) => {
  return number < 250;
});

console.log(smallNumbers);

// filter
const favoriteWords = [
  "Independence",
  "Freedom",
  "Love",
  "Peace",
  "Abundance",
  "Immunity",
];

const longFavoriteWords = favoriteWords.filter((word) => {
  return word.length > 7;
});
console.log(longFavoriteWords);

// findIndex
const animals = ["dog", "cat", "lion", "tiger", "elephant", "leopard"];

const foundIndex = animals.findIndex((animals) => {
  return animals === "tiger";
});

console.log(foundIndex);

const startsWithL = animals.findIndex((animals) => {
  return animals[0] === "l";
});

console.log(startsWithL);

// const rows = 5;

// for (let i = 1; i <= rows; i++) {
//   console.log("*".repeat(i));
// }

// Exercise in Eloquent JavaScript

// Looping a Triangle
const triangle = 7;

for (let i = 1; i <= triangle; i++) {
  console.log("#".repeat(i));
}

// FizzBuzz
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

// Chessboard
let size = 8;
let board = "";

for (let i = 0; i < size; i++) {
  for (let j = 0; j < size; j++) {
    if ((i + j) % 2 === 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}

console.log(board);

// Chaining two iteration methods on the same array
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const results = numbers
  .filter((number) => number % 2 !== 0)
  .map((number) => number * 2);

console.log(results);

// Defining a callback function before using in an iteration
function isOdd(num) {
  return num % 2 !== 0;
}

const Numbers = [1, 2, 3, 4, 5];
const oddNumbers = Numbers.filter(isOdd);

console.log(oddNumbers);

// MAth.min
const min = [1, 2, 3, 4, 5];

console.log(Math.min(...min));

// Recursion
function isEven(n) {
  if (n === 0) {
    return true;
  } else if (n === 1) {
    return false;
  } else if (n < 0) {
    return isEven(-n);
  } else {
    return isEven(n - 2);
  }
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(2));

// Bean counting
function countBs(string) {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === "B") {
      count++;
    }
  }
  return count;
}

console.log(countBs("AaBBCcBbDbEB"));

// countChar
function countBs(string) {
  return countChar(string, "B");
}

function countChar(string, char) {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === char) {
      count++;
    }
  }
  return count;
}

console.log(countChar("mississippi", "s"));
console.log(countChar("AaBBCcBbDbEB", "B"));
console.log(countBs("bbbBadsARSJOH"));

// using for..in loop
let spaceship = {
  crew: {
    captain: {
      name: "Lily",
      degree: "Computer Science",
      cheerTeam() {
        console.log("You got this!");
      },
    },
    "chief officer": {
      name: "Dan",
      degree: "Frontend Developer",
      agree() {
        console.log("I agree, captain!");
      },
    },
    medic: {
      name: "Doe",
      degree: "Doctor",
      announce() {
        console.log("Jet on!");
      },
    },
    translator: {
      name: "Bazim",
      degree: "Linguistics",
      powerFuel() {
        console.log("The tank is full!");
      },
    },
  },
};

for (let role in spaceship.crew) {
  console.log(`${role}: ${spaceship.crew[role].name}`);
}

for (let role in spaceship.crew) {
  console.log(`${spaceship.crew[role].name}: ${spaceship.crew[role].degree}`);
}

for (let role in spaceship.crew) {
  console.log(`${spaceship.crew.translator.name}`);
}

// this method
const robot = {
  model: "1E78V2",
  energyLevel: 100,
  provideInfo() {
    return `I am ${this.model} and my current energy level is ${this.energyLevel}`;
  },
};

console.log(robot.provideInfo());

// getter method
const robots = {
  _model: "1E78V2",
  _energyLevel: 100,
  get energyLevel() {
    if (typeof this._energyLevel === "number") {
      return `My current energy level is ${this._energyLevel}`;
    } else {
      return "System malfunction: cannot retrieve energy level";
    }
  },
};

console.log(robots.energyLevel);

// setter method
const robot1 = {
  _model: "1E78V2",
  _energyLevel: 100,
  _numOfSensors: 15,
  get numOfSensors() {
    if (typeof this._numOfSensors === "number") {
      return this._numberOfSensors;
    } else {
      return "Sensors is currently down.";
    }
  },
  set numOfSensors(num) {
    if (typeof num === "number" && num >= 0) {
      this._numOfSensors = num;
    } else console.log("Pass in a number that is greater than or equal to 0");
  },
};

robot.numOfSensors = 100;
console.log(robot.numOfSensors);

// factory function
const robotFactory = (model, mobile) => {
  return {
    model: model,
    mobile: mobile,
    beep() {
      console.log("Beep Boop");
    },
  };
};

const tinCan = robotFactory("P-500", true);

tinCan.beep();
console.log(tinCan.model);

// destructuring
function robotFactorys(model, mobile) {
  return {
    model,
    mobile,
    beep() {
      console.log("Beep Boop");
    },
  };
}

const newRobot = robotFactorys("P-500", false);
console.log(newRobot.model);
console.log(newRobot.mobile);

// destructuring assignment
const robot2 = {
  model: "1E78V2",
  energyLevel: 100,
  functionality: {
    beep() {
      console.log("Beep Boop");
    },
    fireLaser() {
      console.log("Pew Pew");
    },
  },
};

const { functionality } = robot2;
functionality.beep();

// built-in object methods
const robot3 = {
  model: "1E78V2",
  mobile: true,
  energyLevel: 75,
  armor: "Steel-plated",
  print() {
    console.log(
      `The robot's name is ${this.name} and it's designed by ${this.brand}`
    );
  },
};

const robotKeys = Object.keys(robot3);

console.log(robotKeys);

const robotEntries = Object.entries(robot3);

console.log(robotEntries);

const newRobot3 = Object.assign(robot3, {
  laserBlaster: true,
  voiceRecognition: true,
});

console.log(newRobot3);

const me = Object.create(robot3);
me.name = "Vera";
me.brand = "Tesla";

me.print();

// constructor function
class Surgeon {
  constructor(name, department) {
    this._name = name;
    this._department = department;
    this._remainingVacationDays = 20;
  }
  get name() {
    return this._name;
  }
  get department() {
    return this._department;
  }
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
}

const surgeonCurry = new Surgeon("Curry", "Cardiovascular");
const surgeonDurant = new Surgeon("Durant", "Orthoppedics");

console.log(surgeonCurry.name);
surgeonCurry.takeVacationDays(3);
console.log(surgeonCurry.remainingVacationDays);

// Inheritance
class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }
  get name() {
    return this._name;
  }
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
  static generatePassword() {
    return Math.floor(Math.random() * 10000);
  }
}

class Nurse extends HospitalEmployee {
  constructor(name, certifications) {
    super(name);
    this._certifications = certifications;
  }
  get certifications() {
    return this._certifications;
  }
  addCertification(newCertification) {
    this._certifications.push(newCertification);
  }
}

const nurseMide = new Nurse("Mide", ["Medics, Pediatrics"]);

nurseMide.takeVacationDays(5);
console.log(nurseMide.remainingVacationDays);

nurseMide.addCertification("Genetics");
console.log(nurseMide.certifications);

let a = 10;
function inner() {
  let b = 20;
  function outer() {
    let c = 30;
    console.log(a, b, c);
  }
  outer();
}
inner();

// Generator (iterables)
function* generatorFunction() {
  yield `Hello`;
  yield `World`;
}

const generatorObj = generatorFunction();
for (const word of generatorObj) {
  console.log(word);
}

// Callback function
function greet(name) {
  console.log(`Hello ${name}`);
}

function greetQoizy(greetFn) {
  const name = "Qoizy";
  greetFn(name);
}

greetQoizy(greet);

// Math.min
function Min(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}
console.log(Min(2, 4));
