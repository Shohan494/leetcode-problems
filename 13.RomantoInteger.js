const romanSymbols = new Map([
  [900, 'CM'],
  [400, 'CD'],
  [90, 'XC'],
  [40, 'XL'],
  [9, 'IX'],
  [4, 'IV'],
  [1000, 'M'],
  [500, 'D'],
  [100, 'C'],
  [50, 'L'],
  [10, 'X'],
  [5, 'V'],
  [3, 'III'],
  [2, 'II'],
  [1, 'I']
]);

// MCMXCIV

// in the string above symbols will be searched
// then we have to remove the symbol from the string
// repeat

function romanToInt(s) {
  let myString = s;
  let romanToInt = 0;
  while(myString != "")
  {
      romanSymbols.forEach(function logMapElements(value, key, map) {
      let position = myString.search(value)
      if(position !== -1)
      {
        console.log(myString)
        console.log(value)
        myString = myString.replace(value, '')
        console.log(myString)
        romanToInt += key;
      }
    });
  }
  console.log(romanToInt)
};

romanToInt("III")
