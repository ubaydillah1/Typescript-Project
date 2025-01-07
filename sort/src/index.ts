// import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

// const numbersCollection = new NumbersCollection([5, 3, 8, 4, 2]);
// const charactersCollection = new CharactersCollection("Xaaaa");

// const sorterNumbers = new Sorter(numbersCollection);
// const sorterCharacters = new Sorter(charactersCollection);

// sorterNumbers.sort();
// sorterCharacters.sort();

// console.log(numbersCollection.data);
// console.log(charactersCollection.data);

// Before abstract
// const linkedLIst = new LinkedList();
// linkedLIst.add(50);
// linkedLIst.add(100);
// linkedLIst.add(-20);

// const sorter = new Sorter(linkedLIst);
// sorter.sort();

// linkedLIst.print();

// After
const linkedLIst = new LinkedList();
linkedLIst.add(50);
linkedLIst.add(100);
linkedLIst.add(-20);

linkedLIst.sort();
linkedLIst.print();

const numbersCollection = new NumbersCollection([5, 3, 8, 4, 2]);
const charactersCollection = new CharactersCollection("Xaaaa");

numbersCollection.sort();
charactersCollection.sort();

console.log(numbersCollection.data);
console.log(charactersCollection.data);
