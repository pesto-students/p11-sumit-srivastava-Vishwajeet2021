function generateTransactionId() {
    let counter = 1; // Counter to generate unique numbers for each transaction ID
  
    return function() {
      const symbolDescription = `TRANSACTION_ID_${counter}`; // Description for the symbol
      const transactionId = Symbol(symbolDescription); // Create a new symbol
  
      counter++; // Increment the counter for the next transaction ID
  
      return transactionId;
    };
  }
  
  // Example usage:
  const generateTransaction = generateTransactionId(); // Create the function to generate transaction IDs
  
  const transaction1 = generateTransaction();
  console.log(transaction1); // Output: Symbol(TRANSACTION_ID_1)
  
  const transaction2 = generateTransaction();
  console.log(transaction2); // Output: Symbol(TRANSACTION_ID_2)
  
  const transaction3 = generateTransaction();
  console.log(transaction3); // Output: Symbol(TRANSACTION_ID_3)
  