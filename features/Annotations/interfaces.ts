interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: "Civic",
  year: new Date(),
  broken: true,
  summary(): string {
    return `${this.name} is vehicle`;
  },
};

const drink = {
  type: "drink",
  carbonate: true,
  sugar: 40,
  summary(): string {
    return `This drink have ${this.sugar}mg sugar`;
  },
};

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

printSummary(oldCivic);
printSummary(drink);
