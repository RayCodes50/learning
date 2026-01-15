function sumAll(a, b) {
  let sum = 0;
  if (typeof a !== "number" || typeof b !== "number") {
    return `ERROR`;
  }
  if (a < 0 || b < 0) {
    return `ERROR`;
  }
  if (!Number.isInteger(a) || !Number.isInteger(b)) {
    return `ERROR2`;
  }

  if (b < a) {
    [a, b] = [b, a];
  }

  for (let i = a; i <= b; i++) {
    sum += i;
  }
  return sum;
}

console.log(sumAll(2000021, 4));
