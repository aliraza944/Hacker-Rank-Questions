const k = 1;
const a = [1, 2, 2, 1];
const b = [3, 3, 3, 4];
// condition a[i]+b[i]>= k

const t1 = [2, 1, 3];
const t2 = [7, 8, 9];

const twoArraysPermute = (k, a, b) => {
  for (let i = 0; i < a.length; i++) {
    minV = Math.min(...a);
    maxV = Math.max(...b);
    if (!(minV + maxV >= k)) {
      return "No";
    }

    a.splice(a.indexOf(minV), 1);
    b.splice(b.indexOf(maxV), 1);
  }

  return "Yes";
};

console.log(twoArraysPermute(k, t1, t2));
