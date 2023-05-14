class Vehicle {
    constructor(make, model, year, color) {
      this.make = make;
      this.model = model;
      this.year = year;
      this.color = color;
    }
  
    drive() {
      console.log(`Driving ${this.make} ${this.model}.`);
    }
  }
  
  class Car extends Vehicle {
    constructor(make, model, year, color, unseats) {
      super(make, model, year, color);
      this.unseats = unseats;
    }
  }
  
  class RideshareCar extends Car {
    constructor(make, model, year, color, unseats, avasLabic) {
      super(make, model, year, color, unseats);
      this.avasLabic = avasLabic;
    }
  }
  