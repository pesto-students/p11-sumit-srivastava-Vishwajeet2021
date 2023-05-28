function counter() {
    let count = 0;  
    return function() {
      count++;
      return count;
    };
  }
  
  let firstCounter = counter();
  let secondCounter = counter();
  
  let firstValues = [];
  for (let i = 0; i < 5; i++) {
    firstValues.push(firstCounter());
  }
  
  let secondValues = [];
  for (let i = 0; i < 3; i++) {
    secondValues.push(secondCounter());
  }
  
  console.log("firstValues array:", firstValues);
  console.log("secondValues array:", secondValues);
  