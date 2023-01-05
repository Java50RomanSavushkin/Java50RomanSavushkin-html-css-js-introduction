//Task #1
function coloringString(str1, str2) {
  ar = Array.from(str1);
  return ar.map(function (char1, i) {
    const char2 = str2[i];
    return char1 === char2 ? 'green' : str2.includes(char1) ? 'yellow' : 'red';
  });
}
console.log(coloringString('apple', 'pappy'));


//Task #2
function getNumbersWithDigitsAmount(digitsAmount, array) {
  return array.filter(function (num) {
    return Math.abs(num).toString().length === digitsAmount;
  });
}
console.log(getNumbersWithDigitsAmount(3, [1, 100, -100, 25, 1000]))
