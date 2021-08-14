const array = [1, 3, 5, 7, 9];
const array2 = [1, 2, 3, 4, 5];

const minMaxSum = (arr) => {
  const sumArray = [];
  const totalSum = arr.reduce((a, b) => {
    return a + b;
  }, 0);

  for (let i = 0; i < arr.length; i++) {
    sumArray[i] = totalSum - arr[i];
  }
  console.log(`${Math.min(...sumArray)} ${Math.max(...sumArray)}`);
};
minMaxSum(array2);
