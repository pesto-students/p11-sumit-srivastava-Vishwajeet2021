function* stringToSymbolIterator(arr) {
    for (let str of arr) {
      yield Symbol(str);
    }
  }
  

  const strings = ['hello', 'world', 'test'];
  const iterator = stringToSymbolIterator(strings);
  
  for (let symbol of iterator) {
    console.log(symbol);
  }
  