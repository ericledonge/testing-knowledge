const sum = (a, b) => a + b;
const subtract = (a, b)  => a - b;

// simplest form of test
let result = sum(3, 7)
let expected = 10
expect(result).toBe(expected)

result = subtract(7, 3)
expected = 4
expect(result).toBe(expected)

// Simplest assertion library
function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${result} is not equal to ${expected}`)
      }
    },
    toEqual(expected) {},
    toBeGreaterThan(expected) {},
  }
}
