const { add } = require("./index");

test("returns 0 for an empty string", () => {
  expect(add("")).toBe(0);
});

test("returns the number itself for a single number", () => {
  expect(add("1")).toBe(1);
});

test("returns the sum of numbers separated by commas", () => {
  expect(add("1,2")).toBe(3);
});
