function add(numbers) {
  if (!numbers) return 0;

  let delimiter = /[\n,]+/;
  if (numbers.startsWith("//")) {
    const parts = numbers.split("\n");
    const delimiterPart = parts[0].substring(2);

    if (delimiterPart.startsWith("[") && delimiterPart.endsWith("]")) {
      const delimiters = delimiterPart
        .match(/\[.*?\]/g)
        .map((d) => d.slice(1, -1));
      delimiter = new RegExp(delimiters.map((d) => escapeRegExp(d)).join("|"));
    } else {
      delimiter = new RegExp(escapeRegExp(delimiterPart));
    }

    numbers = parts[1];
  }

  const nums = numbers
    .split(delimiter)
    .map(Number)
    .filter((num) => num <= 1000);

  const negativeNumbers = nums.filter((num) => num < 0);

  if (negativeNumbers.length) {
    throw new Error(`Negative numbers are not allowed!}`);
  }

  return nums.reduce((sum, num) => sum + num, 0);
}

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

module.exports = { add };
