const n = 7;
const arr = [1, 2, 1, 2, 1, 3, 2];

const sockMerchant = (n, arr) => {
  let pairs = 0;
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      i++;
      pairs++;
    }
  }
  return pairs;
};
console.log(sockMerchant(n, arr));
