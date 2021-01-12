// Write a function that generates the n first numbers of the Fibonacci sequence.

const fib = (n, values = {}) => {
  console.log('n => ', n);
  if (n in values) {
    return values[n];
  }
  if (n <= 2) return 1;

  values[n] = fib(n - 1, values) + fib(n - 2, values);

  return values[n];
};

console.log(fib(8));
