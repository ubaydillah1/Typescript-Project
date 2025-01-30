import "reflect-metadata";

// const plane = {
//   color: "red",
// };

// Reflect.defineMetadata("note", "hi There", plane);
// const note = Reflect.getMetadata("note", plane);

// console.log(plane);
// console.log(note);

// 4 parameters
// Reflect.defineMetadata("note", "Hi There", plane, "color");

// const note = Reflect.getMetadata("note", plane, "color");
// console.log(note);

@controller
class Plane {
  color: string = "red";

  @get("/login")
  fly(): void {
    console.log("vrrrr");
  }
}

function get(path: string) {
  return function (target: Plane, key: string) {
    Reflect.defineMetadata("path", path, target, key);
  };
}

// const secret = Reflect.getMetadata("secret", Plane.prototype, "fly");
// console.log(secret);

function controller(target: typeof Plane) {
  for (let key of Object.getOwnPropertyNames(Plane.prototype)) {
    if (key !== "constructor") {
      const secret = Reflect.getMetadata("path", target.prototype, key);
      const middleware = Reflect.getMetadata(
        "middlware",
        target.prototype,
        key
      );

      console.log(secret);
    }
  }
}
