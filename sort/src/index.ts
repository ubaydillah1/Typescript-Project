import { Sorter } from "./Sorter";
import { NumberCollection } from "./NumbersCollection";

const numbersCollection = new NumberCollection([5, 3, 8, 4, 2]);
const sorter = new Sorter(numbersCollection);
sorter.sort();

console.log(numbersCollection.data);
