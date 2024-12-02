const carMakers = ["ford", "toyota", "BMW"];
const dates = [new Date(), new Date()];
const empty: string[] = [];

const carsByMake = [["f1"], ["f2"], ["f3"]];
const carssByMake: string[][] = [];

// Help with inference when extracting values
const pop = carMakers.pop;
const myCar = carMakers[0];

// Prevent incompatible values
// carMakers.push(1);

// Help with map, reduce, etc
carMakers.map((car: string): string => {
  return car.toLowerCase();
});

// Flexible types

const importantDates: (Date | string)[] = [new Date(), "2030-11-12"];
importantDates.push("2030-11-11");
importantDates.push(new Date());

// importantDates.push(1);
