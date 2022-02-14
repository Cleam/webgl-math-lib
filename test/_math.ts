function sqrt(target: number, guessNum: number = target / 2): number {
  let i = 10;
  let result: number = 0;
  while (i > 0) {
    result = (guessNum + target / guessNum) / 2;
    guessNum = result;
    i--;
  }
  return result;
}
