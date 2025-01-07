// Before abstract
// interface Sortable {
//   length: number;
//   compare(leftIndex: number, rightIndex: number): boolean;
//   swap(leftIndex: number, rightIndex: number): void;
// }

export abstract class Sorter {
  abstract compare(leftIndex: number, rightIndex: number): boolean;
  abstract swap(leftIndex: number, rightIndex: number): void;
  abstract length: number;

  sort(): void {
    const { length } = this;

    // // Type Guard (instanceof and typeof)
    // if (this.collection instanceof Array) {
    //   for (let i = 0; i < length; i++) {
    //     for (let j = 0; j < length - i - 1; j++) {
    //       // if collection is an array of numbers
    //       if (this.collection[j] > this.collection[j + 1]) {
    //         const temp = this.collection[j];
    //         this.collection[j] = this.collection[j + 1];
    //         this.collection[j + 1] = temp;
    //       }
    //     }
    //   }
    // }

    // if (typeof this.collection === "string") {
    // }

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1);
        }
      }
    }
  }
}
