const fib = (n, memo) => {
  let result;

  if (memo[n]) {
    console.log(`cache: ${n} = ${memo[n]}`);
    return memo[n];
  }

  if (n === 1 || n === 2) {
    result = 1;
  } else {
    result = fib(n - 1, memo) + fib(n - 2, memo);
    console.log(`${n} - 1`, "=", `${n - 1}, => left`);
    console.log(`${n} - 2`, "=", `${n - 2} => right`);
    console.log(result);
    memo[n] = result;
  }
  return result;
};

const res = fib(10, []);
