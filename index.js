function add(numbers) {
  if (!numbers) return 0;
  let delimiter = /[\n,]+/;
  if (numbers.startsWith("//")) {
    const parts = numbers.split("\n");
    delimiter = new RegExp(parts[0][2]);
    numbers = parts[1];
  }
  const nums = numbers.split(delimiter).map(Number);
  const negativeNumbers = nums.filter((num) => num < 0);

  if (negativeNumbers.length) {
    throw new Error(`Negative numbers are not allowed!`);
  }

  return nums.reduce((sum, num) => sum + num, 0);
}

module.exports = { add };
