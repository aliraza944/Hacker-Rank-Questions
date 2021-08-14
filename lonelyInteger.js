const array = [1, 2, 3, 4, 3, 2, 1];
// expected output 4

const lonelyinteger = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    const y = arr.filter((item) => item === arr[i]);
    if (y.length === 1) {
      return arr[i];
    }
  }
};
lonelyinteger(array);
