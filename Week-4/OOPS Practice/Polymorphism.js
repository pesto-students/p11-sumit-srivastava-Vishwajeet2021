class Shape {
    calculateArea() {
      console.log("Error: calculateArea() method not implemented.");
    }
  }
  
  class Rectangle extends Shape {
    constructor(width, height) {
      super();
      this.width = width;
      this.height = height;
    }
  
    calculateArea() {
      return this.width * this.height;
    }
  }
  
  class Triangle extends Shape {
    constructor(base, height) {
      super();
      this.base = base;
      this.height = height;
    }
  
    calculateArea() {
      return 0.5 * this.base * this.height;
    }
  }
  
  class Circle extends Shape {
    constructor(radius) {
      super();
      this.radius = radius;
    }
  
    calculateArea() {
      return Math.PI * Math.pow(this.radius, 2);
    }
  }
  
  const rectangle = new Rectangle(5, 10);
  const triangle = new Triangle(8, 6);
  const circle = new Circle(3);
  
  console.log(rectangle.calculateArea());
  console.log(triangle.calculateArea());
  console.log(circle.calculateArea());
  