@classConstructor
class Boat {
  @testDecorators
  color: string = "red";

  get formattedColor(): string {
    return `This color is ${this.color}`;
  }

  @logError("Upps this boat suck")
  pilot(@parameterDecorator speed: string): void {
    if (speed === "fast") {
      console.log("Swish");
    } else {
      console.log("nothing");
    }
  }
}

function parameterDecorator(target: any, key: string, index: number) {
  console.log(key, index);
}
function testDecorators(target: any, key: string) {
  console.log(key);
}

function classConstructor(constructor: typeof Boat) {
  console.log(
    "constructor : " + Object.getOwnPropertyNames(constructor.prototype)
  );
}

function logError(errorMessage: string) {
  return function (target: any, key: string, desc: PropertyDescriptor): void {
    // console.log("Target : " + target);
    // console.log("Key : " + key);
    console.log(desc);

    const method = desc.value;

    desc.value = function () {
      try {
        method();
      } catch (e) {
        console.log(errorMessage);
      }
    };
  };
}

// new Boat().pilot("");
