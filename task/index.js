const addNumbers = (a, b) => a + b;

const sum = addNumbers(5, 7);
console.log("Sum:", sum); 

const str = "I am enjoying my training";
const loc = str.indexOf("my");

if (loc !== -1) {
  console.log(`Location of "my": ${loc}`);
} else {
  console.log('"my" not found in the string.');
}

const str1 = "I am enjoying my training";
const locations = [];
let index = -1;

while ((index = str1.indexOf("m", index + 1)) !== -1) {
  locations.push(index);
}

if (locations.length > 0) {
  console.log(`Locations of "m": ${locations.join(", ")}`);
} else {
  console.log('"m" not found in the string.');
}

