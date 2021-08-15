const array = [
  [1, 2, 3],
  [4, 5, 6],
  [9, 8, 9],
];

function diagonalDifference(arr) {
  let p = 0;
  let s = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i === j) {
        p = p + arr[i][j];
      }
      if (i + j + 1 === arr.length) {
        s = s + arr[i][j];
      }
    }
  }
  return Math.abs(p - s);
}
diagonalDifference(array);
