const { add } = require("./index");

test("returns 0 for an empty string", () => {
  expect(add("")).toBe(0);
});

test("returns the number itself for a single number", () => {
  expect(add("1")).toBe(1);
});

test("returns the sum of numbers separated by commas", () => {
  expect(add("1,2,3")).toBe(6);
});

test("returns the sum of numbers separated by new lines and commas", () => {
  expect(add("4\n5,6")).toBe(15);
});

test("returns the sum of numbers separated by different delimiters, new lines and commas", () => {
  expect(add("//;\n7;8")).toBe(15);
});

test("returns an exception when negative numbers are present in the input", () => {
  expect(() => add("1,-2,3")).toThrow("Negative numbers are not allowed!");
});

test("returns the sum of numbers while ignoring numbers greater than 1000", () => {
  expect(add("1001,2")).toBe(2);
});

test("returns the sum of numbers separated by delimiters of any length", () => {
  expect(add("//[***]\n1***2***3")).toBe(6);
});

test("should handle multiple delimiters", () => {
  expect(add("//[*][%]\n1*2%3")).toBe(6);
});

test("should handle multiple delimiters with length greater than one", () => {
  expect(add("//[***][%%]\n1***2%%3")).toBe(6);
});
