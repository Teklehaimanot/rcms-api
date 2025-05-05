console.log("test");

let a = 1;
const pi = 3.14;
let b = "abebe";
let c = true;
let d = "a";
a = "2";
// pi = 5;
console.log(a);

if (a === 2) {
  console.log("correct");
} else {
  console.log("incorrect");
}

const arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
  console.log(`number_${i + 1}`);
}

const addtion = (a, b) => {
  return a + b;
};

console.log(addtion(6, 5));
