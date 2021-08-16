const test = "abcdefghijklmnopqrstuvwxyz";
const test2 = "We promptly judged antique ivory buckles for the next prize";

const pangrams = (s) => {
  const c = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  const x = s.toUpperCase();
  for (let i = 0; i < c.length; i++) {
    if (x.indexOf(c[i]) === -1) {
      return "not panagram";
    }
  }
  return "panagram";
};
console.log(pangrams(test2));
