function divideArray(numbers) {
    let evenNums = [];
    let oddNums = [];
  
    // Iterate through the numbers array
    for (let i = 0; i < numbers.length; i++) {
      // Check if the current number is even or odd
      if (numbers[i] % 2 === 0) {
        evenNums.push(numbers[i]); // Add even number to evenNums array
      } else {
        oddNums.push(numbers[i]); // Add odd number to oddNums array
      }
    }
  
    // Sort the evenNums and oddNums arrays
    evenNums.sort(function(a, b) {
      return a - b;
    });
    oddNums.sort(function(a, b) {
      return a - b;
    });
  
    // Output the sorted arrays to the console
    console.log("Even numbers:");
    if (evenNums.length > 0) {
      for (let i = 0; i < evenNums.length; i++) {
        console.log(evenNums[i]);
      }
    } else {
      console.log("None");
    }
  
    console.log("Odd numbers:");
    if (oddNums.length > 0) {
      for (let i = 0; i < oddNums.length; i++) {
        console.log(oddNums[i]);
      }
    } else {
      console.log("None");
    }
  }
  