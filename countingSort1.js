const array = [1, 1, 3, 2, 1];
const countingSort1 = (arr) => {
  // to create range array with zero values

  let a = Array(100).fill(0);
  for (let i = 0; i < 100; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i == arr[j]) {
        a[i] += 1;
      }
    }
  }
  return a;
};
countingSort1(array);
