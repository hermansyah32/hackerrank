function getSecondLargest(nums) {
  const arrayNum = [];
  nums.forEach((stringNum) => {
    if (arrayNum.indexOf(stringNum) < 0) arrayNum.push(stringNum);
  });
  return arrayNum.sort((a, b) => b - a)[1];
}
