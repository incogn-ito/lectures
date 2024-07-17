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
    start() { // start method
        this.isRunning = true
        console.log("Vrooooom!")
    }
    stop() { //stop method
        console.log("Stop")
        this.isRunning = false
        }
    static about() {  // this static method stores ivalue of that value and 
        console.log("I'm the car class")
    }
    toString() {
        return `This car is a ${color} ${model} ${make}`
    }
  }
const myCar = new Car('Acura', 'NSX', 'Lime Green');
console.log(myCar)

class ElectricCar extends Car {    // allows us to inherit everything from Car class
    constructor(make, model, color, batteryCharge) {
        super(make, model, color) 
        // super tells computer "go run this: make, model etc" so we don't have to write it again. We need this to inherit the "this.make, this.model etc"
        this.batteryCharge = batteryCharge
    }
    start() {
        if (this.batteryCharge > 0) {
            this.isRunning = true
            console.log("Your electric caris running")
        } else {
            this.isRunning = false
            console.log("Time to recharge!")
        }
    }
}
console.log(ElectricCar)