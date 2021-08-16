const t1 = [2, 2, 1, 3, 2];
const d = 4;
const m = 2;

const subarrayDivision = (arr, d, m) => {
  let barDivided = 0;

  for (let i = 0; i < arr.length - m + 1; i++) {
    let temp = 0;
    for (let j = i; j < i + m; j++) {
      temp += arr[j];
    }
    if (temp === d) {
      barDivided++;
    }
  }
  return barDivided;
};

console.log(subarrayDivision(t1, d, m));
