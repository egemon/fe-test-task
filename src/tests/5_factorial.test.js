const factorial = (n) => {
  // ur code here
};

it('0 value', () => {
  expect(factorial(0)).toBe(1)
});

it('1 value', () => {
  expect(factorial(1)).toBe(1)
});

it('4 value', () => {
  expect(factorial(4)).toBe(1*2*3*4)
});
