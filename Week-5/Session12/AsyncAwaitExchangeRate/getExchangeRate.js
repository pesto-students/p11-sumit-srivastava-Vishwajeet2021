async function getExchangeRate(currencyCode) {
    try {
      const response = await fetch('https://api.exchangeratesapi.io/latest?base=USD');
      if (!response.ok) {
        throw new Error('Failed to fetch exchange rates');
      }
  
      const data = await response.json();
  
      if (!data.rates.hasOwnProperty(currencyCode)) {
        return null;
      }
  
      const rate = data.rates[currencyCode];
      return parseFloat(rate.toFixed(4));
    } catch (error) {
      throw new Error('An error occurred while fetching exchange rates: ' + error.message);
    }
  }
  
  // Example usage:
  getExchangeRate('USD')
    .then((rate) => {
      console.log(rate); 
    })
    .catch((error) => {
      console.error(error);
    });
  