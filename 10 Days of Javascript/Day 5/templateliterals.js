function sides(literals, ...expressions) {
  const [a, p] = expressions;
  const root = Math.sqrt(p * p - 16 * a);
  const s1 = (p + root) / 4;
  const s2 = (p - root) / 4;
  return [s2, s1];
}

// ref: https://programs.programmingoneonone.com/2021/02/hackerrank-day-5-template-literals-solution-javascript.html
