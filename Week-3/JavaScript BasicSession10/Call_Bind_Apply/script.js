// Calculator class
class Calculator {
    add(num1, num2) {
      return num1 + num2;
    }
  
    subtract(num1, num2) {
      return num1 - num2;
    }
  
    multiply(num1, num2) {
      return num1 * num2;
    }
  
    divide(num1, num2) {
      return num1 / num2;
    }
  }
  
  // ScientificCalculator class extends Calculator
  class ScientificCalculator extends Calculator {
    square(num) {
      return num * num;
    }
  
    cube(num) {
      return num * num * num;
    }
  
    power(num, exponent) {
      return Math.pow(num, exponent);
    }
  }
  
  // Create an instance of ScientificCalculator
  const scientificCalculator = new ScientificCalculator();
  
  // Using call to invoke add method of Calculator with arguments 10 and 5
  const additionResult = Calculator.prototype.add.call(scientificCalculator, 10, 5);
  console.log("Addition result:", additionResult);
  
  // Using apply to invoke subtract method of Calculator with arguments 10 and 5
  const subtractionResult = Calculator.prototype.subtract.apply(scientificCalculator, [10, 5]);
  console.log("Subtraction result:", subtractionResult);
  
  // Using bind to create multiplyByTwo method that multiplies a number by 2
  const multiplyByTwo = scientificCalculator.multiply.bind(scientificCalculator, 2);
  const multiplyByTwoResult = multiplyByTwo(5);
  console.log("Multiplication result:", multiplyByTwoResult);
  
  // Using bind to create powerOfThree method that raises a number to the power of 3
  const powerOfThree = scientificCalculator.power.bind(scientificCalculator, 3);
  const powerOfThreeResult = powerOfThree(2);
  console.log("Power result:", powerOfThreeResult);
  