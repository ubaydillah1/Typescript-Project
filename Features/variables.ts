let number: number = 4;
let speed: string = "fast";
let hasName: boolean = true;
let nothing: null = null;
let undi: undefined = undefined;

let inference = "blabla";

let any;
any = 10;

// Built in objects
let now: Date = new Date();

// Array
let colors: string[] = ["red", "green", "blue"];
let myNumbers: number[] = [1, 2, 3];

// Classes
class Car {}

let car: Car = new Car();

// Object Literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// Function
let logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// When you use annotations
// 1) Function that return any type
let json = '{"x" : 10, "y" : 20}';
let coordinates: { x: number; y: number } = JSON.parse(json); // {x: 10, y: 20}
console.log(coordinates);

// 2) When we declare a variable on one line and initialize later
let words = ["red", "green", "blue"];
let foundWord: boolean | undefined;

for (let i: number = 0; i < words.length; i++) {
  if (words[i] === "green") {
    foundWord = true;
    break;
  }
}
console.log(foundWord);

// 3) variable whoose type  cannot be inferred correctly
let numbers = [-10, 10, 1];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
    break;
  }
}
