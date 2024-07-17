console.log("hi")
// class Car {
//     // Code to define the class's properties and methods
//   };


class Car {
    constructor(make, model, color) {
      this.make = make;
      this.model = model;
      this.color = color 
      this.isRunning = false // default to false
      // return is not needed
      // because the new object is returned by default
    }
    start() {
        this.isRunning = true
        console.log("Vrooooom!")
    }
    stop() {
        console.log("Stop")
        this.isRunning = false
        }
    static about() {
        console.log("I'm the car class")
    }
  }
const myCar = new Car('Acura', 'NSX', 'Lime Green');
console.log(myCar)

class ElectricCar extends Car {
    constructor(make, model, color, batteryCharge) {
        super()
    }
}

// // Car {}