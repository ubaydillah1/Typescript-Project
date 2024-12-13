import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";

const numbersCollection = new NumbersCollection([5, 3, 8, 4, 2]);
const charactersCollection = new CharactersCollection("Xaaaa");

const sorterNumbers = new Sorter(numbersCollection);
const sorterCharacters = new Sorter(charactersCollection);

sorterNumbers.sort();
sorterCharacters.sort();

console.log(numbersCollection.data);
console.log(charactersCollection.data);
