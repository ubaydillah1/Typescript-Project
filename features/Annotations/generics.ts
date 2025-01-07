// class ArrayOfNumbers {
//   constructor(public collection: number[]) {}

//   get(index: number): number {
//     return this.collection[index];
//   }
// }

// class ArrayOfStrings {
//   constructor(public collection: string[]) {}

//   get(index: number): string {
//     return this.collection[index];
//   }
// }

class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
}

// Example of generics with functions
function printAnything<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

const letters = new ArrayOfAnything(["a", "b", "c"]);
printAnything<string>(letters.collection);

// Generic Constraints

class Car {
  print() {
    console.log("I'm a Car");
  }
}

class House {
  print() {
    console.log("I'm a House");
  }
}

interface Printable {
  print(): void;
}

function printHousesOrCars<T extends Printable>(arr: T[]) {
  for (let i = 0; i < arr.length; i++) {
    arr[i].print();
  }
}

printHousesOrCars<House>([new House()]);
printHousesOrCars<Car>([new Car()]);
