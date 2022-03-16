function factorial(num) {
  let result = 1;
  while (num > 0) {
    result += result * (num - 1);
    num--;
  }
  return result;
}

console.log('factorial', factorial(4))
