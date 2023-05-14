function Vehicle(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  
  Vehicle.prototype.getDetails = function() {
    return `${this.make} ${this.model} ${this.year}`;
  }
  
  function Car(make, model, year, numDoors) {
    Vehicle.call(this, make, model, year);
    this.numDoors = numDoors;
  }
  
  Car.prototype = Object.create(Vehicle.prototype);
  Car.prototype.constructor = Car;
  Car.prototype.getDetails = function() {
    return `${Vehicle.prototype.getDetails.call(this)}, ${this.numDoors} doors`;
  }
  
  let vehicle = new Vehicle("Toyota", "Camry", 2022);
  console.log(vehicle.getDetails());
  
  let car = new Car("Honda", "Civic", 2023, 4);
  console.log(car.getDetails());
  