import { Model } from "../models/Model";
import { HasId } from "../models/Model";

export abstract class View<T extends Model<K>, K extends HasId> {
  constructor(public parent: Element, public model: T) {
    this.bindModel();
  }

  abstract eventsMap(): { [key: string]: () => void };
  abstract template(): string;

  bindModel(): void {
    this.model.on("change", () => {
      this.render();
    });
  }

  bindEvents(fragment: DocumentFragment): void {
    const eventsMap = this.eventsMap();

    for (const eventKey in eventsMap) {
      const [eventName, selector] = eventKey.split(":");

      fragment.querySelectorAll(selector).forEach((element: Element) => {
        element.addEventListener(eventName, eventsMap[eventKey]);
      });
    }
  }

  // test
  render(): void {
    this.parent.innerHTML = "";

    const templateElement = document.createElement("template");
    templateElement.innerHTML = this.template();

    this.bindEvents(templateElement.content);

    this.parent.appendChild(templateElement.content);
  }
}
