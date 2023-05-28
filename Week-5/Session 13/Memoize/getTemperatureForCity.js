function getTemperatureForCity() {
    const cache = {}; // Private cache object to store the results
  
    return function(city) {
      if (cache.hasOwnProperty(city)) {
        // If the temperature is already cached, return it
        return cache[city];
      } else {
        // Otherwise, retrieve the temperature from the temperatureData object
        const temperature = temperatureData[city];
  
        // Cache the temperature for future use
        cache[city] = temperature;
  
        return temperature;
      }
    };
  }
  
  
  const temperatureData = {
    'New York': 20,
    'London': 18,
    'Paris': 22,
    'Tokyo': 25,
    'Sydney': 28,
  };
  
  const getTemperature = getTemperatureForCity(); // Create the memoized function
  
  const temperature1 = getTemperature('New York');
  console.log(temperature1); // Output: 20
  
  const temperature2 = getTemperature('New York');
  console.log(temperature2); // Output: 20 (retrieved from cache)
  
  const temperature3 = getTemperature('London');
  console.log(temperature3); // Output: 18
  
  const temperature4 = getTemperature('London');
  console.log(temperature4); // Output: 18 (retrieved from cache)
  