const ROMAN_TO_DECIMAL = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  };
  function romanToDecimal(roman) {
    let result = 0;
    for (let i = 0; i < roman.length; i++) {
      const current = ROMAN_TO_DECIMAL[roman[i]];
      const next = ROMAN_TO_DECIMAL[roman[i + 1]];
      if (current < next) {
        result -= current;
      } else {
        result += current;
      }
    }
    return result;
  }
  console.log(romanToDecimal(prompt('Введите число на РИМСКОМ')));  