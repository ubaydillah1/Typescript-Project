class Vehicle {
  //   drive(): void {
  //     console.log("Driveeeee");
  //   }
  //   private color: string;

  constructor(private color: string) {
    // shortcut public untuk property color dan set property color lewat contructor
    // this.color = color;
  }

  protected honk(): void {
    console.log("Beep");
  }

  getColor(): void {
    console.log(this.color);
  }
}

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  private drive(): void {
    console.log("Brooooom");
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }

  getWheel(): void {
    console.log(this.wheels);
  }
}

const vehicle = new Vehicle("Orange");
// vehicle.drive();
// vehicle.honk();

const car = new Car(5, "Blue");
car.getColor();
car.getWheel();
// car.drive();

car.startDrivingProcess();
