import { Collection } from "../models/Collection";

export abstract class CollectionView<T, K> {
  constructor(public parent: Element, public collection: Collection<T, K>) {}

  abstract renderItem(model: T, parent: Element): void;

  render(): void {
    this.parent.innerHTML = "";

    const template = document.createElement("template");
    for (let model of this.collection.models) {
      console.log(model);
      const itemParent = document.createElement("div");
      this.renderItem(model, itemParent);

      template.content.appendChild(itemParent);
    }

    this.parent.append(template.content);
  }
}
