const input = ["ab", "ab", "ca", "abc"];
const query = ["ab", "ca", "abc"];
// result [2, 0, 0]

const matchingStrings = (input, query) => {
  let result = [];

  for (let k = 0; k < query.length; k++) {
    result[k] = 0;
  }

  for (let i = 0; i < query.length; i++) {
    for (let j = 0; j < input.length; j++) {
      if (query[i] === input[j]) {
        result[i] = result[i] + 1;
      } else {
        result[i] = result[i] + 0;
      }
    } //inner loop
  } //outer loop
  console.log(result);
};
matchingStrings(input, query);
